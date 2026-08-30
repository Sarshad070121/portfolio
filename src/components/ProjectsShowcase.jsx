import React from 'react';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

const ProjectsShowcase = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Projects
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Featured Master's thesis research, distributed big data platforms, ETL pipelines, and predictive analytics projects.
          </p>
        </div>

        {/* Projects Cards Grid - ALL Cards Highlighted with Premium Blue Accent & Rings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between p-8 rounded-3xl bg-blue-50/70 border border-blue-300 shadow-md ring-1 ring-blue-500/20 hover:shadow-lg hover:border-blue-400 transition-all group"
            >
              <div className="space-y-5">
                
                {/* Header & Title + Badge + GitHub SVG Icon */}
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    {project.badge && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white shadow-2xs">
                        <span>{project.badge}</span>
                      </span>
                    )}
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  {/* GitHub Icon Button */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white border border-slate-300 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all flex-shrink-0 shadow-2xs"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                </div>

                {/* Project Summary */}
                <p className="text-sm text-slate-700 leading-relaxed font-normal text-left">
                  {project.summary}
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-2 pt-1 text-left">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Key Deliverables & Architecture
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
                    {project.highlights.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="flex-1">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Footer Tech Tags & GitHub Link */}
              <div className="pt-6 mt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-white text-slate-800 border border-slate-300 shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span>View Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// GitHub SVG Icon component
const GithubIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default ProjectsShowcase;
