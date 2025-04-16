'use client'
import React from 'react'
import { motion } from "framer-motion";
const Projects = () => {
  const projects = [
    {
      title: "Mock Interview Platform",
      description: "AI-powered mock interview system with instant feedback and analytics using Django, React, and OpenAI.",
      image: '/mockInterview.png',
      githubLink: "https://github.com/vipindagar7/interviewai-app.git",
      techStack: ["React", "Django", "Tailwind", "OpenAI API", "Docker"],
    },
    {
      title: "Landing Web : Sobit Service Center",
      description: "Marketing website for Sobit Service Center with integrated contact and service request features.",
      image: "/sobitServicesCenter.png",
      liveLink: "https://sobit.org.in",
      githubLink: "https://github.com/vipindagar7/sobit-service-center-private-limited.git",
      techStack: ["Next.js", "NodeMailer", "MongoDB", "Github", "Vercel"],
    },
    {
      title: "Landing Web : Mock Interview Platform",
      description: "Landing page for the AI Mock Interview platform, built with a dynamic and responsive React UI.",
      image: "/images/ecommerce.png",
      liveLink: "https://interviewai.live",
      githubLink: "https://github.com/vipindagar7/ai-powered-interview-platform.git",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    },
    {
      title: "Public Safety Reporting Portal",
      description: "A portal for citizens to report safety issues, featuring real-time location tagging and case tracking.",
      image: "/images/ecommerce.png",
      githubLink: "https://github.com/vipindagar7/crime-report-portal.git",
      techStack: ["Django", "Python", "Github", "JavaScript", "Geolocation API"],
    },
    {
      title: "E-Commerce Store",
      description: "E-commerce platform built with Django, supporting product listings, cart management, and payments.",
      image: "/images/ecommerce.png",
      githubLink: "https://github.com/vipindagar7/eCommerce.git",
      techStack: ["Django", "Python", "Github", "Sqlite", "Payment API"],
    },
    {
      title: "Chat App",
      description: "Real-time chat application with user authentication and WebSocket-based communication.",
      image: "/images/chat-app.png",
      liveLink: "https://vipin.portfoliomine.in/",
      githubLink: "https://github.com/vipindagar7/chat_app.git",
      techStack: ["Django", "WebSockets", "Redis", "Docker", "Python"],
    },
  ];


  return (
    <div className="flex justify-center items-center gap-6 flex-col w-full lg:w-[70%]">
      <div className="flex flex-col justify-center items-center mb-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
          🚀 Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="group relative overflow-hidden rounded-xl shadow-lg border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-gradient-to-br dark:from-[#1a1a1a] dark:to-[#111] hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                {project.description}
              </p>

              {/* 🧠 Tech stack */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* 🔗 Links */}
              <div className="mt-4">
                {project.liveLink && project.liveLink !== "#" && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mr-4 text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition"
                  >
                    Live Project
                  </a>
                )}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition"
                >
                  GitHub Repo →
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
