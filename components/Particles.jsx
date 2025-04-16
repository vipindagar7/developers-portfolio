'use client'
import { useTheme } from "next-themes";
import { Particles } from "@/components/magicui/particles";
import { useEffect, useState } from "react";


import React from 'react'

const ParticlesBackground = () => {
    const { resolvedTheme } = useTheme();
    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
    }, [resolvedTheme]);
    return (
        <Particles
            className="absolute inset-0 z-0"
            quantity={400}
            ease={8}
            color={color}
        />
    )
}

export default ParticlesBackground