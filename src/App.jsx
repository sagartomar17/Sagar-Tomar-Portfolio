import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Loader from './components/common/Loader';
import CustomCursor from './components/common/CustomCursor';
import ScrollProgress from './components/common/ScrollProgress';
import ParticlesBackground from './components/common/ParticlesBackground';
import BackToTop from './components/common/BackToTop';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Loader isLoading={isLoading} />
      <CustomCursor />
      <ScrollProgress />
      <div className="edge-bar" />
      <ParticlesBackground />

      <div className="app-content">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>

      <BackToTop />
    </BrowserRouter>
  );
}

export default App;
