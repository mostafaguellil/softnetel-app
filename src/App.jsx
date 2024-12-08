import { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'





function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <About />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
