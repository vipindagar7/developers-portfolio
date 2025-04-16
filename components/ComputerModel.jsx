'use client'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { GamingDesktop } from './GamingDesktop'
import { Suspense } from "react";
import { AnimatedCircularProgressBar } from "@/components/magicui/animated-circular-progress-bar";
const ComputerModel = () => {
    const isTablet = useMediaQuery({ query: ('max-width:1024px') });
    const isMobile = useMediaQuery({ query: ('max-width:768px') });
    return (
        
        <Canvas camera={{ position: [4265, 2248, 248], fov: 50 }} className='w-full' >
            <ambientLight color="#1a1a40" />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />
            <OrbitControls
                enablePan={false}
                enableZoom={false}
                minDistance={12}
                maxDistance={6}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />
            <GamingDesktop />
        </Canvas >
    )
}

export default ComputerModel