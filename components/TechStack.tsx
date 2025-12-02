'use client'

import { motion } from 'framer-motion'

const techStack = {
  row1: [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  ],
  row2: [
    { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'Dart', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
    { name: 'Redux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
    { name: 'Material UI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Jira', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
    { name: 'Bitbucket', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg' },
    { name: 'Jest', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
    { name: 'Vite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
    { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  ],
}

export default function TechStack() {
  // Duplicate items for seamless loop
  const row1Items = [...techStack.row1, ...techStack.row1]
  const row2Items = [...techStack.row2, ...techStack.row2]

  return (
    <section id="tech-stack" className="py-16 px-6 sm:px-8 lg:px-16 xl:px-24 bg-gradient-to-b from-transparent to-primary/5 dark:to-white/5">
      <div className="w-full">
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-mono text-secondary dark:text-white mb-4">
            Technical Skills and Interests
          </h2>
        </div>

        {/* Row 1 - Scrolling Right */}
        <div className="relative overflow-hidden mb-8">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
          
          <motion.div
            className="flex gap-12"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {row1Items.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 group"
              >
                <div className="w-20 h-20 flex items-center justify-center bg-white dark:bg-gray-800 rounded-2xl border-2 border-secondary/10 dark:border-white/20 hover:border-primary/40 dark:hover:border-white/40 transition-all shadow-sm hover:shadow-md">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-12 h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <p className="text-xs text-center mt-2 font-mono text-secondary/70 dark:text-white/80">
                  {tech.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Scrolling Left */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
          
          <motion.div
            className="flex gap-12"
            animate={{
              x: ['-50%', '0%'],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {row2Items.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 group"
              >
                <div className="w-20 h-20 flex items-center justify-center bg-white dark:bg-gray-800 rounded-2xl border-2 border-secondary/10 dark:border-white/20 hover:border-primary/40 dark:hover:border-white/40 transition-all shadow-sm hover:shadow-md">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-12 h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <p className="text-xs text-center mt-2 font-mono text-secondary/70 dark:text-white/80">
                  {tech.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
