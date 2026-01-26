"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/config";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-6 text-slate-900 dark:text-slate-100"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="prose prose-lg max-w-none"
        >
          <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl leading-relaxed text-center">
            {personalInfo.bio}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-wrap gap-4 justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"
          >
            <span className="text-slate-500 dark:text-slate-400">Location:</span>
            <span className="ml-2 text-slate-900 dark:text-slate-100 font-medium">
              {personalInfo.location}
            </span>
          </motion.div>
          {personalInfo.email && (
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <span className="text-slate-500 dark:text-slate-400">Email:</span>
              <span className="ml-2 text-slate-900 dark:text-slate-100 font-medium">
                {personalInfo.email}
              </span>
            </motion.a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
