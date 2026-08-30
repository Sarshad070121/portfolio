import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-14 sm:pb-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[350px] sm:w-[650px] h-[250px] sm:h-[350px] bg-gradient-to-tr from-blue-100 via-cyan-100 to-indigo-100 blur-3xl rounded-full pointer-events-none opacity-60" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 sm:space-y-6 relative z-10">
        
        {/* User Profile Avatar */}
        <div className="relative inline-block group">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 blur-md opacity-70 group-hover:opacity-100 transition duration-500" />
          <img
            src={personalInfo.avatarUrl}
            alt={personalInfo.name}
            className="relative w-32 h-32 sm:w-44 sm:h-44 rounded-full object-cover border-4 border-white shadow-xl mx-auto"
          />
        </div>

        {/* Name & Role Title */}
        <div className="space-y-1.5 sm:space-y-2">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {personalInfo.name}
          </h1>
          
          <div className="text-xl sm:text-3xl font-extrabold text-blue-600 tracking-wide">
            {personalInfo.title}
          </div>
        </div>

        {/* Focused Data Engineer Summary Paragraph */}
        <p className="text-base sm:text-xl text-slate-700 max-w-3xl mx-auto font-medium leading-relaxed pt-1 text-left sm:text-center px-1">
          {personalInfo.summary}
        </p>

      </div>
    </section>
  );
};

export default Hero;
