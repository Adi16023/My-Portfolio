'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

const projects = [
  {
    title: 'Endless Design',
    description: 'A stunning portfolio website with mobile-first design philosophy, featuring great UI/UX presented in a unique web view that mimics mobile aesthetics.',
    category: 'Portfolio',
    year: '2023',
    tech: ['React', 'CSS', 'Responsive Design'],
    url: 'https://endless-design.vercel.app/',
    width: 'narrow',
    image: '/images/endlessdesign.png',
  },
  {
    title: 'Rocket Incentive',
    description: 'Modern landing page for a comprehensive loyalty and rewards platform, designed to engage users and drive customer retention.',
    category: 'Landing Page',
    year: '2025',
    tech: ['React', 'TailwindCSS', 'Framer Motion'],
    url: 'https://www.rocketincentive.com/',
    width: 'wide',
    image: '/images/rocketincentive.png',
  },
  {
    title: 'VendorContacts',
    description: 'Secure platform bridging Architects and Vendors with end-to-end encrypted file and text sharing, ensuring privacy without third-party access.',
    category: 'Web Platform',
    year: '2023',
    tech: ['Next.js', 'Encryption', 'WebRTC'],
    url: 'https://vendorcontacts.vercel.app/',
    width: 'narrow',
    image: '/images/vendorcontacts.png',
  },
  {
    title: 'My Gamers World',
    description: 'Specialized gift and rewards platform exclusively for gaming vouchers, providing gamers with easy access to their favorite game credits and content.',
    category: 'E-Commerce',
    year: '2024',
    tech: ['Next.js', 'Payment Gateway', 'API'],
    url: 'https://mygamersworld.com/',
    width: 'wide',
    image: '/images/mygamersworld.png',
  },
  {
    title: 'LittleShows',
    description: 'One-stop platform for discovering shows, short films, and films uploaded by talented creators sharing their work with the world.',
    category: 'Media Platform',
    year: '2023',
    tech: ['React', 'Video Streaming', 'Firebase'],
    url: 'https://littleshows-web.vercel.app/',
    width: 'narrow',
    image: '/images/littleshows.png',
  },
  {
    title: 'Cualixis',
    description: 'Consumer-goods company operating through an innovative network-driven distribution model, empowering individuals to build independent retail businesses.',
    category: 'Business Platform',
    year: '2025',
    tech: ['Next.js', 'Distribution Network', 'CRM'],
    url: 'https://www.cualixis.com/',
    width: 'narrow',
    image: '/images/cualixis.png',
  },
]

function FlipCard({ project, index }: { project: typeof projects[0], index: number }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className={`relative cursor-pointer ${project.width === 'wide' ? 'md:col-span-2' : 'md:col-span-1'}`}
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => window.open(project.url, '_blank')}
    >
      <div
        className="relative w-full h-full transition-transform duration-[800ms] ease-in-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative w-full h-full overflow-hidden rounded-t-xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={95}
              priority={index < 3}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
          <div className="absolute top-4 right-4">
            <span className="text-xs font-mono text-white bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
              {project.category}
            </span>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/90 to-primary p-5 flex flex-col justify-center"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <h3 className="text-lg font-mono text-white mb-2">{project.title}</h3>
          <p className="text-white/90 text-xs mb-3 leading-relaxed line-clamp-3">{project.description}</p>
          <div className="space-y-2">
            <p className="text-[10px] font-mono text-white/80">Tech Stack:</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech, i) => (
                <span key={i} className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-white/20">
            <p className="text-[10px] text-white/70 font-mono">{project.year}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 sm:px-8 lg:px-16 xl:px-24">
      <div className="w-full">
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-mono text-secondary dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-secondary-light dark:text-white">
            Selected works and experiments from my portfolio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[280px]">
          {projects.map((project, index) => (
            <FlipCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
