'use client'
import Link from "next/link";

// components importing
import { Services } from "@/components/Services";
import { Button } from "@/components/ui/button";
import { ContactTerminal } from "@/components/Terminal";

// icons image importing
import { GithubIcon, LinkedinIcon } from "lucide-react";
import Skills from "@/components/Skills";
import ParticlesBackground from "@/components/Particles";
import ComputerModel from "@/components/ComputerModel";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { Suspense } from "react";
import { AnimatedCircularProgressBar } from "@/components/magicui/animated-circular-progress-bar";





export default function Home() {

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const socialIcons = [
    { 'icon': LinkedinIcon, 'url': 'https://www.linkedin.com/in/vipindagar07' },
    { 'icon': GithubIcon, 'url': 'https:/Loader/www.github.com/vipindagar7' }
  ]

  return (
    <main className="relative flex flex-col justify-around gap-4 overflow-x-hidden mt-14 lg:mt-0">
      <ParticlesBackground />

      <section
        id="hero-section"
        className="flex flex-col lg:flex-row justify-center lg:justify-around items-center min-h-screen min-w-screen p-3 md:mt-4"
      >
        <motion.div
          className="flex flex-col justify-center items-start"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={1}
        >
          <motion.h1 className="text-2xl md:text-4xl my-1" variants={fadeIn} custom={1}>
            Hello World!
          </motion.h1>
          <motion.h1 className="text-2xl md:text-4xl my-1" variants={fadeIn} custom={2}>
            I'm Vipin Dagar
          </motion.h1>
          <motion.h1 className="text-xl md:text-3xl my-1" variants={fadeIn} custom={3}>
            Full Stack Developer
          </motion.h1>
          <motion.p className="" variants={fadeIn} custom={4}>
            I build modern, scalable full-stack apps using MERN, Django & modern tools.
          </motion.p>

          <motion.div variants={fadeIn} custom={5}>
            <Button className="my-4">
              <Link href="#projects">Explore Projects</Link>
            </Button>
          </motion.div>

          <motion.div className="flex gap-4 my-4" variants={fadeIn} custom={6}>
            {socialIcons.map((social, index) => (
              <Link
                href={social.url}
                key={index}
                target="_blank"
                className="border p-2 md:p-4 rounded-4xl hover:scale-125 transition-transform"
              >
                <social.icon className="text-primary w-5 h-5 sm:w-8 sm:h-8" />
              </Link>
            ))}
          </motion.div>
        </motion.div>

        {/* Suspense only wraps the 3D Model */}
        <div className="w-full lg:w-[50vw] h-[50vh] md:h-[46vh]">
          <Suspense fallback={<AnimatedCircularProgressBar />}>
            <ComputerModel />
          </Suspense>
        </div>
      </section>

      {/* skills section */}
      <section id="skills" className="flex flex-col md:flex-row justify-around  min-w-screen p-3">

        <Skills />

      </section>
      {/* services section */}
      <section id="services" className="flex flex-col md:flex-row justify-around min-h-screen min-w-screen p-3">

        <Services />

      </section>
      {/* project section */}
      <section id="projects" className="flex flex-col md:flex-row justify-around min-h-screen min-w-screen p-3">
        <Projects />
      </section>
      {/* testimonials section */}
      <section id="testimonials" className="flex flex-col md:flex-row justify-around  p-3">
        <Testimonials />
      </section>

      <section id="contact" className="flex flex-col justify-center min-h-screen w-full px-4 py-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
          Get In Touch
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-start gap-10 max-w-7xl mx-auto w-full">

          <div className="w-full lg:w-1/2">
            <ContactTerminal />
          </div>

          <div className="w-full lg:w-1/2">
            <ContactForm />
          </div>

        </div>
      </section>



    </main>
  );
}
