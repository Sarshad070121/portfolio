import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { educationData } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Academic Qualifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Education
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Degrees and specializations in Data Science, Data Engineering, and Information Technology.
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-4"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-600/20">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900">
                      {edu.degree}
                    </h3>
                    <div className="text-base font-bold text-blue-600 mt-0.5">
                      {edu.institution}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-full">
                  <Calendar className="w-3.5 h-3.5 text-blue-600" />
                  <span>{edu.period}</span>
                </div>
              </div>

              {/* Degree Detail / Thesis */}
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {edu.details}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
