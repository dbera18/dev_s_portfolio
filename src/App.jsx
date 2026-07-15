import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Projects from './components/Projects.jsx'
import Timeline from './components/Timeline.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Timeline />
      </div>
    </>
  )
}

export default App
