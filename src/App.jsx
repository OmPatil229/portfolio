import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsPlaceholder from './components/ProjectsPlaceholder';
import Footer from './components/Footer';
import Research from './components/Research';

function App() {
  return (
    <div className="min-h-screen flex flex-col pt-24 md:pt-0">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Research />
        <ProjectsPlaceholder />
      </main>
      <Footer />
    </div>
  );
}

export default App;
