import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Professional History
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Work Experience
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            3 years of commercial experience delivering data analytics, ETL processing, and workflow automation.
          </p>
        </div>

        {/* Experience Cards (Matched precisely to Projects section style & alignment) */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="p-8 sm:p-9 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-5"
            >
              
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 pb-5">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    {exp.role}
                  </h3>
                  <div className="text-base font-bold text-blue-600">
                    {exp.company} <span className="text-slate-500 font-normal text-sm">— {exp.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-700 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full shadow-2xs">
                  <Calendar className="w-3.5 h-3.5 text-blue-600" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Highlights (Aligned identically to Projects section) */}
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Key Achievements & Responsibilities
                </div>
                <ul className="space-y-3 text-sm text-slate-700 font-normal leading-relaxed text-left">
                  {exp.highlights.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="flex-1">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
