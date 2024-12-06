import React from 'react';
import Navbar from './components/Navbar';
import ImageHeader from './components/ImageHeader';
import About from './components/About';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-white text-gray-900 min-h-screen max-w-2xl mx-auto">
      <Navbar />
      <main className="pt-20"> 
        <ImageHeader />
        <About />
        <Education />
        <WorkExperience />
        <Contact />
      </main>
    </div>
  );
}

export default App;