'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration and real-time inventory management.',
    category: 'Web App',
    year: '2024',
    tech: ['React', 'Node.js', 'Stripe'],
    url: '#',
    width: 'wide',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
  },
  {
    title: 'Task Management',
    description: 'Collaborative project management tool with real-time updates and team chat.',
    category: 'SaaS',
    year: '2024',
    tech: ['Next.js', 'Socket.io', 'MongoDB'],
    url: '#',
    width: 'narrow',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80',
  },
  {
    title: 'AI Content Generator',
    description: 'SaaS platform leveraging AI to generate marketing content and social media captions.',
    category: 'AI Tool',
    year: '2023',
    tech: ['Python', 'OpenAI', 'FastAPI'],
    url: '#',
    width: 'narrow',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  },
  {
    title: 'Real Estate Portal',
    description: 'Property listing platform with advanced search filters and virtual tours.',
    category: 'Web Platform',
    year: '2023',
    tech: ['Vue.js', 'Firebase', 'Maps API'],
    url: '#',
    width: 'wide',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
  },
  {
    title: 'Fitness Tracker',
    description: 'Progressive web app for tracking workouts, nutrition, and progress.',
    category: 'Mobile App',
    year: '2022',
    tech: ['React Native', 'GraphQL'],
    url: '#',
    width: 'wide',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Business intelligence dashboard with real-time data visualization.',
    category: '3D Design',
    year: '2022',
    tech: ['D3.js', 'React', 'PostgreSQL'],
    url: '#',
    width: 'narrow',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
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
          <div className="relative w-full h-full">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
            <div className="absolute top-4 right-4">
              <span className="text-xs font-mono text-white bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                {project.category}
              </span>
            </div>
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
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-mono text-secondary mb-4">
            Work
          </h2>
          <p className="text-secondary-light">
            Hover over cards to see details
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[240px]">
          {projects.map((project, index) => (
            <FlipCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
