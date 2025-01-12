import { useState } from 'react'
import NavBar from './Components/Navbar'
import Home from './Routes/Home '
import { Route, Routes } from 'react-router-dom'
import AboutUs from './Routes/AboutUs'
import CSR from './Routes/CSR'
import Proposal from './Routes/Proposal';
import Gallery from './Routes/Gallery'
import Footer from './Components/Footer'
import  './utils/i18n';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/csr" element={<CSR/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/join-us" element={<Proposal/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
