import React, { useState } from 'react';
import { Mail, Linkedin, Github, ArrowUp, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const FooterContact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-20 bg-slate-900 text-slate-300 relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Beautiful Styled Dark Contact Card Container */}
        <div className="p-8 sm:p-14 rounded-3xl bg-slate-800/90 border border-slate-700 shadow-2xl text-center space-y-8">
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let’s Connect
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto font-medium">
            Open for Data Engineering opportunities and technical discussions.
          </p>

          {/* Action CTAs: LinkedIn, GitHub, Email */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 hover:-translate-y-1"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn Profile</span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-slate-900 hover:bg-slate-950 text-white font-bold text-sm transition-all border border-slate-700 hover:-translate-y-1 shadow-md"
            >
              <Github className="w-5 h-5" />
              <span>GitHub Profile</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-cyan-300 font-bold text-sm transition-all hover:-translate-y-1 shadow-md"
            >
              {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Mail className="w-5 h-5 text-cyan-400" />}
              <span>{copied ? 'Email Copied!' : personalInfo.email}</span>
            </button>

          </div>

        </div>

        {/* Back to top Link */}
        <div className="pt-12 flex items-center justify-center">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-cyan-400 transition-colors py-2 px-4 rounded-xl hover:bg-slate-800/50"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default FooterContact;
