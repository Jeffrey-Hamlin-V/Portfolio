import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const workExperience = [
  {
    role: "Founder's Office Intern",
    company: 'THAGAI',
    location: 'Early-stage startup',
    period: 'May 2026 - Aug 2026',
    description: "Worked across technical product development, product architecture, website design, freelance design, fundraising and pitching at an early-stage startup focused on everyday support infrastructure for India's ageing population.",
    achievements: ['Turned early product ideas into practical deliverables', 'Worked across functions and adapted as priorities changed']
  },
  {
    role: 'Freelance Web Developer',
    company: 'Ananda Stores Madurai',
    location: 'Freelance',
    period: 'Feb 2026 - May 2026',
    link: 'https://ananda-stores.vercel.app/',
    github: 'https://github.com/Jeffrey-Hamlin-V/Ananda-Stores',
    description: 'Developed a bilingual English and Tamil B2B catalogue application, working directly with business requirements.',
    achievements: ['Built Node.js and Express.js REST APIs backed by PostgreSQL', 'Implemented authentication and authorisation, file handling, product and inventory workflows, and user management', 'Deployed the application']
  },
  {
    role: 'Web Development / Automation',
    company: 'Young Indians (Yi), Yi YUVA REC',
    location: 'Chennai, India',
    period: 'Aug 2023 - Oct 2023',
    link: 'https://yuva2025.vercel.app/',
    description: 'Selected as one of three students to develop the YUVA website and handled most frontend development. Also initiated a UiPath recruitment workflow for applicant communications.',
    achievements: ['Built frontend features with HTML, CSS and Bootstrap for event promotion, registrations and showcasing achievements', 'Standardised information for approximately 500 applicants', 'Automated personalised interview communications, reducing manual communication effort; the workflow continued for later recruitment cycles']
  }
];

const InternExperience = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    const node = sectionRef.current;
    if (node) observer.observe(node);
    return () => { if (node) observer.unobserve(node); };
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-6 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-teal-400/[0.07] dark:bg-teal-500/[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-12 rounded-full" />
          <div className="space-y-6">
            {workExperience.map((exp) => (
              <Card key={`${exp.company}-${exp.role}`} className="p-6 border-2 hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors hover:shadow-lg dark:bg-gray-800/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg"><Briefcase className="h-6 w-6 text-emerald-600 dark:text-emerald-400" /></div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
                    <p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-1">{exp.company}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{exp.location} · {exp.period}</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((item) => <li key={item} className="flex items-start text-gray-700 dark:text-gray-300"><span className="text-emerald-600 dark:text-emerald-400 mr-2 mt-1">•</span><span>{item}</span></li>)}
                    </ul>
                    {(exp.link || exp.github) && <div className="flex flex-wrap gap-2">
                      {exp.link && <Button variant="outline" size="sm" onClick={() => window.open(exp.link, '_blank', 'noopener,noreferrer')}><ExternalLink className="h-4 w-4 mr-2" />Website</Button>}
                      {exp.github && <Button variant="outline" size="sm" onClick={() => window.open(exp.github, '_blank', 'noopener,noreferrer')}><Github className="h-4 w-4 mr-2" />Code</Button>}
                    </div>}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternExperience;
