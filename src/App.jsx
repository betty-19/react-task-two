import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import PhotoGallery from './pages/PhotoGallery'
import LandingPage from './pages/LandingPage'
import Nav from './components/Nav'
import Footer from './components/Footer'
import OurProjects from './pages/OurProjects'

function App() {
  

  return (
    <>
    {/* <Nav/> */}
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/gallery" element={<PhotoGallery/>} />
      <Route path="/projects" element={<OurProjects />} />
      {/* <Route path="/nav" element={<Nav/>}/> */}
    </Routes>
   {/* <Footer/> */}
    
   
    </>
  )
}

export default App
