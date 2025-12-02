'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import Lottie from 'lottie-react'
import globeAnimation from '@/public/animations/globe-animation.json'
import { useTheme } from './ThemeProvider'

export default function Hero() {
  const { theme } = useTheme()
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative py-12 px-6 sm:px-8 lg:px-16 xl:px-24">
      {/* Lottie Globe Animation Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className={`w-full max-w-4xl ${theme === 'dark' ? 'brightness-0 invert' : ''}`}>
          <Lottie 
            animationData={globeAnimation}
            loop={true}
            autoplay={true}
          />
        </div>
      </div>
      
      <div className="w-full text-center relative z-10">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-mono font-normal text-secondary dark:text-white mb-6 leading-tight">
              Full Stack Developer
            </h1>
            <p className="text-xl sm:text-2xl text-secondary-light dark:text-white font-light">
              Building digital experiences that matter
            </p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-lg text-secondary-light dark:text-white leading-relaxed">
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
              className="btn-outline text-secondary hover:text-secondary dark:text-white dark:hover:text-white font-mono inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              View Resume
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
