import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Room } from './Room'
import HeroLights from './HeroLights'
import Particles from './Particles'


const HeroExperience = () => {
  const isDesktop=useMediaQuery({query:'(min-width:1024px)'})
  const isMobile=useMediaQuery({query:'(max-width:786px)'})
  // const isTablet=useMediaQuery({query:'(max-width:1024px)'})
  return (
  <Canvas camera={{position:[0,0,15],fov:45}}>
   <HeroLights/>
   <Particles></Particles>
    <OrbitControls enablePan={false}
    enableZoom={false}
    maxDistance={20}
    minDistance={5}
    minPolarAngle={Math.PI/5}
    maxPolarAngle={Math.PI/2}
    />
    <group scale={isMobile?0.7:1}
    position={[0,-3.5,0]}
    rotation={[0,-Math.PI/4,0]}>
    <Room/>
    </group>
    {/* <mesh>
      <boxGeometry args={[1,1,1]}/>
      <meshStandardMaterial color={'teal'}/>
    </mesh> */}
  </Canvas>
  )
}

export default HeroExperience