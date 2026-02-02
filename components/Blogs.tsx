'use client'

import { motion } from 'framer-motion'
import { Code2, Sparkles, Calendar, Clock } from 'lucide-react'
import Image from 'next/image'

const techBlogs = [
  {
    title: 'Digital Chef: 7-Step Guide to Cooking Up a Website',
    excerpt: 'A comprehensive guide to building your first website from scratch',
    date: 'Dec 12, 2025',
    readTime: '8 min',
    url: 'https://www.linkedin.com/pulse/digital-chef-7-step-guide-cooking-up-website-adithya-challa-wdelc',
    image: '/images/tech-blogs/Computer Science.jpeg',
    width: 'xlarge',
  },
]

const stories = [
  {
    title: 'Capering Descent',
    excerpt: 'A poignant story about loss, pressure, and the haunting question of "what if?"',
    date: 'Mar 14, 2023',
    readTime: '5 min',
    url: 'https://adithyachalla.wordpress.com/2023/03/14/capering-descent/',
    image: 'https://adithyachalla.wordpress.com/wp-content/uploads/2023/03/capering-descent.jpeg',
    width: 'medium', // 2 cols
  },
  {
    title: 'Missile: PAV',
    excerpt: 'A heartwarming tale of family bonds, dreams, and the magic of homemade preserves',
    date: 'Jul 14, 2023',
    readTime: '7 min',
    url: 'https://adithyachalla.wordpress.com/2023/07/14/missilepav/',
    image: 'https://adithyachalla.wordpress.com/wp-content/uploads/2023/05/missile-pav.jpeg?w=1440',
    width: 'large', // 3 cols - Row 1: 2 cards (2+3)
  },
  {
    title: 'Thangam Travels',
    excerpt: 'A thrilling journey involving gold heists, betrayal, and unexpected revelations',
    date: 'May 4, 2023',
    readTime: '8 min',
    url: 'https://adithyachalla.wordpress.com/2023/05/04/thangam-travels/',
    image: 'https://adithyachalla.wordpress.com/wp-content/uploads/2023/03/thangam-travels-2-1.png',
    width: 'xlarge', // 5 cols - Row 2: 1 card (full width)
  },
]

export default function Blogs() {
  return (
    <section id="blogs" className="py-16 px-6 sm:px-8 lg:px-16 xl:px-24">
      <div className="w-full">
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-mono text-secondary dark:text-white mb-4">
            Blogs
          </h2>
          <p className="text-secondary-light dark:text-white">
            Tech insights & creative stories
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative">
          {/* Vertical Divider Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-secondary/20 dark:bg-white/20 transform -translate-x-1/2"></div>
          
          {/* Left Side - Tech Blogs (Light Theme) */}
          <div className="space-y-4 relative">
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-6 h-6 text-primary dark:text-white" />
              <h3 className="text-2xl font-mono text-secondary dark:text-white">Tech Blogs</h3>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {techBlogs.map((blog, index) => (
                  <motion.a
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`group relative rounded-2xl border-2 border-secondary/20 dark:border-white/20 bg-white dark:bg-gray-800 overflow-hidden hover:border-secondary dark:hover:border-white transition-all ${
                      blog.width === 'xlarge' ? 'md:col-span-5' :
                      blog.width === 'large' ? 'md:col-span-3' :
                      blog.width === 'medium' ? 'md:col-span-2' :
                      'md:col-span-1'
                    }`}
                  >
                    <div className="h-full flex flex-col">
                      {/* Image Preview */}
                      {blog.image && (
                        <div className="w-full h-64 bg-secondary/10 overflow-hidden relative">
                          <Image 
                            src={blog.image} 
                            alt={blog.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            unoptimized
                          />
                        </div>
                      )}
                      
                      {/* Content */}
                      <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-2 text-[10px] font-mono text-secondary/70 dark:text-white/70">
                        <Calendar className="w-3 h-3" />
                        <span>{blog.date}</span>
                        <span>•</span>
                        <Clock className="w-3 h-3" />
                        <span>{blog.readTime}</span>
                      </div>
                      
                      <h4 className="text-sm font-mono text-secondary dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-white transition-colors line-clamp-1">
                        {blog.title}
                      </h4>
                      
                      <p className="text-secondary/80 dark:text-white/80 text-xs leading-relaxed flex-1 line-clamp-2">
                        {blog.excerpt}
                      </p>
                      
                      <div className="mt-2 text-primary dark:text-white text-xs font-mono group-hover:gap-2 gap-1 flex items-center transition-all">
                        Read <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Stories (Blue Inverted Theme) */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-primary dark:text-white" />
              <h3 className="text-2xl font-mono text-secondary dark:text-white">Story Blogs</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 auto-rows-[240px]">
              {stories.map((story, index) => (
                <motion.a
                  key={index}
                  href={story.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`group relative rounded-2xl border-2 border-secondary/30 dark:border-white/30 bg-[#96cfff] dark:bg-gray-800 overflow-hidden hover:border-secondary dark:hover:border-white transition-all ${
                    story.width === 'xlarge' ? 'md:col-span-5' :
                    story.width === 'large' ? 'md:col-span-3' :
                    story.width === 'medium' ? 'md:col-span-2' :
                    'md:col-span-1'
                  }`}
                >
                  <div className="h-full flex flex-col">
                    {/* Image Preview */}
                    <div className="w-full h-32 bg-secondary/10 overflow-hidden relative">
                      <Image 
                        src={story.image} 
                        alt={story.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        unoptimized
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-2 text-[10px] font-mono text-secondary/70 dark:text-white/70">
                        <Calendar className="w-3 h-3" />
                        <span>{story.date}</span>
                        <span>•</span>
                        <Clock className="w-3 h-3" />
                        <span>{story.readTime}</span>
                      </div>
                      
                      <h4 className="text-sm font-mono text-secondary dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-white transition-colors line-clamp-1">
                        {story.title}
                      </h4>
                      
                      <p className="text-secondary/80 dark:text-white/80 text-xs leading-relaxed flex-1 line-clamp-2">
                        {story.excerpt}
                      </p>
                      
                      <div className="mt-2 text-primary dark:text-white text-xs font-mono group-hover:gap-2 gap-1 flex items-center transition-all">
                        Read <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
