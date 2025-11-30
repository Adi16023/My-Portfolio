'use client'

import { motion } from 'framer-motion'
import { Code2, Sparkles, Calendar, Clock } from 'lucide-react'
import Image from 'next/image'

const techBlogs = [
  {
    title: 'Building Scalable Apps with Next.js 14',
    excerpt: 'Exploring the App Router and Server Components',
    date: 'Nov 25, 2024',
    readTime: '8 min',
    url: '#',
    width: 'large', // 3 cols
  },
  {
    title: 'Microservices Architecture',
    excerpt: 'Design patterns for distributed systems',
    date: 'Nov 18, 2024',
    readTime: '12 min',
    url: '#',
    width: 'medium', // 2 cols - Row 1: 2 cards (3+2)
  },
  {
    title: 'State Management in React',
    excerpt: 'Modern approaches beyond Redux',
    date: 'Nov 10, 2024',
    readTime: '6 min',
    url: '#',
    width: 'medium', // 2 cols
  },
  {
    title: 'TypeScript Best Practices',
    excerpt: 'Type safety in large codebases',
    date: 'Nov 3, 2024',
    readTime: '10 min',
    url: '#',
    width: 'large', // 3 cols - Row 2: 2 cards (2+3)
  },
  {
    title: 'API Design Patterns',
    excerpt: 'RESTful and GraphQL best practices',
    date: 'Oct 20, 2024',
    readTime: '7 min',
    url: '#',
    width: 'xlarge', // 5 cols - Row 3: 1 card (full width)
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
          <h2 className="text-4xl sm:text-5xl font-mono text-secondary mb-4">
            Blogs
          </h2>
          <p className="text-secondary-light">
            Tech insights & creative stories
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative">
          {/* Vertical Divider Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-secondary/20 transform -translate-x-1/2"></div>
          
          {/* Left Side - Tech Blogs (Light Theme) */}
          <div className="space-y-4 relative">
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-mono text-secondary">Tech Blogs</h3>
            </div>
            
            <div className="relative">
              {/* Blog Cards with blur effect */}
              <div className="grid grid-cols-5 gap-4 auto-rows-[180px] blur-sm pointer-events-none">
                {techBlogs.map((blog, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`group relative rounded-2xl border-2 border-secondary/20 bg-white p-5 transition-all ${
                      blog.width === 'xlarge' ? 'col-span-5' :
                      blog.width === 'large' ? 'col-span-3' :
                      blog.width === 'medium' ? 'col-span-2' :
                      'col-span-1'
                    }`}
                  >
                    <div className="h-full flex flex-col">
                      <div className="flex items-center gap-2 mb-3 text-[10px] font-mono text-secondary/60">
                        <Calendar className="w-3 h-3" />
                        <span>{blog.date}</span>
                        <span>•</span>
                        <Clock className="w-3 h-3" />
                        <span>{blog.readTime}</span>
                      </div>
                      
                      <h4 className="text-sm font-mono text-secondary mb-2 line-clamp-2">
                        {blog.title}
                      </h4>
                      
                      <p className="text-secondary/70 text-xs leading-relaxed flex-1 line-clamp-3">
                        {blog.excerpt}
                      </p>
                      
                      <div className="mt-2 text-primary text-xs font-mono gap-1 flex items-center">
                        Read <span>→</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Coming Soon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-background/30 backdrop-blur-sm rounded-2xl">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-white/90 backdrop-blur-md border-2 border-primary/30 rounded-2xl px-8 py-6 shadow-xl">
                    <Code2 className="w-12 h-12 text-primary mx-auto mb-3" />
                    <h4 className="text-2xl font-mono text-secondary mb-2">Coming Soon</h4>
                    <p className="text-secondary/70 text-sm font-mono">Tech blogs are on the way</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Side - Stories (Blue Inverted Theme) */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-mono text-secondary">Story Blogs</h3>
            </div>
            
            <div className="grid grid-cols-5 gap-4 auto-rows-[240px]">
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
                  className={`group relative rounded-2xl border-2 border-secondary/30 bg-[#96cfff] overflow-hidden hover:border-secondary transition-all ${
                    story.width === 'xlarge' ? 'col-span-5' :
                    story.width === 'large' ? 'col-span-3' :
                    story.width === 'medium' ? 'col-span-2' :
                    'col-span-1'
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
                      <div className="flex items-center gap-2 mb-2 text-[10px] font-mono text-secondary/70">
                        <Calendar className="w-3 h-3" />
                        <span>{story.date}</span>
                        <span>•</span>
                        <Clock className="w-3 h-3" />
                        <span>{story.readTime}</span>
                      </div>
                      
                      <h4 className="text-sm font-mono text-secondary mb-2 group-hover:text-primary transition-colors line-clamp-1">
                        {story.title}
                      </h4>
                      
                      <p className="text-secondary/80 text-xs leading-relaxed flex-1 line-clamp-2">
                        {story.excerpt}
                      </p>
                      
                      <div className="mt-2 text-primary text-xs font-mono group-hover:gap-2 gap-1 flex items-center transition-all">
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
