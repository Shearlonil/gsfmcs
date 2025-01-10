import { useState } from 'react'
import NavBar from './Components/Navbar'
import Home from './Routes/Home '
import { Route, Routes } from 'react-router-dom'
import AboutUs from './Routes/AboutUs'

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
      </Routes>
    </>
  )
}

export default App
