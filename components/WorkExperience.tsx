'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    company: 'Tech Innovators Inc.',
    position: 'Senior Full Stack Developer',
    period: '2022 - Present',
    location: 'San Francisco, CA',
    website: 'https://techinnovators.com',
    description: 'Leading development of enterprise web applications using React and Node.js.',
    aboutCompany: 'A leading tech company specializing in AI-driven enterprise solutions with 500+ employees worldwide.',
    achievements: ['Led team of 5 developers', 'Improved performance by 40%', 'Launched 3 major products'],
  },
  {
    company: 'Digital Solutions Ltd.',
    position: 'Full Stack Developer',
    period: '2020 - 2022',
    location: 'New York, NY',
    website: 'https://digitalsolutions.com',
    description: 'Built and maintained multiple client projects using modern web technologies.',
    aboutCompany: 'Full-service digital agency delivering innovative web and mobile solutions for Fortune 500 clients.',
    achievements: ['Developed 15+ client projects', 'Mentored junior developers', 'Implemented CI/CD pipeline'],
  },
  {
    company: 'StartUp Ventures',
    position: 'Frontend Developer',
    period: '2019 - 2020',
    location: 'Austin, TX',
    website: 'https://startupventures.com',
    description: 'Developed responsive user interfaces and improved application performance.',
    aboutCompany: 'Fast-growing startup incubator helping early-stage companies build their digital presence.',
    achievements: ['Built 10+ landing pages', 'Reduced load time by 60%', 'Designed component library'],
  },
]

export default function WorkExperience() {
  const sectionRef = useRef(null)

  return (
    <section id="experience" className="py-16 px-6 sm:px-8 lg:px-16 xl:px-24" ref={sectionRef}>
      <div className="w-full">
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-mono text-secondary mb-4">
            Experience
          </h2>
          <p className="text-secondary-light">
            My professional journey
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-3 h-3 rounded-full bg-primary border-2 border-white transform -translate-x-1/2 hidden md:block group-hover:scale-150 transition-transform z-10" />
                
                {/* Content */}
                <div className="md:ml-16">
                  <div className="card-minimal p-6 overflow-hidden">
                    {/* Compact view */}
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-mono text-secondary group-hover:text-primary transition-colors">
                            {exp.position}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 text-sm text-secondary/70 mt-1">
                            <span className="font-semibold">{exp.company}</span>
                            <span>•</span>
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        <span className="text-xs font-mono text-secondary/50 whitespace-nowrap ml-4">
                          {exp.location}
                        </span>
                      </div>
                      
                      <p className="text-secondary/80 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                    
                    {/* Expanded details - shown on hover */}
                    <div className="max-h-0 opacity-0 group-hover:max-h-[500px] group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-in-out">
                      <div className="pt-6 mt-6 border-t border-secondary/10 space-y-4">
                        {/* About company */}
                        <div>
                          <h4 className="text-xs font-mono text-primary mb-2">ABOUT COMPANY</h4>
                          <p className="text-sm text-secondary/70 leading-relaxed">
                            {exp.aboutCompany}
                          </p>
                        </div>
                        
                        {/* Achievements */}
                        <div>
                          <h4 className="text-xs font-mono text-primary mb-2">KEY ACHIEVEMENTS</h4>
                          <ul className="space-y-1.5">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm text-secondary/70 flex items-start gap-2">
                                <span className="text-primary mt-1">→</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Website link */}
                        <div>
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-mono text-primary hover:gap-3 transition-all"
                          >
                            Visit Website <span>→</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
