import React from 'react'
import * as THREE from 'three'
const HeroLights = () => {
  return (
    <>
     {/* <ambientLight intensity={0.2}  color="#1a1a40" />
    <directionalLight position={[5,5,5]} intensity={2}/> */}
    <spotLight position={[2,5,6] } intensity={100} angle={0.15} penumbra={.2} color='white'></spotLight>
    <spotLight position={[4,5,4] } intensity={40} angle={0.3} penumbra={.5} color='#4cc9f0'></spotLight>
    <spotLight position={[-3,5,5] } intensity={60} angle={0.4} penumbra={1} color='#9d4edd'></spotLight>
      <primitive
      object={new THREE.RectAreaLight('#A259ff',8,3,2)}
      position={[1,3,4]}
      intensity={15}
      rotation={[-Math.PI/4,Math.PI/4,0]}
      />
      <pointLight
      position={[0,1,0]}
      intensity={10}
      color={'#7209b7'}
      ></pointLight>
      <pointLight
      position={[1,2,-2]}
      intensity={10}
      color={'#0d00a4'}
      ></pointLight>

    </>
  )
}

export default HeroLights