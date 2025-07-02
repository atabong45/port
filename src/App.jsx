import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import About from './components/about/About';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScroolUp from './components/scrollup/ScroolUp';
import Projects from './components/projects/Projects';
import { ThemeProvider } from './contexts/ThemeContext';

import './App.css'

function MainPage() {
  return (
    <>
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Contact />
      </main>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
        <ScroolUp />
      </Router>
    </ThemeProvider>
  )
}

export default App