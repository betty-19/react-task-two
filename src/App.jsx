import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import PhotoGallery from './components/PhotoGallery'
import LandingPage from './components/LandingPage'

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/gallery" element={<PhotoGallery/>} />
    </Routes>
   
    </>
  )
}

export default App
