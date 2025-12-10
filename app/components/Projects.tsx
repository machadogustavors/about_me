"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { projects } from "@/app/lib/data";
import { Github, ExternalLink, Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<"all" | "featured">("all");
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(p => p.featured);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const visibleProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="projects" style={{ padding: '2rem' }} className="py-24 bg-gray-900 flex flex-col items-center min-h-screen" ref={ref}>
      <div className="max-w-7xl px-6 md:px-12 lg:px-20 flex flex-col gap-8">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Projetos
        </motion.h2>

        <motion.div
          style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            onClick={() => setFilter("all")}
            style={{ padding: '0.75rem 1.5rem' }}
            className={`rounded-full font-semibold transition-all ${filter === "all"
                ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white"
                : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
          >
            Todos
          </button>
          <button
            onClick={() => {
              setFilter("featured");
              setCurrentPage(0);
            }}
            style={{ padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
            className={`rounded-full font-semibold transition-all ${filter === "featured"
                ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white"
                : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
          >
            <Star className="w-4 h-4" />
            Destaques
          </button>
        </motion.div>

        <div style={{ paddingLeft: '4rem', paddingRight: '4rem' }}>
          <div className="relative">
            {totalPages > 1 && (
              <>
                <motion.button
                  onClick={prevPage}
                  style={{ position: 'absolute', left: '-4rem', top: '50%', transform: 'translateY(-50%)', zIndex: 10, padding: '0.75rem' }}
                  className="bg-purple-500/20 hover:bg-purple-500/40 backdrop-blur-sm rounded-full border border-purple-500/50 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft className="w-8 h-8 text-white" />
                </motion.button>
                <motion.button
                  onClick={nextPage}
                  style={{ position: 'absolute', right: '-4rem', top: '50%', transform: 'translateY(-50%)', zIndex: 10, padding: '0.75rem' }}
                  className="bg-purple-500/20 hover:bg-purple-500/40 backdrop-blur-sm rounded-full border border-purple-500/50 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronRight className="w-8 h-8 text-white" />
                </motion.button>
              </>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              >
                {visibleProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 group"
                    whileHover={{ y: -10, borderColor: "rgba(168, 85, 247, 0.5)" }}
                  >
                    <div className="relative h-48 bg-gradient-to-br from-purple-900/50 to-cyan-900/50 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl font-bold text-white/10">
                          {project.title.charAt(0)}
                        </div>
                      </div>
                      {project.featured && (
                        <div style={{ padding: '0.75rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="absolute top-4 right-4 bg-yellow-500 text-gray-900 rounded-full font-semibold text-sm">
                          <Star className="w-4 h-4 fill-current" />
                          Destaque
                        </div>
                      )}
                    </div>

                    <div style={{ padding: '1rem' }}>
                      <h3 style={{ marginBottom: '1.5rem' }} className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p style={{ marginBottom: '2rem' }} className="text-gray-400 leading-relaxed">
                        {project.description}
                      </p>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            style={{ padding: '0.5rem 1rem' }}
                            className="bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github className="w-5 h-5" />
                            <span>Código</span>
                          </motion.a>
                        )}
                        {project.demo && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink className="w-5 h-5" />
                            <span>Demo</span>
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center gap-3" style={{ marginTop: '2rem' }}>
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`transition-all rounded-full ${index === currentPage
                      ? "w-12 h-3 bg-gradient-to-r from-purple-500 to-cyan-500"
                      : "w-3 h-3 bg-gray-600 hover:bg-gray-500"
                    }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
