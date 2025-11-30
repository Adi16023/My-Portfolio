import Hero from '@/components/Hero'
import WorkExperience from '@/components/WorkExperience'
import Projects from '@/components/Projects'
import TechStack from '@/components/TechStack'
import Blogs from '@/components/Blogs'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <WorkExperience />
      <TechStack />
      <Projects />
      <Blogs />
      <Footer />
    </>
  )
}
