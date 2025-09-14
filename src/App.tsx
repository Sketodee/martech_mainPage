
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import LandingPage from './pages/LandingPage'
import ProgramPage from './pages/ProgramPage'
import TestimonialPage from './pages/TestimonialPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {

//  const [open, setOpen] = useState(false);


  return (
    <>
    <Navbar />

{/* <div>
      <button
        onClick={() => setOpen(true)}
        className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700"
      >
        Open Signup Form
      </button>

      <FormModal open={open} onClose={() => setOpen(false)} />
    </div> */}
    
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
