import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useReducedMotion } from '../../hooks/useReducedMotion'

// Rough continent polygons (lat, lon). Used to determine land vs ocean dots.
const CONTINENTS: number[][][] = [
  // North America
  [
    [75, -100], [70, -100], [60, -120], [55, -130], [50, -125], [45, -95], [40, -75], [35, -75],
    [30, -85], [25, -80], [20, -105], [15, -95], [10, -85], [15, -60], [25, -55], [35, -60],
    [45, -60], [55, -65], [60, -85], [70, -95], [75, -100],
  ],
  // South America
  [
    [10, -60], [5, -55], [0, -50], [-5, -35], [-10, -35], [-15, -38], [-20, -40], [-25, -45],
    [-30, -50], [-35, -55], [-40, -62], [-45, -65], [-50, -70], [-55, -70], [-52, -75], [-45, -75],
    [-35, -70], [-25, -65], [-15, -60], [-5, -60], [5, -60], [10, -60],
  ],
  // Europe
  [
    [70, 20], [65, 15], [60, 10], [55, 5], [50, 0], [45, 5], [40, 10], [35, 15], [36, 25],
    [40, 30], [45, 35], [50, 40], [55, 45], [60, 50], [65, 45], [70, 35], [72, 25], [70, 20],
  ],
  // Africa
  [
    [35, -10], [30, 0], [25, 10], [20, 15], [15, 15], [10, 10], [5, 5], [0, 10], [-5, 15],
    [-10, 20], [-15, 25], [-20, 30], [-25, 32], [-30, 30], [-35, 25], [-30, 20], [-25, 15],
    [-20, 10], [-15, 5], [-10, 0], [-5, -5], [0, -10], [5, -15], [10, -15], [15, -10], [20, -10],
    [25, -10], [30, -10], [35, -10],
  ],
  // Asia
  [
    [75, 60], [70, 60], [65, 55], [60, 60], [55, 60], [50, 55], [45, 50], [40, 45], [35, 45],
    [30, 50], [25, 55], [20, 60], [15, 65], [10, 75], [5, 80], [0, 90], [-5, 110], [-10, 120],
    [-5, 130], [5, 135], [15, 130], [25, 120], [35, 110], [45, 100], [55, 95], [65, 90], [70, 80],
    [75, 70], [75, 60],
  ],
  // Australia
  [
    [-10, 115], [-15, 120], [-20, 125], [-25, 130], [-30, 135], [-35, 140], [-38, 145], [-35, 150],
    [-30, 152], [-25, 150], [-20, 145], [-15, 140], [-10, 135], [-5, 130], [-10, 125], [-10, 115],
  ],
]

const MAJOR_CITIES = [
  { lat: 40.7128, lon: -74.006 },
  { lat: 34.0522, lon: -118.2437 },
  { lat: 41.8781, lon: -87.6298 },
  { lat: 25.7617, lon: -80.1918 },
  { lat: 43.6532, lon: -79.3832 },
  { lat: 51.5074, lon: -0.1278 },
  { lat: 48.8566, lon: 2.3522 },
  { lat: 52.52, lon: 13.405 },
  { lat: 40.4168, lon: -3.7038 },
  { lat: 41.9028, lon: 12.4964 },
  { lat: 59.9139, lon: 10.7522 },
  { lat: 55.7558, lon: 37.6173 },
  { lat: 35.6892, lon: 51.389 },
  { lat: 25.2048, lon: 55.2708 },
  { lat: 28.6139, lon: 77.209 },
  { lat: 19.076, lon: 72.8777 },
  { lat: 39.9042, lon: 116.4074 },
  { lat: 31.2304, lon: 121.4737 },
  { lat: 35.6895, lon: 139.6917 },
  { lat: 37.5665, lon: 126.978 },
  { lat: 1.3521, lon: 103.8198 },
  { lat: -33.8688, lon: 151.2093 },
  { lat: -37.8136, lon: 144.9631 },
  { lat: -23.5505, lon: -46.6333 },
  { lat: -22.9068, lon: -43.1729 },
  { lat: 19.4326, lon: -99.1332 },
  { lat: -1.2921, lon: 36.8219 },
  { lat: -33.9249, lon: 18.4241 },
  { lat: 30.0444, lon: 31.2357 },
]

function pointInPolygon(point: number[], polygon: number[][]) {
  let inside = false
  const [lat, lon] = point
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [piLat, piLon] = polygon[i]
    const [pjLat, pjLon] = polygon[j]
    const intersect =
      piLon > lon !== pjLon > lon &&
      lat < ((pjLat - piLat) * (lon - piLon)) / (pjLon - piLon) + piLat
    if (intersect) inside = !inside
  }
  return inside
}

function isLand(lat: number, lon: number) {
  return CONTINENTS.some((poly) => pointInPolygon([lat, lon], poly))
}

function isCity(lat: number, lon: number) {
  return MAJOR_CITIES.some((c) => Math.abs(c.lat - lat) < 2.5 && Math.abs(c.lon - lon) < 2.5)
}

interface DotLayerProps {
  count?: number
  radius?: number
  type: 'ocean' | 'land' | 'city'
}

function DotLayer({ count = 1200, radius = 2, type }: DotLayerProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null)

  const { matrices, geometryArgs, color, opacity } = useMemo(() => {
    const matrices: THREE.Matrix4[] = []
    const phi = Math.PI * (3 - Math.sqrt(5))

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2
      const radiusAtY = Math.sqrt(1 - y * y)
      const theta = phi * i
      const x = Math.cos(theta) * radiusAtY
      const z = Math.sin(theta) * radiusAtY

      const lat = Math.asin(y) * (180 / Math.PI)
      const lon = Math.atan2(z, -x) * (180 / Math.PI)

      if (type === 'city' && !isCity(lat, lon)) continue
      if (type === 'land' && (isCity(lat, lon) || !isLand(lat, lon))) continue
      if (type === 'ocean' && (isCity(lat, lon) || isLand(lat, lon))) continue

      const pos = new THREE.Vector3(x, y, z)
      const matrix = new THREE.Matrix4()
      matrix.lookAt(pos, new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0))

      let r = radius
      let sx = 1
      let sy = 1
      let sz = 1

      if (type === 'ocean') {
        r = radius * 0.985
        sx = 0.6
        sy = 0.6
        sz = 0.6
      } else if (type === 'land') {
        r = radius * 1.02
        sx = 1
        sy = 1
        sz = 1.6
      } else if (type === 'city') {
        r = radius * 1.06
        sx = 1.4
        sy = 1.4
        sz = 3.5
      }

      matrix.scale(new THREE.Vector3(sx, sy, sz))
      matrix.setPosition(pos.x * r, pos.y * r, pos.z * r)
      matrices.push(matrix)
    }

    const config =
      type === 'ocean'
        ? { geometryArgs: [0.035, 0.035, 0.035] as [number, number, number], color: '#1e3a5f', opacity: 0.35, scale: 1 }
        : type === 'land'
          ? { geometryArgs: [0.04, 0.04, 0.08] as [number, number, number], color: '#0ea5e9', opacity: 0.8, scale: 1 }
          : { geometryArgs: [0.05, 0.05, 0.18] as [number, number, number], color: '#22d3ee', opacity: 1.0, scale: 1 }

    return { matrices, ...config }
  }, [count, radius, type])

  useEffect(() => {
    const mesh = meshRef.current
    if (!mesh) return
    matrices.forEach((m, i) => mesh.setMatrixAt(i, m))
    mesh.instanceMatrix.needsUpdate = true
  }, [matrices])

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, matrices.length]}>
      <boxGeometry args={geometryArgs} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </instancedMesh>
  )
}

function DigitalEarth() {
  const groupRef = useRef<THREE.Group>(null)
  const reduced = useReducedMotion()

  useFrame((_, delta) => {
    if (groupRef.current && !reduced) {
      groupRef.current.rotation.y += delta * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      {/* Base sphere */}
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          color="#050b14"
          emissive="#0c4a6e"
          emissiveIntensity={0.3}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>

      {/* Digital bit pattern: ocean, land, city layers */}
      <DotLayer type="ocean" count={2200} radius={2} />
      <DotLayer type="land" count={2200} radius={2} />
      <DotLayer type="city" count={2200} radius={2} />

      {/* Atmosphere glow */}
      <mesh scale={1.14}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.06} side={THREE.BackSide} />
      </mesh>

      {/* Outer wireframe rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.2, 0.008, 16, 128]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.12} />
      </mesh>
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[3.4, 0.005, 16, 128]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.1} />
      </mesh>
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.0} />
      <directionalLight position={[5, 3, 5]} intensity={2} color="#ffffff" />
      <pointLight position={[-5, -3, -5]} intensity={1.5} color="#8b5cf6" />
      <DigitalEarth />
    </>
  )
}

function GlobeFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-gradient-to-br from-cyan-600/30 via-slate-800/40 to-slate-900/60 shadow-[0_0_80px_rgba(34,211,238,0.3)]">
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-cyan-500/10 to-transparent" />
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-cyan-400/20" style={{ animationDuration: '20s' }}>
          <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
        </div>
        <div className="absolute inset-4 animate-spin rounded-full border border-dashed border-cyan-300/30" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(0,0,0,0.4)]" />
      </div>
    </div>
  )
}

export function DigitalGlobe() {
  const reduced = useReducedMotion()

  if (reduced) {
    return <GlobeFallback />
  }

  return (
    <div className="relative h-[420px] w-full lg:h-[520px]">
      <div className="absolute inset-0">
        <GlobeFallback />
      </div>
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 6.2], fov: 42 }} gl={{ antialias: true, alpha: true }}>
          <Scene />
        </Canvas>
      </div>
    </div>
  )
}
