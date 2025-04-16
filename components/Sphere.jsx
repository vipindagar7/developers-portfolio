// components/SkillSphere.jsx
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'

const SkillSphere = ({ color = '#00bcd4', Icon, title }) => {
    return (
        <div className="w-32 h-32 sm:w-40 sm:h-40">
            <Canvas camera={{ position: [0, 0, 5] }} className='bg-transparent'>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} />
                <mesh>
                    <sphereGeometry args={[1.2, 32, 32]} />
                    <meshStandardMaterial color={color} />
                </mesh>

                {/* Render Icon at the center of sphere */}
                <Html center>
                    <div className="flex flex-col items-center">
                        {Icon && <Icon className={`text-${color} text-2xl`} />}
                    </div>
                </Html>

                <OrbitControls enableZoom={false} autoRotate />
            </Canvas>
        </div>
    )
}

export default SkillSphere