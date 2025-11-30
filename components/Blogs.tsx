'use client'

import { motion } from 'framer-motion'
import { Code2, Sparkles, Calendar, Clock } from 'lucide-react'

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
    title: 'The Developer Who Forgot to Push',
    excerpt: 'A tale of lost code and hard lessons',
    date: 'Nov 20, 2024',
    readTime: '5 min',
    url: '#',
    width: 'medium', // 2 cols
  },
  {
    title: 'Coffee, Code, and Midnight Debugging',
    excerpt: 'Stories from the trenches of software development',
    date: 'Nov 12, 2024',
    readTime: '7 min',
    url: '#',
    width: 'large', // 3 cols - Row 1: 2 cards (2+3)
  },
  {
    title: 'When AI Became My Pair Programmer',
    excerpt: 'Adventures in modern development workflows',
    date: 'Nov 5, 2024',
    readTime: '4 min',
    url: '#',
    width: 'xlarge', // 5 cols - Row 2: 1 card (full width)
  },
  {
    title: 'First Day as a Junior Developer',
    excerpt: 'From bootcamp to tech company reality',
    date: 'Oct 28, 2024',
    readTime: '6 min',
    url: '#',
    width: 'large', // 3 cols
  },
  {
    title: 'The Bug That Taught Me Humility',
    excerpt: 'When a single character broke production',
    date: 'Oct 15, 2024',
    readTime: '5 min',
    url: '#',
    width: 'medium', // 2 cols - Row 3: 2 cards (3+2)
  },
]

export default function Blogs() {
  return (
    <section id="blogs" className="py-16 px-6 sm:px-8 lg:px-16 xl:px-24">
      <div className="w-full">
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-mono text-secondary mb-4">
            Writing
          </h2>
          <p className="text-secondary-light">
            Tech insights & creative stories
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative">
          {/* Vertical Divider Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-secondary/20 transform -translate-x-1/2"></div>
          
          {/* Left Side - Tech Blogs (Light Theme) */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-mono text-secondary">Tech Blogs</h3>
            </div>
            
            <div className="grid grid-cols-5 gap-4 auto-rows-[180px]">
              {techBlogs.map((blog, index) => (
                <motion.a
                  key={index}
                  href={blog.url}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`group relative rounded-2xl border-2 border-secondary/20 bg-white p-5 hover:border-primary/40 transition-all ${
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
                    
                    <h4 className="text-sm font-mono text-secondary mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {blog.title}
                    </h4>
                    
                    <p className="text-secondary/70 text-xs leading-relaxed flex-1 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    
                    <div className="mt-2 text-primary text-xs font-mono group-hover:gap-2 gap-1 flex items-center transition-all">
                      Read <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Side - Stories (Blue Inverted Theme) */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-mono text-secondary">Stories</h3>
            </div>
            
            <div className="grid grid-cols-5 gap-4 auto-rows-[180px]">
              {stories.map((story, index) => (
                <motion.a
                  key={index}
                  href={story.url}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`group relative rounded-2xl border-2 border-secondary/30 bg-[#96cfff] p-5 hover:border-secondary transition-all ${
                    story.width === 'xlarge' ? 'col-span-5' :
                    story.width === 'large' ? 'col-span-3' :
                    story.width === 'medium' ? 'col-span-2' :
                    'col-span-1'
                  }`}
                >
                  <div className="h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-3 text-[10px] font-mono text-secondary/70">
                      <Calendar className="w-3 h-3" />
                      <span>{story.date}</span>
                      <span>•</span>
                      <Clock className="w-3 h-3" />
                      <span>{story.readTime}</span>
                    </div>
                    
                    <h4 className="text-sm font-mono text-secondary mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {story.title}
                    </h4>
                    
                    <p className="text-secondary/80 text-xs leading-relaxed flex-1 line-clamp-3">
                      {story.excerpt}
                    </p>
                    
                    <div className="mt-2 text-primary text-xs font-mono group-hover:gap-2 gap-1 flex items-center transition-all">
                      Read <span className="group-hover:translate-x-1 transition-transform">→</span>
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
