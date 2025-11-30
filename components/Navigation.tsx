'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'projects', href: '#projects' },
    { name: 'experience', href: '#experience' },
    { name: 'tech', href: '#tech-stack' },
    { name: 'blogs', href: '#blogs' },
    { name: 'contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-secondary/10' : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="text-secondary hover:text-primary transition-colors">
            <span className="text-lg font-mono">Adithya Challa</span>
          </a>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="link-underline text-secondary-light hover:text-primary transition-colors text-sm hidden sm:block"
              >
                [{item.name}]
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
