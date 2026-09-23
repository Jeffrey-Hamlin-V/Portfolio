import React, { useEffect, useRef, useState } from 'react';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const certifications = [
  { title: 'IBM RAG and Agentic AI Professional Certificate', issuer: 'Coursera / IBM', credentialUrl: 'https://coursera.org/share/3182a9d7c6041279496620e7c1cebdc3' },
  { title: 'Introduction to MongoDB (For Students)', issuer: 'MongoDB', date: 'July 23, 2024' },
  { title: 'MongoDB Basics - ICT Academy Learnathon', issuer: 'MongoDB', date: 'September 7, 2023' },
  {
    title: 'Deep Learning Concepts Workshop',
    issuer: 'University of Texas, Dallas',
    description: 'Hands-on workshop covering neural network architectures, backpropagation, regularization and optimization for computer vision and predictive modelling. Included practical implementation and model evaluation.',
    skills: ['CNN', 'TensorFlow', 'PyTorch']
  },
  {
    title: 'Entrepreneurship',
    issuer: 'NPTEL',
    description: 'Covered opportunity identification, market analysis, business model design, startup finance and growth strategy, with assignments on validating ideas and preparing business plans.'
  },
  {
    title: 'Automation Explorer Training',
    issuer: 'UiPath',
    date: 'July 2024',
    description: 'Training in UiPath Studio, including variables, arguments, control flow and Excel and UI automation.',
    skills: ['RPA', 'UiPath Studio']
  },
  {
    title: 'Control Flow in Studio',
    issuer: 'UiPath',
    date: 'July 2024',
    description: 'Covered sequences, flowcharts, state machines, decisions, loops and exception-aware flows in UiPath Studio.',
    skills: ['UiPath Studio', 'Control Flow']
  }
];

const Certifications = () => {
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
    <section id="certifications" ref={sectionRef} className="py-20 px-6 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute -top-16 -right-16 w-80 h-80 bg-emerald-400/[0.07] dark:bg-emerald-500/[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-12 rounded-full" />
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert) => <Card key={cert.title} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-emerald-200 dark:hover:border-emerald-800 dark:bg-gray-800/50">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg"><Award className="h-6 w-6 text-emerald-600 dark:text-emerald-400" /></div>
                <div className="flex-1"><h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{cert.title}</h3><p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-1">{cert.issuer}</p>{cert.date && <p className="text-sm text-gray-600 dark:text-gray-400">{cert.date}</p>}</div>
              </div>
              {cert.description && <p className="text-gray-700 dark:text-gray-300 mb-4">{cert.description}</p>}
              {cert.skills && <div className="flex flex-wrap gap-2">{cert.skills.map((skill) => <span key={skill} className="flex items-center gap-1 px-3 py-1 text-xs bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 rounded-full"><CheckCircle className="h-3 w-3" />{skill}</span>)}</div>}
              {cert.credentialUrl && <Button variant="outline" size="sm" className="mt-4 w-full" onClick={() => window.open(cert.credentialUrl, '_blank', 'noopener,noreferrer')}><ExternalLink className="h-4 w-4 mr-2" />View credential</Button>}
            </Card>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
