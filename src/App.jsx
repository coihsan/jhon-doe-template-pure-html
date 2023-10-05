import { useState } from 'react'
import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
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

<BrowserRouter basename="/app">
  <Routes>
    <Route path="/">
      <Navbar />
      <Hero />
      <Aboutme />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </Route>
  </Routes>
</BrowserRouter>

    </>
  )
}

export default App
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Navbar />
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>