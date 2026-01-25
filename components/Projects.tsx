"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/config";
import Image from "next/image";
import { useState } from "react";

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-4 text-slate-900"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-slate-600 mb-16 text-lg"
        >
          A selection of my recent work
        </motion.p>
        
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group"
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                {/* Project Images */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  {project.images && project.images.length > 0 ? (
                    <div className="space-y-4">
                      {/* Main image */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="relative rounded-2xl overflow-hidden shadow-xl bg-white p-2"
                      >
                        <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-slate-100">
                          <Image
                            src={project.images[0]}
                            alt={`${project.name} - Screenshot 1`}
                            fill
                            className="object-cover"
                            onError={(e) => {
                              // Fallback if image doesn't exist
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </motion.div>
                      
                      {/* Thumbnail grid for additional images */}
                      {project.images.length > 1 && (
                        <div className="grid grid-cols-3 gap-3">
                          {project.images.slice(1, 4).map((img, imgIndex) => (
                            <motion.div
                              key={imgIndex}
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                              className="relative aspect-video rounded-lg overflow-hidden shadow-md bg-white p-1 cursor-pointer"
                              onClick={() => setSelectedImage(img)}
                            >
                              <div className="relative w-full h-full rounded-md overflow-hidden bg-slate-100">
                                <Image
                                  src={img}
                                  alt={`${project.name} - Screenshot ${imgIndex + 2}`}
                                  fill
                                  className="object-cover"
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
                  ) : (
                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                      <p className="text-slate-400 text-sm">Add project screenshots in config.ts</p>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-3 text-slate-900 group-hover:text-slate-700 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-1.5 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors"
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
                        className="px-6 py-2.5 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors shadow-sm hover:shadow-md"
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
                        className="px-6 py-2.5 border-2 border-slate-900 text-slate-900 rounded-lg font-medium hover:bg-slate-900 hover:text-white transition-colors"
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
              className="text-4xl font-bold text-center mb-12 text-slate-900"
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
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group"
                >
                  {project.images && project.images.length > 0 && (
                    <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-4 bg-slate-100">
                      <Image
                        src={project.images[0]}
                        alt={project.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  <h4 className="text-xl font-semibold mb-2 text-slate-900 group-hover:text-slate-700 transition-colors">
                    {project.name}
                  </h4>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
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
                      className="text-slate-900 hover:text-slate-700 underline text-sm font-medium inline-flex items-center gap-1"
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

      {/* Image Modal */}
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
            className="relative max-w-6xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition-colors"
            >
              ✕
            </button>
            <div className="relative aspect-video w-full rounded-lg overflow-hidden">
              <Image
                src={selectedImage}
                alt="Project screenshot"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
