"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { aboutMe } from "@/app/lib/data";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="bg-gray-900 flex flex-col items-center min-h-screen" style={{ padding: '2rem' }} ref={ref}>
      <div className="max-w-7xl px-6 md:px-12 lg:px-20 flex flex-col gap-16">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {aboutMe.title}
        </motion.h2>

        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          <motion.p
            className="text-xl text-gray-300 leading-relaxed text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {aboutMe.description}
          </motion.p>

          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-cyan-300 text-center">
              Experiência prática em:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aboutMe.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-5 bg-gray-800/50 rounded-lg backdrop-blur-sm"
                  style={{ padding: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(30, 41, 59, 0.7)" }}
                >
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.p
            className="text-xl text-gray-300 leading-relaxed text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {aboutMe.philosophy}
          </motion.p>

          <motion.p
            className="text-xl text-gray-300 leading-relaxed italic text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            {aboutMe.learning}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
