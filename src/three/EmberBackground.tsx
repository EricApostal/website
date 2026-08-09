import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { EmberField } from './EmberField'

const COOL_DISTANCE_VH = 1.6

export function EmberBackground() {
  const coolRef = useRef(0)
  const pointerRef = useRef({ x: 0, y: 0 })
  const [ready, setReady] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  const count = useMemo(() => {
    if (typeof window === 'undefined') return 600
    const w = window.innerWidth
    if (w < 640) return 350
    if (w < 1100) return 700
    return 1300
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const onChange = () => setReducedMotion(mq.matches)
    mq.addEventListener?.('change', onChange)

    const onScroll = () => {
      const vh = window.innerHeight
      const p = window.scrollY / (vh * COOL_DISTANCE_VH)
      coolRef.current = Math.max(0, Math.min(1, p))
    }
    const onPointerMove = (e: PointerEvent) => {
      pointerRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -((e.clientY / window.innerHeight) * 2 - 1),
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    setReady(true)

    return () => {
      mq.removeEventListener?.('change', onChange)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pointermove', onPointerMove)
    }
  }, [])

  if (!ready) return null

  if (reducedMotion) {
    return (
      <div
        aria-hidden
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 78%, rgba(255,107,53,0.22), transparent 70%), radial-gradient(40% 30% at 50% 95%, rgba(255,182,39,0.18), transparent 70%)',
        }}
      />
    )
  }

  return (
    <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: 'high-performance', alpha: false }}
        camera={{ position: [0, 0, 6], fov: 50 }}
      >
        <color attach="background" args={['#08070a']} />
        <Suspense fallback={null}>
          <EmberField count={count} coolRef={coolRef} pointerRef={pointerRef} />
          <EffectComposer multisampling={0}>
            <Bloom intensity={0.9} luminanceThreshold={0.15} luminanceSmoothing={0.4} mipmapBlur />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  )
}
