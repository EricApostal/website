import { useMemo, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import './emberMaterial'

interface EmberFieldProps {
  count: number
  coolRef: React.MutableRefObject<number>
  pointerRef: React.MutableRefObject<{ x: number; y: number }>
}

const BOUNDS_X = 9
const BOUNDS_Z = 6
const TOP_Y = 6.5
const BOTTOM_Y = -6.5

export function EmberField({ count, coolRef, pointerRef }: EmberFieldProps) {
  const materialRef = useRef<any>(null)
  const pointsRef = useRef<THREE.Points>(null)
  const { camera } = useThree()

  const { positions, seeds, speeds, heats, sizes, baseX, baseZ, driftAmp } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const seeds = new Float32Array(count)
    const speeds = new Float32Array(count)
    const heats = new Float32Array(count)
    const sizes = new Float32Array(count)
    const baseX = new Float32Array(count)
    const baseZ = new Float32Array(count)
    const driftAmp = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const yBias = Math.pow(Math.random(), 2.2)
      const x = (Math.random() * 2 - 1) * BOUNDS_X
      const z = (Math.random() * 2 - 1) * BOUNDS_Z
      const y = BOTTOM_Y + yBias * (TOP_Y - BOTTOM_Y)

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      baseX[i] = x
      baseZ[i] = z
      seeds[i] = Math.random() * 1000
      speeds[i] = 0.25 + Math.random() * 0.55
      heats[i] = Math.random()
      sizes[i] = 1.2 + Math.random() * 3.2
      driftAmp[i] = 0.4 + Math.random() * 1.1
    }

    return { positions, seeds, speeds, heats, sizes, baseX, baseZ, driftAmp }
  }, [count])

  const targetPointer = useRef({ x: 0, y: 0 })

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05)
    const t = state.clock.elapsedTime
    const geom = pointsRef.current?.geometry
    const posAttr = geom?.attributes.position as THREE.BufferAttribute | undefined
    if (posAttr) {
      const arr = posAttr.array as Float32Array
      for (let i = 0; i < count; i++) {
        const idx = i * 3
        let y = arr[idx + 1] + speeds[i] * dt
        if (y > TOP_Y) {
          y = BOTTOM_Y
        }
        arr[idx + 1] = y

        const s = seeds[i]
        arr[idx] = baseX[i] + Math.sin(t * 0.18 + s) * driftAmp[i] * 0.6
        arr[idx + 2] = baseZ[i] + Math.cos(t * 0.15 + s * 1.3) * driftAmp[i] * 0.6
      }
      posAttr.needsUpdate = true
    }

    if (materialRef.current) {
      materialRef.current.uCool = coolRef.current
      materialRef.current.uOpacity = 1
    }

    targetPointer.current.x += (pointerRef.current.x - targetPointer.current.x) * 0.03
    targetPointer.current.y += (pointerRef.current.y - targetPointer.current.y) * 0.03
    camera.position.x = targetPointer.current.x * 0.6
    camera.position.y = targetPointer.current.y * 0.35
    camera.lookAt(0, 0, 0)
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aHeat" args={[heats, 1]} />
        <bufferAttribute attach="attributes-aSize" args={[sizes, 1]} />
      </bufferGeometry>
      <emberMaterial
        ref={materialRef}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
