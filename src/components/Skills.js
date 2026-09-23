import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Brain, Server, Wrench } from 'lucide-react';
import { ExternalLink } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const Skills = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const node = sectionRef.current;
    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  const skillCategories = [
    {
      icon: Code,
      title: 'Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C', 'C#', 'SQL']
    },
    {
      icon: Code,
      title: 'Frontend & Backend',
      skills: ['React', 'Next.js', 'HTML', 'CSS', 'Bootstrap', 'Node.js', 'Express.js', 'REST APIs', 'FastAPI', 'WebSockets']
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['PostgreSQL', 'SQLite', 'Supabase']
    },
    {
      icon: Brain,
      title: 'AI / ML',
      skills: ['PyTorch', 'Q-Learning', 'Sarsa', 'DQN', 'Minimax', 'RAG', 'Agentic AI concepts']
    },
    {
      icon: Wrench,
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Linux', 'UiPath']
    },
    {
      icon: Wrench,
      title: 'Software Engineering & CS',
      skills: ['Data Structures and Algorithms', 'Object-Oriented Programming', 'DBMS', 'SDLC', 'System Design', 'Cloud Computing', 'Computer Networks', 'Operating Systems', 'RPA']
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-teal-400/[0.07] dark:bg-teal-500/[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-emerald-200 dark:hover:border-emerald-800 dark:bg-gray-800/50"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                      <Icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 hover:border-emerald-400 dark:hover:border-emerald-600 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
          <Card className="mt-8 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-2 dark:bg-gray-800/50">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Data Structures and Algorithms Practice</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">View my DSA practice repository on GitHub.</p>
            </div>
            <Button variant="outline" onClick={() => window.open('https://github.com/Jeffrey-Hamlin-V/DSA', '_blank', 'noopener,noreferrer')}>
              <ExternalLink className="h-4 w-4 mr-2" />View repository
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
