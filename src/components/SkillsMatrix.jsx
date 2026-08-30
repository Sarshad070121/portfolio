import React from 'react';
import { Database, Cpu, BarChart3, Users, CheckCircle2 } from 'lucide-react';
import { skillGroups } from '../data/portfolioData';

const SkillsMatrix = () => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Data & Programming': return <Code2 className="w-5 h-5 text-blue-600" />;
      case 'Data Engineering': return <Database className="w-5 h-5 text-blue-600" />;
      case 'BI & Analytics': return <BarChart3 className="w-5 h-5 text-blue-600" />;
      case 'Professional Skills': return <Users className="w-5 h-5 text-blue-600" />;
      default: return <Cpu className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="skills" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-10 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-blue-200">
            Technical Matrix
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            Technical & Professional Skills
          </h2>
          <p className="text-slate-600 text-xs sm:text-base font-medium">
            Core technical stack, data engineering tools, business intelligence platforms, and professional competencies.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-4 sm:space-y-5 text-left"
            >
              <div className="flex items-center gap-3 border-b border-slate-200 pb-3.5 sm:pb-4">
                <div className="p-2 sm:p-2.5 rounded-xl bg-blue-100/70 border border-blue-200">
                  {getCategoryIcon(group.category)}
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  {group.category}
                </h3>
              </div>

              {/* Individual Skill Badges */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {group.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-bold bg-white text-slate-800 border border-slate-300 shadow-2xs hover:border-blue-500 hover:text-blue-600 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const Code2 = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

export default SkillsMatrix;
