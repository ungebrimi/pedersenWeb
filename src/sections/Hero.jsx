import React, { useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { GUI } from 'lil-gui'

const Donut = () => 
{

    return(
        <div className="w-full h-full">
            <div className="hidden lg:block w-full h-full">
                <Canvas >
                    <mesh scale={0.1} rotation={[-4.22, 0.94, 0.94]} position={[2.17, -0.41, 2.17]}>
                        <torusGeometry args={[9.025, 5.9796, 30, 67]}/>
                        <meshBasicMaterial wireframe={true} color={"#efefef"}/>
                    </mesh>
                    <mesh scale={0.1} rotation={[2.66, 3.77, 4.1]} position={[-5, 2.17, 0.08]}>
                        <torusGeometry args={[9.025, 5.9796, 30, 67]}/>
                        <meshBasicMaterial wireframe={true} color={"#efefef"}/>
                    </mesh>
                    <mesh>
                        <Html
                        center
                        prepend
                        className="text-fonts pointer-events-none"
                        >
                            <h1 className="hero text-herosm md:text-heromd lg:text-herolg">Pedersen <br></br> Webutvikling</h1>
                        </Html>
                    </mesh>
                </Canvas>
            </div>
            <div className="hidden md:block lg:hidden w-full h-full">
                <Canvas >
                    <mesh scale={0.1} rotation={[-4.22, 0.94, 0.94]} position={[1, -0.41, 2.17]}>
                        <torusGeometry args={[9.025, 5.9796, 30, 67]}/>
                        <meshBasicMaterial wireframe={true} color={"#efefef"}/>
                    </mesh>
                    <mesh scale={0.1} rotation={[4, 3, 4.1]} position={[-3, 2.17, 0.08]}>
                        <torusGeometry args={[9.025, 5.9796, 30, 67]}/>
                        <meshBasicMaterial wireframe={true} color={"#efefef"}/>
                    </mesh>
                    <mesh> 
                        <Html
                        center
                        prepend
                        className="text-fonts pointer-events-none"
                        >
                            <h1 className="hero text-herosm md:text-heromd lg:text-herolg">Pedersen <br></br> Webutvikling</h1>
                        </Html>
                    </mesh>
                </Canvas>
            </div>
            <div className="md:hidden w-full h-full">
                <Canvas >
                    <mesh scale={0.04} rotation={[-4.22, 0.94, 0.94]} position={[.5, -1, 3]}>
                        <torusGeometry args={[9.025, 5.9796, 30, 67]}/>
                        <meshBasicMaterial wireframe={true} color={"#efefef"}/>
                    </mesh>
                    <mesh scale={0.08} rotation={[4, 3, 4.1]} position={[-1, 2.17, 0.08]}>
                        <torusGeometry args={[9.025, 5.9796, 30, 67]}/>
                        <meshBasicMaterial wireframe={true} color={"#efefef"}/>
                    </mesh>
                    <mesh> 
                        <Html
                        center
                        prepend
                        className="text-fonts pointer-events-none"
                        >
                            <h1 className="hero text-herosm md:text-heromd lg:text-herolg">Pedersen <br></br> Webutvikling</h1>
                        </Html>
                    </mesh>
                </Canvas>
            </div>
        </div>
    )
}

const Hero = () => {
  return (
    <div className="h-screen w-full grid place-items-center text-center">
        <Donut/>
    </div>
  )
}

export default Hero