'use client'
import React from 'react'
import { FaUser, FaUsers } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { motion } from 'framer-motion'

const Testimonials = () => {
    const testimonials = [
        {
            name: "Pravesh Singh",
            position: "AI Engineer at Aptagrim Pvt. Ltd.",
            feedback:
                "Vipin's mock interview platform blew my mind. The real-time feedback and clean UI made it feel like a real interview!",
            image: FaUsers,
        },
        {
            name: "Sobit Dhillon",
            position: "CEO at Sobit Service Center Pvt. Ltd.",
            feedback:
                "Super impressive UI/UX. His attention to detail is top notch. Would definitely collaborate again.",
            image: MdPerson,
        },
        {
            name: "Kunal Shaw",
            position: "AI Evaluator at DataAnnotation",
            feedback:
                "Vipin demonstrates strong full-stack skills and passion. Loved his e-commerce and chat projects!",
            image: FaUser,
        },
    ]
    return (
        <div className="flex justify-center items-center gap-6 flex-col w-full lg:w-[70%]">

            <div className="flex flex-col justify-center items-center">

                <div className="my-4">
                    <h2 className="text-2xl md:text-4xl">What People Say About</h2>
                </div>
            </div>
            <div className='flex flex-wrap justify-center items-center'>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.6 }}
                        >
                            <t.image
                                className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-indigo-400"
                            />
                            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">“{t.feedback}”</p>
                            <h4 className="font-semibold text-gray-900 dark:text-white">{t.name}</h4>
                            <span className="text-xs text-gray-500 dark:text-gray-400">{t.position}</span>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Testimonials