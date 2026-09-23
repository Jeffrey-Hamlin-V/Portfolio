import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap } from 'lucide-react';
import { Card } from './ui/card';

const About = () => {
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
    <section id="about" ref={sectionRef} className="py-16 px-6 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute -top-16 -right-16 w-80 h-80 bg-emerald-400/[0.07] dark:bg-emerald-500/[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-12 rounded-full" />
          <Card className="p-8 bg-gradient-to-br from-gray-50 to-emerald-50/30 dark:from-gray-800 dark:to-emerald-900/10 border-2 mb-12">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">I'm Jeffrey Hamlin Vinod, an early-career software engineering candidate based in Dublin. I build practical software, including web applications, backend APIs, automation workflows and technical projects.</p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">I completed an MSc in Computer Science (Data Science) at Trinity College Dublin. My dissertation studied how training opponents and seat roles affect reinforcement learning agents in Tic-Tac-Toe.</p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">My project work includes full-stack applications, real-time features, API development, recruitment automation and algorithmic experimentation. I have also worked directly with business requirements to turn early ideas into practical deliverables.</p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">Outside technical work, I have led volunteer teams across student and community engagements, supported sponsorship outreach and mentored students preparing for technical placements.</p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">I'm looking for full-time graduate and entry-level software engineering roles in Ireland, including backend, full-stack, frontend and graduate technology roles.</p>
          </Card>
          <div className="mb-12">
            <Card className="p-6 md:p-8 max-w-3xl mx-auto hover:shadow-xl transition-shadow duration-300 border-2 hover:border-emerald-200 dark:hover:border-emerald-800 dark:bg-gray-800/50">
              <div className="flex items-center gap-4 mb-4"><div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg"><GraduationCap className="h-6 w-6 text-emerald-600 dark:text-emerald-400" /></div><h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3></div>
              <div className="space-y-4 text-sm">
                <div><p className="font-semibold text-gray-900 dark:text-white">MSc Computer Science - Data Science</p><p className="text-gray-600 dark:text-gray-400">Trinity College Dublin</p><p className="text-gray-500 dark:text-gray-500 text-xs">Sep 2025 - Sep 2026 · Completed</p></div>
                <div className="pt-3 border-t border-gray-200 dark:border-gray-700"><p className="font-semibold text-gray-900 dark:text-white">B.E. Computer Science and Engineering</p><p className="text-gray-600 dark:text-gray-400">Rajalakshmi Engineering College</p><p className="text-gray-500 dark:text-gray-500 text-xs">Oct 2021 - May 2025</p></div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
