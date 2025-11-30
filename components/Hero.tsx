'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Download } from 'lucide-react'

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative py-12 px-6 sm:px-8 lg:px-16 xl:px-24">
      <motion.div 
        className="w-full text-center"
        style={{ y, opacity }}
      >
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-mono font-normal text-secondary mb-6 leading-tight">
              Full Stack Developer
            </h1>
            <p className="text-xl sm:text-2xl text-secondary-light font-light">
              Building digital experiences that matter
            </p>
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-lg text-secondary-light leading-relaxed">
              Passionate about creating elegant solutions to complex problems.
              Specializing in modern web technologies.
            </p>
          </motion.div>

          <motion.div
            className="pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a
              href="/docs/Adithya Challa SDE Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-secondary hover:text-secondary font-mono inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              View Resume
            </a>
          </motion.div>

        </div>
      </motion.div>
    </section>
  )
}
