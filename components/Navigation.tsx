'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { name: 'experience', href: '#experience' },
    { name: 'tech', href: '#tech-stack' },
    { name: 'projects', href: '#projects' },
    { name: 'blogs', href: '#blogs' },
    { name: 'contact', href: '#contact' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-secondary/10 dark:border-gray-700/50'
            : 'bg-transparent border-transparent dark:border-transparent'
        }`}
      >
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#home" className="text-secondary dark:text-white hover:text-primary dark:hover:text-white transition-colors z-50">
              <span className="text-lg font-mono">Adithya Challa</span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="link-underline text-secondary-light hover:text-primary dark:text-white dark:hover:text-white transition-colors text-sm hidden sm:block"
                >
                  [{item.name}]
                </a>
              ))}
              
              {/* Desktop Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="hidden sm:block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-white" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="sm:hidden text-secondary dark:text-white hover:text-primary dark:hover:text-white transition-colors z-50 p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-secondary/20 backdrop-blur-sm z-40 sm:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full bg-white dark:bg-gray-900 border-l-2 border-secondary/10 dark:border-gray-700 z-40 sm:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full pt-20 px-6">
                {/* Navigation Links */}
                <nav className="flex flex-col gap-2">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={handleLinkClick}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="group relative py-3 px-4 rounded-lg text-secondary dark:text-white hover:text-primary dark:hover:text-white hover:bg-primary/5 dark:hover:bg-white/10 transition-all font-mono text-sm"
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          →
                        </span>
                        [{item.name}]
                      </span>
                    </motion.a>
                  ))}
                </nav>

                {/* Theme Toggle in Mobile Menu */}
                <motion.button
                  onClick={toggleTheme}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="flex items-center gap-3 py-3 px-4 rounded-lg text-secondary hover:text-primary hover:bg-primary/5 dark:text-white dark:hover:text-white dark:hover:bg-white/10 transition-all font-mono text-sm mt-4"
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun className="w-5 h-5" />
                      <span>[light mode]</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-5 h-5" />
                      <span>[dark mode]</span>
                    </>
                  )}
                </motion.button>

                {/* Resume Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="mt-auto mb-8"
                >
                  <a
                    href="/docs/Adithya Challa SDE Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                    className="btn-outline text-secondary dark:text-white hover:text-secondary dark:hover:text-white font-mono inline-flex items-center justify-center gap-2 w-full"
                  >
                    View Resume
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
