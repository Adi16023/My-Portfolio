'use client'

import { Mail, Github, Linkedin, Send, Heart, ArrowUp, Code2, Layers, Sparkles } from 'lucide-react'
import { useState } from 'react'

export default function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    window.location.href = `mailto:adithya.challa1@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Contact Form Section */}
      <section id="contact" className="py-16 px-6 sm:px-8 lg:px-16 xl:px-24 bg-secondary/5">
        <div className="w-full">
          <div className="mb-12 text-center">
            <h2 className="text-4xl sm:text-5xl font-mono text-secondary mb-4">Get In Touch</h2>
            <p className="text-secondary-light">Have a project in mind? Let&apos;s work together!</p>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border-2 border-secondary/20 bg-white p-8 max-w-2xl mx-auto shadow-sm">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-secondary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-secondary/20 font-mono text-sm focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-mono text-secondary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-secondary/20 font-mono text-sm focus:border-primary focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-mono text-secondary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-secondary/20 font-mono text-sm focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-outline text-secondary font-mono flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-secondary/10 py-12 px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            {/* Profile Section */}
            <div className="flex flex-col items-center md:items-start">
              <div className="w-20 h-20 rounded-full bg-secondary/10 mb-4 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://github.com/Adi16023.png" 
                  alt="Adithya Challa"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-mono text-lg text-secondary mb-3">Adithya Challa</h3>
              <div className="space-y-2 text-xs text-secondary/60">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-primary" />
                  <span>Software Developer Engineer</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-primary" />
                  <span>Full Stack Developer</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span>AI & Tech Enthusiast</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-mono text-sm text-secondary mb-4 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#projects" className="text-secondary/60 hover:text-primary transition-colors text-sm">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-secondary/60 hover:text-primary transition-colors text-sm">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#tech-stack" className="text-secondary/60 hover:text-primary transition-colors text-sm">
                    Tech
                  </a>
                </li>
                <li>
                  <a href="#blogs" className="text-secondary/60 hover:text-primary transition-colors text-sm">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-secondary/60 hover:text-primary transition-colors text-sm">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h4 className="font-mono text-sm text-secondary mb-4 uppercase tracking-wider">Connect</h4>
              <div className="space-y-3">
                <a
                  href="mailto:adithya.challa1@gmail.com"
                  className="flex items-center gap-3 text-secondary/60 hover:text-primary transition-colors group"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">Email</span>
                </a>
                <a
                  href="https://github.com/Adi16023"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-secondary/60 hover:text-primary transition-colors group"
                >
                  <Github className="w-5 h-5" />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-secondary/60 hover:text-primary transition-colors group"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-secondary/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary/60 flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Adithya Challa
            </p>
            <p className="text-sm text-secondary/60">
              © {new Date().getFullYear()} All rights reserved
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-secondary/60 hover:text-primary transition-colors group"
            >
              Back to top
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </footer>
    </>
  )
}
