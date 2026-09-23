import React, { useEffect, useState } from 'react';
import { ArrowDown, Download, Linkedin, Mail, Github } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const elementPosition = aboutSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - 80, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-8 px-6 bg-gradient-to-br from-white via-gray-50 to-emerald-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-emerald-950/20 overflow-hidden">
      <div className="absolute top-20 -left-20 w-96 h-96 bg-emerald-400/10 dark:bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[28rem] h-[28rem] bg-teal-400/10 dark:bg-teal-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-2">
              <p className="text-emerald-600 dark:text-emerald-400 font-medium text-lg tracking-wide">Hi, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-br from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                Jeffrey Hamlin Vinod
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 font-medium">Graduate Software Engineer</h2>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I build web applications and practical software, from backend APIs and database workflows to interactive user interfaces. I have worked across freelance development, an early-stage startup, automation and academic projects.
            </p>
            <p className="text-gray-600 dark:text-gray-400">Dublin, Ireland · Open to full-time graduate and entry-level technical roles</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20" onClick={() => {
                const link = document.createElement('a');
                link.href = '/Jeffrey_Hamlin_CV.pdf';
                link.download = 'Jeffrey_Hamlin_CV.pdf';
                link.click();
              }}>
                <Download className="mr-2 h-5 w-5" />Download CV
              </Button>
              <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-900/20" onClick={scrollToAbout}>Learn More</Button>
            </div>
            <div className="flex gap-4 pt-2">
              <a href="https://linkedin.com/in/jeffrey-hamlin-v" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all hover:scale-110" aria-label="LinkedIn Profile"><Linkedin className="h-6 w-6" /></a>
              <a href="mailto:jeffreyvhamlin@gmail.com" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all hover:scale-110" aria-label="Email"><Mail className="h-6 w-6" /></a>
              <a href="https://github.com/Jeffrey-Hamlin-V" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all hover:scale-110" aria-label="GitHub Profile"><Github className="h-6 w-6" /></a>
            </div>
          </div>
          <div className={`flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative group">
              <div className="absolute -inset-4 rounded-full border border-emerald-400/25 dark:border-emerald-500/20 animate-pulse" style={{ animationDuration: '3s' }} />
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <img src="https://customer-assets.emergentagent.com/job_67334850-386f-4ef2-a00f-0ca11bbe13e9/artifacts/x37ahqbw_facc222a-4369-4f23-975a-4cd84a32ef1e.JPG" alt="Jeffrey Hamlin Vinod" className="relative w-80 h-80 object-cover rounded-full shadow-2xl border-4 border-white dark:border-gray-800" />
              <div className="absolute -bottom-2 -left-8 px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-lg text-xs font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">MSc Computer Science, Trinity College Dublin</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <button onClick={scrollToAbout} className="animate-bounce p-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-200 dark:hover:bg-emerald-900/50 transition-colors" aria-label="Scroll to about section"><ArrowDown className="h-6 w-6" /></button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
