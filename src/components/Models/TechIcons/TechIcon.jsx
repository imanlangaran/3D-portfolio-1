// - Loads a '.glb' model (GLFT format)
// - Adds basic lighting
// - Applies enviroment relflections for realism
// - wraps the model in a floatin animation
// - Optionally tweaks the material (like setting a white color on a specific mesh)
// - Disables zoom using OrbitCotrols

import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useEffect } from 'react'
import * as THREE from 'three'

const TechIcon = ({ model }) => {

  const scene = useGLTF(model.modelPath)

  useEffect(() => {
    if (model.doWhite) {
      scene.scene.traverse((child) => {
        child.material = new THREE.MeshStandardMaterial({ color: 'white' })
      })
    }
  }, [])

  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Environment preset='city' />

      <OrbitControls enableZoom={false} />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  )
}

export default TechIcon