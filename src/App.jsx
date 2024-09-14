import { useState } from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';

import './App.css'
import About from './components/about/About';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScroolUp from './components/scrollup/ScroolUp';

function App() {

  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Contact />
      </main>

      <Footer />
      <ScroolUp />
    </>
  )
}

export default App
