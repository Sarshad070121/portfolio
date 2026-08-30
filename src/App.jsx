import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import SkillsMatrix from './components/SkillsMatrix';
import ProjectsShowcase from './components/ProjectsShowcase';
import FooterContact from './components/FooterContact';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white font-sans antialiased">
      <Navbar />
      <main>
        {/* 1. Intro to me */}
        <Hero />

        {/* 2. Work Experience */}
        <Experience />

        {/* 3. Education */}
        <Education />

        {/* 4. Skills */}
        <SkillsMatrix />

        {/* 5. Projects */}
        <ProjectsShowcase />
      </main>
      
      {/* 6. Contact / Footer */}
      <FooterContact />
    </div>
  );
}

export default App;
