import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Certifications from './components/Certifications';
import Positions from './components/Positions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Gallery from './components/Gallery';
import References from './components/References';
import VapiAssistant from './components/VapiAssistant';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-teal selection:text-navy">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Awards />
        <Gallery />
        <Certifications />
        <Positions />
        <References />
        <Contact />
      </main>
      <VapiAssistant />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
