"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/config";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-6 text-slate-900"
        >
          Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-slate-600 mb-16 text-lg"
        >
          My professional journey
        </motion.p>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h4 className="text-2xl font-semibold text-slate-900 mb-1">
                    {exp.role}
                  </h4>
                  <p className="text-slate-700 font-medium text-lg">
                    {exp.company}
                  </p>
                </div>
                <span className="text-slate-500 text-sm mt-2 sm:mt-0 font-medium">
                  {exp.period}
                </span>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 bg-white text-slate-700 rounded-full text-sm font-medium border border-slate-200 hover:border-slate-300 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
