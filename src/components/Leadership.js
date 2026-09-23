import React, { useEffect, useRef, useState } from 'react';
import { Users } from 'lucide-react';
import { Card } from './ui/card';

const leadership = [
  {
    role: 'Chair, Sports Vertical',
    organization: 'Yi YUVA REC',
    description: 'Led volunteer teams across 50+ student and community engagements.'
  },
  {
    role: 'Communication & Sponsorship Lead',
    organization: 'Recharge, National Intercollegiate Cultural Fest',
    description: 'Managed outreach and sponsorship for a 150+ member cultural fest team.'
  },
  {
    role: 'Mentoring',
    organization: 'Technical placements',
    description: 'Mentored junior students in data structures, algorithms and problem-solving strategies for technical placements.'
  }
];

const Leadership = () => {
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
    <section id="leadership" ref={sectionRef} className="py-20 px-6 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-teal-400/[0.07] dark:bg-teal-500/[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">Leadership</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-12 rounded-full" />
          <div className="grid md:grid-cols-2 gap-6">
            {leadership.map((item) => <Card key={item.role} className="p-6 border-2 hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors hover:shadow-lg dark:bg-gray-800/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg"><Users className="h-6 w-6 text-emerald-600 dark:text-emerald-400" /></div>
                <div><h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.role}</h3><p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-2">{item.organization}</p><p className="text-gray-700 dark:text-gray-300">{item.description}</p></div>
              </div>
            </Card>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
