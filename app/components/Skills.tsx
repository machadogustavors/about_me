"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/app/lib/data";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section style={{ padding: '2rem' }} className="min-h-screen py-24 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex flex-col items-center justify-center" ref={ref}>
      <div className="max-w-7xl px-6 md:px-12 lg:px-20 flex flex-col gap-16">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 w-full mx-auto" style={{ maxWidth: '120rem', gap: '3rem' }}>
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={skillCategory.category}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20"
              style={{ padding: '2rem 3rem' }}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ scale: 1.02, borderColor: "rgba(168, 85, 247, 0.4)" }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-cyan-300" style={{ marginBottom: '1rem' }}>
                {skillCategory.category}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                {skillCategory.technologies.map((tech, techIndex) => (
                  <div key={tech.name}>
                    <div className="flex justify-between" style={{ marginBottom: '0.1rem' }}>
                      <span className="text-gray-300 font-medium text-lg">{tech.name}</span>
                      <span className="text-purple-400 font-semibold text-lg">{tech.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-500 to-cyan-500"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${tech.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + techIndex * 0.1 + 0.3,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
