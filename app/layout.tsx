import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import ScrollProgress from '@/components/ScrollProgress'

export const metadata: Metadata = {
  title: 'My Portfolio | Adi16023',
  description: 'Full Stack Developer Portfolio - Work Experience, Projects & Blogs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
