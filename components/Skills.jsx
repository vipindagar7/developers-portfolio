'use client'
import { motion } from 'framer-motion';


import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaPython,
    FaGitAlt,
    FaDocker,
    FaAws,
} from 'react-icons/fa';

import {
    SiTypescript,
    SiRedux,
    SiExpress,
    SiMongodb,
    SiMysql,
    SiDjango,
    SiTailwindcss,
    SiJsonwebtokens,
    SiVite,
    SiNginx,
} from 'react-icons/si';

export default function Skills() {
    const skillsIcons = [
        { title: 'HTML', icon: FaHtml5, color: 'text-orange-500 dark:text-orange-400' },
        { title: 'CSS', icon: FaCss3Alt, color: 'text-blue-500 dark:text-blue-400' },
        { title: 'JavaScript', icon: FaJs, color: 'text-yellow-400 dark:text-yellow-300' },
        { title: 'TypeScript', icon: SiTypescript, color: 'text-blue-600 dark:text-blue-400' },
        { title: 'React', icon: FaReact, color: 'text-cyan-500 dark:text-cyan-400' },
        { title: 'Redux', icon: SiRedux, color: 'text-purple-600 dark:text-purple-400' },
        { title: 'Node.js', icon: FaNodeJs, color: 'text-green-600 dark:text-green-500' },
        { title: 'Express.js', icon: SiExpress, color: 'text-neutral-600 dark:text-white' },
        { title: 'MongoDB', icon: SiMongodb, color: 'text-green-700 dark:text-green-500' },
        { title: 'SQL', icon: SiMysql, color: 'text-blue-700 dark:text-blue-300' },
        { title: 'DBMS', icon: SiMysql, color: 'text-gray-600 dark:text-gray-300' },
        { title: 'Python', icon: FaPython, color: 'text-yellow-500 dark:text-yellow-300' },
        { title: 'Django', icon: SiDjango, color: 'text-green-900 dark:text-green-300' },
        { title: 'DRF', icon: SiDjango, color: 'text-indigo-900 dark:text-indigo-400' },
        { title: 'Docker', icon: FaDocker, color: 'text-blue-400 dark:text-blue-300' },
        { title: 'AWS', icon: FaAws, color: 'text-orange-600 dark:text-orange-400' },
        { title: 'Git', icon: FaGitAlt, color: 'text-red-600 dark:text-red-400' },

        { title: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-sky-500 dark:text-sky-400' },
        { title: 'JWT', icon: SiJsonwebtokens, color: 'text-amber-700 dark:text-amber-400' },
        { title: 'Vite', icon: SiVite, color: 'text-purple-500 dark:text-purple-300' },
        { title: 'NGINX', icon: SiNginx, color: 'text-green-800 dark:text-green-400' },

    ];
    const cardVariants = {
        offscreen: {
            opacity: 0,
            y: 50,
        },
        onscreen: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.2,
                duration: 0.8,
            },
        },
    };

    return (
        <div className="flex justify-center items-center gap-6 flex-col w-full lg:w-[70%]">
            <div className="flex flex-col justify-center items-center">
                <div className="my-4">
                    <h2 className="text-2xl md:text-4xl font-semibold">My Key Skills</h2>
                </div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6">
                {skillsIcons.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="border border-white/10 bg-white/5 backdrop-blur-md shadow-xl rounded-xl flex justify-center items-center flex-col p-6 w-28 h-28 hover:shadow-2xl cursor-pointer"
                        whileHover={{
                            scale: 1.1,
                            rotateY: 10,
                            rotateX: 5,
                            transition: { type: 'spring', stiffness: 200, damping: 15 },
                        }}
                        whileTap={{ scale: 0.95 }}
                        variants={cardVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <skill.icon className={`${skill.color} h-9 w-9`} />
                        <h4 className="mt-3 text-sm font-medium text-center">{skill.title}</h4>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
