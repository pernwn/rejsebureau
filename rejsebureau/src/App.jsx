//import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import { Footer } from './components/Nav';
import HomePage from './pages/homepage';
import AboutPage from './pages/about';

import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="*" element={<Navigate to="/" />} />
        
      </Routes>
      <Footer />


    </>
  )
}

export default App;
