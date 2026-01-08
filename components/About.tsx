"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/config";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            {personalInfo.bio}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap gap-4 justify-center"
        >
          <div className="px-6 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <span className="text-gray-600 dark:text-gray-400">Location:</span>
            <span className="ml-2 text-gray-900 dark:text-white font-semibold">
              {personalInfo.location}
            </span>
          </div>
          {personalInfo.email && (
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-6 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <span className="text-gray-600 dark:text-gray-400">Email:</span>
              <span className="ml-2 text-gray-900 dark:text-white font-semibold">
                {personalInfo.email}
              </span>
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
