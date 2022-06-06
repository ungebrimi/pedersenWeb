import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'


const RotatingKnot = () => {

  
  const Donut = () =>
  {
    const ring = useRef()

    useFrame(() => {
      ring.current.rotation.x += 0.02
      ring.current.rotation.y += 0.01
      ring.current.rotation.z += 0.01
    })

    return (
      <mesh ref={ring} scale={0.7}>
        <torusGeometry args={[3, 0.2, 30, 100]}/>
        <meshNormalMaterial />
      </mesh>
    )
  }

  const Diamond = () => {

    const diamond = useRef()

    useFrame(() => {
      diamond.current.rotation.y += 0.02
    })

    return(
      <mesh ref={diamond}>
        <octahedronGeometry args={[1]}/>
        <meshNormalMaterial />
      </mesh>
    )
  }

  return (
        <Canvas>
            <Diamond />
            <Donut />
            <ambientLight intensity={1} />
        </Canvas>
  )
}

export default RotatingKnot