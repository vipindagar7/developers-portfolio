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
            I&apos;m Vipin Dagar
          </motion.h1>
          <motion.h1 className="text-xl md:text-3xl my-1" variants={fadeIn} custom={3}>
            Full Stack Developer
          </motion.h1>
          <motion.p className="" variants={fadeIn} custom={4}>
            I build modern, scalable full-stack apps using MERN, React Native, Django & modern tools.
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
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
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
<script>
  window.ChatBotConfig = {
    widgetId: "college_abc",

    // API base MUST include chatbot-api
    apiBase: "https://chatbot.eitfaridabad.co.in/chatbot-api",

    // Frontend/chat app URL
    chatUrl: "https://chatbot.eitfaridabad.co.in"
  };
</script>

<script>
  (function () {
  'use strict';
  if (document.getElementById('abot-btn')) return;

  var cfg = window.ChatBotConfig || {};
  var apiBase = (cfg.apiBase || 'http://localhost:5000').replace(/\/$/, '');
  var chatUrl = cfg.chatUrl || apiBase.replace(':5000', ':5173');
  var widgetId = cfg.widgetId || 'default';

  // ── Styles ──────────────────────────────────────────────────────────────────
  var css = document.createElement('style');
  css.textContent =
    '#abot-btn{position:fixed;bottom:24px;right:24px;width:58px;height:58px;border-radius:50%;background:linear-gradient(135deg,#2563EB,#7C3AED);border:none;cursor:pointer;box-shadow:0 4px 18px rgba(37,99,235,.45);z-index:2147483646;display:flex;align-items:center;justify-content:center;transition:transform .2s,box-shadow .2s;padding:0}' +
    '#abot-btn:hover{transform:scale(1.08);box-shadow:0 6px 26px rgba(37,99,235,.55)}' +
    '#abot-btn .ico-chat{display:block}#abot-btn.open .ico-chat{display:none}' +
    '#abot-btn .ico-close{display:none}#abot-btn.open .ico-close{display:block}' +
    '#abot-popup{position:fixed;bottom:94px;right:24px;width:390px;height:620px;border-radius:18px;border:none;box-shadow:0 24px 64px rgba(0,0,0,.18);z-index:2147483645;opacity:0;transform:translateY(18px) scale(.96);transition:opacity .22s,transform .22s;pointer-events:none;background:#fff}' +
    '#abot-popup.open{opacity:1;transform:none;pointer-events:all}' +
    '#abot-dot{position:absolute;top:-3px;right:-3px;width:16px;height:16px;background:#ef4444;border-radius:50%;border:2px solid #fff;display:none}' +
    '#abot-ring{position:absolute;top:-3px;right:-3px;width:16px;height:16px;background:rgba(239,68,68,.35);border-radius:50%;animation:abotpulse 1.6s ease-out infinite}' +
    '@keyframes abotpulse{0%{transform:scale(1);opacity:1}100%{transform:scale(2.6);opacity:0}}' +
    '@media(max-width:480px){#abot-popup{width:100vw;height:100dvh;bottom:0;right:0;border-radius:0}#abot-btn{bottom:16px;right:16px}}';
  document.head.appendChild(css);

  // ── Button ───────────────────────────────────────────────────────────────────
  var btn = document.createElement('button');
  btn.id = 'abot-btn';
  btn.setAttribute('aria-label', 'Open Admission Chat');
  btn.innerHTML =
    '<svg class="ico-chat" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' +
    '<svg class="ico-close" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
    '<div id="abot-dot"><div id="abot-ring"></div></div>';

  // ── Iframe ───────────────────────────────────────────────────────────────────
  var popup = document.createElement('iframe');
  popup.id = 'abot-popup';
  popup.src = chatUrl + '?widgetId=' + widgetId + '&apiBase=' + encodeURIComponent(apiBase);
  popup.title = 'Admission Assistant';
  popup.allow = 'clipboard-write';

  document.body.appendChild(btn);
  document.body.appendChild(popup);

  var isOpen = false;
  function toggle() {
    isOpen = !isOpen;
    btn.classList.toggle('open', isOpen);
    popup.classList.toggle('open', isOpen);
    var dot = document.getElementById('abot-dot');
    if (dot && isOpen) dot.style.display = 'none';
  }

  btn.addEventListener('click', toggle);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && isOpen) toggle(); });

  // Show red dot after 6 seconds to invite users
  setTimeout(function () {
    var dot = document.getElementById('abot-dot');
    if (dot && !isOpen) dot.style.display = 'block';
  }, 6000);

  window.AdmissionBot = { open: function () { if (!isOpen) toggle(); }, close: function () { if (isOpen) toggle(); } };
})();
</script>


    </main>
  );
}
