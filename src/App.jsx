import { useState } from 'react'
import * as React from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Aboutme from './components/Aboutme.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Resume from './components/Resume.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Aboutme />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App