import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Skills/>
      <AboutSection/>
      <ProjectsSection/>
      <ContactSection/>
    </div>
  )
}

export default App