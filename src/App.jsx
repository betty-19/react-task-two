import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import PhotoGallery from './components/PhotoGallery'
import LandingPage from './components/LandingPage'
import Nav from './components/Nav'
import Footer from './components/Footer'
import OurProjects from './components/OurProjects'

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
