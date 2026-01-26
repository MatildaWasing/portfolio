"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/config";
import Image from "next/image";
import { useState, useEffect } from "react";

type Project = typeof projects[0];

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handlePopState = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project-')) {
        const projectId = parseInt(hash.replace('#project-', ''));
        const project = projects.find(p => p.id === projectId);
        if (project) {
          setSelectedProject(project);
        }
      } else {
        setSelectedProject(null);
      }
    };

    const hash = window.location.hash;
    if (hash.startsWith('#project-')) {
      const projectId = parseInt(hash.replace('#project-', ''));
      const project = projects.find(p => p.id === projectId);
      if (project) {
        setSelectedProject(project);
      }
    }

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (selectedProject) {
      const expectedHash = `#project-${selectedProject.id}`;
      if (window.location.hash !== expectedHash) {
        try {
          window.history.pushState({ projectId: selectedProject.id }, '', expectedHash);
        } catch (e) {
          console.error('History pushState failed:', e);
        }
      }
    } else {
      if (window.location.hash) {
        try {
          window.history.pushState(null, '', window.location.pathname + window.location.search);
        } catch (e) {
          console.error('History pushState failed:', e);
        }
      }
    }
  }, [selectedProject]);

  useEffect(() => {
    if (selectedProject) {
      setCarouselIndex(0);
    }
  }, [selectedProject]);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedImage) {
          setSelectedImage(null);
        } else if (selectedProject) {
          setSelectedProject(null);
        }
      }
    };

    if (selectedImage || selectedProject) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage, selectedProject]);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const handleArrowKeys = (e: KeyboardEvent) => {
      if (selectedProject && selectedProject.images && selectedProject.images.length > 0) {
        if (e.key === 'ArrowLeft') {
          setCarouselIndex((prev) => (prev > 0 ? prev - 1 : selectedProject.images.length - 1));
        } else if (e.key === 'ArrowRight') {
          setCarouselIndex((prev) => (prev < selectedProject.images.length - 1 ? prev + 1 : 0));
        }
      }
    };

    if (selectedProject) {
      document.addEventListener('keydown', handleArrowKeys);
    }

    return () => {
      document.removeEventListener('keydown', handleArrowKeys);
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-4 text-slate-900 dark:text-slate-100"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-slate-600 dark:text-slate-300 mb-16 text-lg"
        >
          A selection of recent work I&apos;ve participated in.
        </motion.p>
        
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group cursor-pointer rounded-2xl p-6 lg:p-8 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedProject(project)}
            >
              <div className={`flex flex-col ${project.images && project.images.length > 0 ? (index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse') : ''} gap-8 lg:gap-12 items-center`}>
                {project.images && project.images.length > 0 && (
                  <div className={`w-full ${project.images && project.images.length > 0 ? 'lg:w-[60%]' : ''} ${index % 2 === 0 ? 'lg:pr-6' : 'lg:pl-6'}`}>
                    <div className="space-y-4">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="relative rounded-xl overflow-hidden shadow-lg bg-white dark:bg-slate-800"
                      >
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50 dark:bg-slate-700">
                          <Image
                            src={project.images[0]}
                            alt={`${project.name} - Screenshot 1`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 60vw"
                            priority={index === 0}
                            quality={85}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                        </div>
                      </motion.div>
                      
                      {project.images.length > 1 && (
                        <div className="hidden md:grid grid-cols-2 gap-3">
                          {project.images.slice(1, 3).map((img, imgIndex) => (
                            <motion.div
                              key={imgIndex}
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                              className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md bg-white dark:bg-slate-800"
                            >
                              <div className="relative w-full h-full overflow-hidden bg-slate-50 dark:bg-slate-700">
                                <Image
                                  src={img}
                                  alt={`${project.name} - Screenshot ${imgIndex + 2}`}
                                  fill
                                  className="object-contain"
                                  sizes="(max-width: 768px) 50vw, 30vw"
                                  quality={80}
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                  }}
                                />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className={`${project.images && project.images.length > 0 ? 'w-full lg:w-[40%]' : 'w-full max-w-3xl'} space-y-6`}>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                        {project.name}
                      </h3>
                      <motion.div
                        initial={{ x: -10, opacity: 0 }}
                        whileHover={{ x: 0, opacity: 1 }}
                        className="hidden lg:flex items-center gap-2 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors"
                      >
                        <span className="text-sm font-medium">View Project</span>
                        <span>→</span>
                      </motion.div>
                    </div>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-2">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                        className="px-6 py-2.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shadow-sm hover:shadow-md"
                      >
                        GitHub →
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                        className="px-6 py-2.5 border-2 border-accent text-accent rounded-lg font-medium hover:bg-accent hover:text-white transition-colors"
                      >
                        Live Demo →
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {otherProjects.length > 0 && (
          <>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-center mb-12 text-slate-900 dark:text-slate-100"
            >
              Other Projects
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.images && project.images.length > 0 && (
                    <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden mb-4 bg-slate-50 dark:bg-slate-700">
                      <Image
                        src={project.images[0]}
                        alt={project.name}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={80}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-semibold text-slate-900 dark:text-slate-100 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                      {project.name}
                    </h4>
                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      className="flex items-center gap-1 text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors text-sm"
                    >
                      <span className="font-medium">View</span>
                      <span>→</span>
                    </motion.div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-slate-900 dark:text-slate-100 hover:text-accent dark:hover:text-accent underline decoration-accent/30 hover:decoration-accent text-sm font-medium inline-flex items-center gap-1 transition-colors"
                    >
                      View on GitHub →
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative max-w-7xl w-full max-h-[95vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-3xl hover:text-accent transition-colors z-10 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10"
              aria-label="Close image"
            >
              ✕
            </button>
            <div className="relative w-full rounded-lg overflow-hidden flex items-center justify-center">
              {selectedImage && (
                <Image
                  src={selectedImage}
                  alt="Project screenshot"
                  width={1920}
                  height={1080}
                  className="max-w-full max-h-[95vh] w-auto h-auto object-contain"
                  quality={90}
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}

      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-white dark:bg-slate-900 overflow-y-auto"
        >
          <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  onClick={() => {
                    setSelectedProject(null);
                    if (typeof window !== 'undefined' && window.location.hash) {
                      try {
                        window.history.pushState(null, '', window.location.pathname + window.location.search);
                      } catch (e) {
                        console.error('History pushState failed:', e);
                      }
                    }
                  }}
                  className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors font-medium"
                >
                  <span>←</span> Back
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  onClick={() => {
                    setSelectedProject(null);
                    if (typeof window !== 'undefined' && window.location.hash) {
                      try {
                        window.history.pushState(null, '', window.location.pathname + window.location.search);
                      } catch (e) {
                        console.error('History pushState failed:', e);
                      }
                    }
                  }}
                  className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors text-2xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                  aria-label="Close project"
                >
                  ✕
                </motion.button>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100">
                    {selectedProject.name}
                  </h2>
                  <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-3">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedProject.images && selectedProject.images.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-4">
                      Screenshots
                    </h3>
                    <div className="relative w-full">
                      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-800 shadow-xl">
                        <motion.div
                          key={carouselIndex}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="relative w-full h-full cursor-pointer"
                          onClick={() => setSelectedImage(selectedProject.images[carouselIndex])}
                        >
                          <Image
                            src={selectedProject.images[carouselIndex]}
                            alt={`${selectedProject.name} - Screenshot ${carouselIndex + 1}`}
                            fill
                            className="object-contain"
                            sizes="100vw"
                            priority
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                        </motion.div>

                        {selectedProject.images.length > 1 && (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setCarouselIndex((prev) => 
                                  prev > 0 ? prev - 1 : selectedProject.images.length - 1
                                );
                              }}
                              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-slate-900 dark:text-slate-100 hover:bg-white dark:hover:bg-slate-700 transition-colors z-10"
                              aria-label="Previous image"
                            >
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                              </svg>
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setCarouselIndex((prev) => 
                                  prev < selectedProject.images.length - 1 ? prev + 1 : 0
                                );
                              }}
                              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-slate-900 dark:text-slate-100 hover:bg-white dark:hover:bg-slate-700 transition-colors z-10"
                              aria-label="Next image"
                            >
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </>
                        )}

                        {selectedProject.images.length > 1 && (
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-slate-900 dark:text-slate-100 shadow-lg">
                            {carouselIndex + 1} / {selectedProject.images.length}
                          </div>
                        )}
                      </div>

                      {selectedProject.images.length > 1 && (
                        <div className="flex gap-3 mt-4 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                          <style jsx>{`
                            div::-webkit-scrollbar {
                              display: none;
                            }
                          `}</style>
                          {selectedProject.images.map((img, imgIndex) => (
                            <button
                              key={imgIndex}
                              onClick={() => setCarouselIndex(imgIndex)}
                              className={`relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden transition-all ${
                                carouselIndex === imgIndex
                                  ? 'ring-2 ring-slate-900 dark:ring-slate-100 ring-offset-2 scale-105'
                                  : 'opacity-60 hover:opacity-100'
                              }`}
                            >
                              <Image
                                src={img}
                                alt={`Thumbnail ${imgIndex + 1}`}
                                fill
                                className="object-cover"
                                sizes="96px"
                                quality={75}
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {(selectedProject.githubUrl || selectedProject.liveUrl) && (
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                    {selectedProject.githubUrl && (
                      <motion.a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shadow-sm hover:shadow-md inline-flex items-center gap-2"
                      >
                        <span>GitHub</span>
                        <span>→</span>
                      </motion.a>
                    )}
                    {selectedProject.liveUrl && (
                      <motion.a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 border-2 border-accent text-accent rounded-lg font-medium hover:bg-accent hover:text-white transition-colors inline-flex items-center gap-2"
                      >
                        <span>Live Demo</span>
                        <span>→</span>
                      </motion.a>
                    )}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
