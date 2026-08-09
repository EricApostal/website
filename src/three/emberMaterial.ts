import * as THREE from 'three'
import { shaderMaterial } from '@react-three/drei'
import { extend } from '@react-three/fiber'

export const EmberMaterial = shaderMaterial(
  {
    uCool: 0,
    uOpacity: 1,
    uColorHot: new THREE.Color('#ffe7c2'),
    uColorMid: new THREE.Color('#ff6b35'),
    uColorCool: new THREE.Color('#3a4a5c'),
  },
  /* vertex */ `
    attribute float aHeat;
    attribute float aSize;
    varying float vHeat;
    void main() {
      vHeat = aHeat;
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      gl_PointSize = aSize * (60.0 / max(-mvPosition.z, 0.001));
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  /* fragment */ `
    uniform vec3 uColorHot;
    uniform vec3 uColorMid;
    uniform vec3 uColorCool;
    uniform float uCool;
    uniform float uOpacity;
    varying float vHeat;
    void main() {
      vec2 uv = gl_PointCoord - 0.5;
      float d = length(uv);
      float alpha = smoothstep(0.5, 0.0, d);
      vec3 base = mix(uColorMid, uColorHot, vHeat);
      vec3 cooled = mix(base, uColorCool, uCool);
      float a = alpha * uOpacity * mix(1.0, 0.35, uCool);
      gl_FragColor = vec4(cooled, a);
    }
  `,
)

extend({ EmberMaterial })

declare module '@react-three/fiber' {
  interface ThreeElements {
    emberMaterial: any
  }
}
