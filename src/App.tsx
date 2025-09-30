import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import WhyWeDo from './components/WhyWeDo';
import News from './components/News';
import CTA from './components/CTA';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Philosophy from './components/Philosophy';
import Company from './components/Company';

const HomePage = () => (
  <>
    <Hero />
    <WhatWeDo />
    <WhyWeDo />
    <News />
    <CTA />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/company" element={<Company />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;