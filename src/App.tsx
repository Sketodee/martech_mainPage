
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import LandingPage from './pages/LandingPage'
import ProgramPage from './pages/ProgramPage'
import TestimonialPage from './pages/TestimonialPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {


  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/program" element={<ProgramPage />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
      </Routes>
      <Footer /> 
    </>
  )
}

export default App
