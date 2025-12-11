"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { contactInfo } from "@/app/lib/data";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

const backgroundCircles = [...Array(15)].map((_, i) => ({
  key: i,
  width: Math.random() * 200 + 50,
  height: Math.random() * 200 + 50,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  animateY: Math.random() * 50 - 25,
  animateX: Math.random() * 50 - 25,
  duration: Math.random() * 8 + 8,
}));

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden flex flex-col items-center" style={{ padding: '2rem' }}>

      <div className="absolute inset-0">
        {backgroundCircles.map((circle) => (
          <motion.div
            key={circle.key}
            className="absolute bg-white rounded-full opacity-5"
            style={{
              width: circle.width,
              height: circle.height,
              left: circle.left,
              top: circle.top,
            }}
            animate={{
              y: [0, circle.animateY],
              x: [0, circle.animateX],
            }}
            transition={{
              duration: circle.duration,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 3rem', position: 'relative', zIndex: 10 }} ref={ref}>
        <motion.h2
          style={{ textAlign: 'center', marginBottom: '2rem' }}
          className="text-5xl md:text-6xl font-bold text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {contactInfo.title}
        </motion.h2>

        <motion.p
          style={{ textAlign: 'center', maxWidth: '40rem', marginLeft: 'auto', marginRight: 'auto', marginTop: 0, marginBottom: '1rem' }}
          className="text-xl text-gray-200"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {contactInfo.description}
        </motion.p>

        <motion.div
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href={`mailto:${contactInfo.email}`}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', padding: '1rem 2rem' }}
            className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full font-semibold text-lg shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-6 h-6" />
            Enviar Email
          </motion.a>
        </motion.div>

        <motion.div
          style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {contactInfo.socialLinks.map((link) => {
            const Icon = iconMap[link.icon as keyof typeof iconMap];
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: '1.25rem' }}
                className="bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
              >
                {Icon && <Icon className="w-7 h-7 text-white" />}
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          style={{ textAlign: 'center', marginTop: '5rem' }}
          className="text-gray-400"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p>© 2025 Gustavo Machado. Todos os direitos reservados.</p>
        </motion.div>
      </div>
    </section>
  );
}
