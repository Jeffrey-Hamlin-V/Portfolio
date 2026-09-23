import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const projects = [
  {
    title: 'Reinforcement Learning in Tic-Tac-Toe',
    subtitle: 'MSc Dissertation',
    description: 'Reinforcement Learning in Tic-Tac-Toe: An Empirical Study of Training Opponent Selection and Seat-Role Effects on Agent Convergence, Policy Quality and Robustness. Compared six training conditions and three seat-role configurations across 216 training runs, including robustness against Minimax.',
    tags: ['Python', 'Q-Learning', 'Sarsa', 'DQN', 'Minimax'],
    details: ['Convergence and policy quality analysis', 'Debugged recursive Minimax cache mutation through state isolation', 'Created Python verification scripts'],
    featured: true
  },
  {
    title: 'Need to Know',
    description: 'An audience-aware Slack assistant operating over Slack Socket Mode with dynamic documentation search, deterministic policy checks and an LLM classification gate. Evaluated across operational test cases and injection probes.',
    tags: ['Python', 'FastAPI', 'SQLite FTS5', 'Pydantic', 'Slack SDK', 'TypeScript'],
    details: ['40 operational test cases', '8 injection probes'],
    link: 'https://jeffrey-need-to-know.netlify.app/'
  },
  {
    title: 'TableSync',
    description: 'A real-time multi-user dining coordination application featuring live restaurant voting, menu ordering, bill calculation and split payment settlements without page reloads.',
    tags: ['Next.js', 'TypeScript', 'React', 'PostgreSQL', 'Supabase', 'WebSockets'],
    details: ['Shared sessions and guest identities', 'Live order and payment updates'],
    link: 'https://table-sync-gules.vercel.app/',
    github: 'https://github.com/Jeffrey-Hamlin-V/TableSync'
  },
  {
    title: 'Charity Platform (Golf Charity Platform)',
    description: 'A web platform built to support charity initiatives and event coordination through a golf charity raffle. It includes charity selection, recent golf scores, a monthly draw and Stripe integration.',
    tags: ['Next.js 14', 'TypeScript', 'Supabase', 'Stripe'],
    link: 'https://golf-charity-platform-56gs.vercel.app/',
    github: 'https://github.com/Jeffrey-Hamlin-V/Golf-Charity-Platform'
  },
  {
    title: 'AI-Resistant CAPTCHA System',
    description: 'An academic project exploring AI-resistant CAPTCHA design. The project includes CAPTCHA recognition on Raspberry Pi and a human-versus-AI phase using behavioural and semantic scoring.',
    tags: ['CRNN', 'TensorFlow Lite', 'Raspberry Pi', 'Behavioural analysis']
  },
  {
    title: 'Real-Time Traffic Prediction & Signaling System',
    description: 'A traffic management project using YOLOv8 and LSTM with Django and SUMO for adaptive traffic signalling.',
    tags: ['YOLOv8', 'LSTM', 'Django', 'SUMO'],
    details: ['Over 90% detection', 'Approximately 25% reduction in waiting time']
  },
  {
    title: 'EAFC 26 Footballers Rating Dashboard',
    description: 'An interactive D3.js dashboard for exploring ratings, potential and market value across 17,000+ football players, with interactive visualisations and filtering.',
    tags: ['D3.js', 'JavaScript', 'Data visualisation'],
    details: ['17,000+ players'],
    link: 'https://jeffrey-hamlin-v.github.io/vinodauj-DataVisualization_Dashboard-EAFC26/',
    github: 'https://github.com/Jeffrey-Hamlin-V/vinodauj-DataVisualization_Dashboard-EAFC26'
  },
  {
    title: 'Sentiment Analysis for College Reviews',
    description: 'Analysed placement-related reviews from Shiksha using automated sentiment classification and personalised response generation.',
    tags: ['Python', 'NLP', 'Sentiment analysis', 'Text classification'],
    details: ['Personalised response generation']
  }
];

const Projects = () => {
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
    <section id="projects" ref={sectionRef} className="py-20 px-6 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute -top-16 -left-16 w-80 h-80 bg-emerald-400/[0.07] dark:bg-emerald-500/[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-12 rounded-full" />
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card key={project.title} className={`p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-emerald-200 dark:hover:border-emerald-800 dark:bg-gray-800/50 ${project.featured ? 'md:col-span-2 border-emerald-500 dark:border-emerald-600 bg-emerald-50/70 dark:bg-emerald-950/30 p-8' : ''}`}>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  {project.subtitle && <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300">{project.subtitle}</span>}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                {project.details?.length > 0 && <ul className="space-y-1 mb-4 text-sm text-emerald-700 dark:text-emerald-300">{project.details.map((detail) => <li key={detail}>• {detail}</li>)}</ul>}
                {project.tags?.length > 0 && <div className="flex flex-wrap gap-2 mb-4">{project.tags.map((tag) => <span key={tag} className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">{tag}</span>)}</div>}
                {(project.link || project.github) && <div className="flex gap-2 mt-auto">
                  {project.link && <Button variant="outline" size="sm" onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}><ExternalLink className="h-4 w-4 mr-2" />Live project</Button>}
                  {project.github && <Button variant="outline" size="sm" onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}><Github className="h-4 w-4 mr-2" />Code</Button>}
                </div>}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
