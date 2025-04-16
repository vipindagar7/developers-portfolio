"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

import { FaBrain, FaRobot, FaUser, FaCogs } from "react-icons/fa";
import { GiCircuitry } from "react-icons/gi";
import { BiChip } from "react-icons/bi";
import { MdMemory } from "react-icons/md";
import { RiCloudLine } from "react-icons/ri";
import { BsLightningCharge } from "react-icons/bs";

const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export default function AnimatedBeamMultipleOutputDemo({ className }) {
  const containerRef = useRef(null);
  const sourceRefs = {
    brain: useRef(null),
    circuit: useRef(null),
    chip: useRef(null),
    memory: useRef(null),
    lightning: useRef(null),
    cogs: useRef(null),
    cloud: useRef(null),
  };
  const centralRef = useRef(null);
  const userRef = useRef(null);

  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full items-center justify-center overflow-hidden p-10",
        className
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
        {/* Right - User */}
        <div className="flex flex-col justify-center">
          <Circle ref={userRef}>
            <FaUser size={32} color="black" />
          </Circle>
        </div>

        {/* Middle - Central AI Node */}
        <div className="flex flex-col justify-center">
          <Circle ref={centralRef} className="size-16">
            <FaRobot size={32} color="black" />
          </Circle>
        </div>

        {/* Left - Inputs to AI */}
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={sourceRefs.brain}>
            <FaBrain size={32} color="black" />
          </Circle>
          <Circle ref={sourceRefs.circuit}>
            <GiCircuitry size={32} color="black" />
          </Circle>
          <Circle ref={sourceRefs.chip}>
            <BiChip size={32} color="black" />
          </Circle>
          <Circle ref={sourceRefs.memory}>
            <MdMemory size={32} color="black" />
          </Circle>
          <Circle ref={sourceRefs.lightning}>
            <BsLightningCharge size={32} color="black" />
          </Circle>
          <Circle ref={sourceRefs.cogs}>
            <FaCogs size={32} color="black" />
          </Circle>
          <Circle ref={sourceRefs.cloud}>
            <RiCloudLine size={32} color="black" />
          </Circle>
        </div>
      </div>

      {/* Beams: Inputs → AI */}
      {Object.values(sourceRefs).map((ref, index) => (
        <AnimatedBeam
          key={index}
          containerRef={containerRef}
          fromRef={ref}
          toRef={centralRef}
          duration={3}
        />
      ))}

      {/* Beam: AI → User */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centralRef}
        toRef={userRef}
        duration={3}
      />
    </div>
  );
}
