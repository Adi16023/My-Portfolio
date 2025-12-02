'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { Building2, ExternalLink } from 'lucide-react'

const experiences = [
  {
    company: 'Vananam Ventures (The Reward Store)',
    position: 'Software Development Engineer',
    period: 'Sep 2023 - Jan 2025',
    location: 'Bangalore, IN',
    website: 'https://www.vananam.com/',
    logo: 'https://logo.clearbit.com/vananam.com',
    description: 'Designed, developed, and optimized Admin, Client, and Customer-facing PWA applications, ensuring responsive performance across Android and iOS platforms.',
    aboutCompany: 'The Reward Store by Vananam Ventures provides comprehensive reward and loyalty solutions for businesses.',
    techStack: [
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Shopify', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/shopify.svg' },
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    ],
    achievements: [
      'Built and maintained a MicroFrontend architecture for scalable and reusable shared components, enhancing development efficiency',
      'Engineered features including Cart, Exports, API Settings, Client Configuration, Wallets and Transactions, and a Rewards Storefront, seamlessly integrated with CRUD APIs for robust user interactions',
      'Customized Shopify application by modifying CSS and creating Liquid components to tailor storefront experiences',
      'Optimized key performance metrics (TBT, FCP, LCP), boosting Lighthouse scores from 68 to 91 by refining application architecture and asset delivery strategies',
      'Reduced application bundle size from 10MB to 2-3MB, enabling efficient CI/CD workflows on Bitbucket and faster deployment cycles',
      'Migrated applications from CRA to Vite for Server-Side Rendering (SSR), achieving significantly faster rendering speeds and a streamlined configuration process',
      'Developed and maintained robust unit and integration testing frameworks using Vitest, achieving 80% test coverage for enhanced application reliability'
    ],
  },
  {
    company: 'The Madras Branding Company',
    position: 'Software Development Internship',
    period: 'June - Sep 2023',
    location: 'Remote',
    website: 'https://www.tmbc.in/',
    logo: 'https://logo.clearbit.com/tmbc.in',
    description: 'Maintained the deployment of several in-house websites on Supabase, while leveraging CSS and Material UI to design an aesthetically pleasing and user-friendly frontend.',
    aboutCompany: 'The Madras Branding Company is a creative branding and digital solutions agency based in Chennai.',
    techStack: [
      { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Supabase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
      { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    ],
    achievements: [
      'Collaborated closely with designers, developers to seamlessly integrate industry-grade website features with the company\'s products and services, leading to a 20% increase in user engagement and customer satisfaction',
      'Spearheaded the strategic planning and implementation of several initiatives and trained few other interns in basics of JS',
      'Crafted visually appealing designs, creating engaging and intuitive web pages, resulting in higher customer satisfaction',
      'Implemented efficient API integration to connect various functionalities, enabling seamless data transfer and reducing loading time by 20%',
      'Links of the projects: Endless Website, Vendor Contacts'
    ],
  },
  {
    company: 'Numeronix',
    position: 'Front-end Development Internship',
    period: 'Jan - July 2022',
    location: 'Remote',
    description: 'Developed a functional prototype website utilizing the MERN stack and JavaScript, resulting in improved user experience and increased efficiency.',
    aboutCompany: 'Numeronix is a technology company focused on delivering innovative web solutions.',
    techStack: [
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    ],
    achievements: [
      'Developed a functional prototype website utilizing the MERN stack and JavaScript, resulting in improved user experience and increased efficiency',
      'Crafted visually appealing designs, creating engaging and intuitive web pages, resulting in a 15% decrease in bounce rate and a 40% increase in average time spent on the site'
    ],
  },
]

export default function WorkExperience() {
  const sectionRef = useRef(null)

  return (
    <section id="experience" className="py-16 px-6 sm:px-8 lg:px-16 xl:px-24" ref={sectionRef}>
      <div className="w-full">
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-mono text-secondary dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-secondary-light dark:text-white">
            My professional journey
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 dark:bg-white/20 hidden md:block transform -translate-x-1/2" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0
              const ExperienceCard = () => {
                const [logoError, setLogoError] = useState(false)
                
                return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 top-6 w-3 h-3 rounded-full bg-primary dark:bg-white border-2 border-white dark:border-gray-900 transform -translate-x-1/2 hidden md:block group-hover:scale-150 transition-transform z-10" />
                
                {/* Content */}
                <div className={`md:w-[calc(50%-2rem)] ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="card-minimal p-6 overflow-hidden">
                    {/* Compact view */}
                    <div className="space-y-3">
                      <div className="flex flex-nowrap items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            {exp.logo && (
                              <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white/5 flex items-center justify-center p-1">
                                {!logoError ? (
                                  <Image
                                    src={exp.logo}
                                    alt={`${exp.company} logo`}
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                    onError={() => setLogoError(true)}
                                  />
                                ) : (
                                  <Building2 className="w-6 h-6 text-primary/50" />
                                )}
                              </div>
                            )}
                            <h3 className="text-xl font-mono text-secondary dark:text-white group-hover:text-primary dark:group-hover:text-white transition-colors">
                              {exp.position}
                            </h3>
                          </div>
                          <div className="flex flex-nowrap items-center gap-2 text-sm text-secondary/70 dark:text-white/80">
                            {exp.website ? (
                              <a
                                href={exp.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold inline-flex items-center gap-1 hover:underline hover:text-primary transition-colors group/link whitespace-nowrap"
                              >
                                {exp.company}
                                <ExternalLink className="w-3 h-3 hidden group-hover/link:inline" />
                              </a>
                            ) : (
                              <span className="font-semibold whitespace-nowrap">{exp.company}</span>
                            )}
                            <span className="shrink-0">•</span>
                            <span className="whitespace-nowrap">{exp.period}</span>
                          </div>
                        </div>
                        <span className="text-xs font-mono text-secondary/50 dark:text-white/70 whitespace-nowrap shrink-0">
                          {exp.location}
                        </span>
                      </div>
                      
                      <p className="text-secondary/80 dark:text-white/90 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                    
                    {/* Expanded details - shown on hover */}
                    <div className="max-h-0 opacity-0 group-hover:max-h-[500px] group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-in-out">
                      <div className="pt-6 mt-6 border-t border-secondary/10 space-y-4">
                        {/* About company */}
                        <div>
                          <h4 className="text-xs font-mono text-primary dark:text-white mb-2">ABOUT COMPANY</h4>
                          <p className="text-sm text-secondary/70 dark:text-white/80 leading-relaxed">
                            {exp.aboutCompany}
                          </p>
                        </div>
                        
                        {/* Tech Stack */}
                        {exp.techStack && exp.techStack.length > 0 && (
                          <div>
                            <h4 className="text-xs font-mono text-primary dark:text-white mb-2">TECH STACK</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.techStack.map((tech, i) => (
                                <div
                                  key={i}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-black border border-primary/30 text-white text-xs font-mono hover:border-primary transition-colors"
                                >
                                  <Image
                                    src={tech.logo}
                                    alt={`${tech.name} logo`}
                                    width={16}
                                    height={16}
                                    className={`w-4 h-4 ${tech.name === 'Shopify' ? 'invert' : ''}`}
                                  />
                                  <span>{tech.name}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {/* Achievements */}
                        <div>
                          <h4 className="text-xs font-mono text-primary dark:text-white mb-2">KEY ACHIEVEMENTS</h4>
                          <ul className="space-y-1.5">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm text-secondary/70 dark:text-white/80 flex items-start gap-2">
                                <span className="text-primary dark:text-white shrink-0 leading-[1.4]">→</span>
                                <span className="leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
                )
              }
              
              return <ExperienceCard key={index} />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
