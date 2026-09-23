import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    const node = sectionRef.current;
    if (node) observer.observe(node);
    return () => { if (node) observer.unobserve(node); };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact: ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:jeffreyvhamlin@gmail.com?subject=${subject}&body=${body}`;
    toast({ title: 'Opening your email client', description: 'Send the message from your email app to complete.' });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'jeffreyvhamlin@gmail.com', link: 'mailto:jeffreyvhamlin@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+353 089 440 9273', link: 'tel:+353894409273' },
    { icon: MapPin, label: 'Location', value: 'Dublin, Ireland' }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-6 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute -top-16 -right-16 w-80 h-80 bg-emerald-400/[0.07] dark:bg-emerald-500/[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-6 rounded-full" />
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">I'm looking for full-time graduate and entry-level technical roles in Ireland. Feel free to get in touch.</p>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 mb-8">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return <Card key={info.label} className="p-5 border-2 dark:bg-gray-800/50 flex items-center gap-4">
                    <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg"><Icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" /></div>
                    <div><p className="text-sm text-gray-600 dark:text-gray-400">{info.label}</p>{info.link ? <a href={info.link} className="text-gray-900 dark:text-white font-medium hover:text-emerald-600 dark:hover:text-emerald-400 break-all">{info.value}</a> : <p className="text-gray-900 dark:text-white font-medium">{info.value}</p>}</div>
                  </Card>;
                })}
              </div>
              <div className="flex gap-4 justify-center lg:justify-start">
                <a href="https://linkedin.com/in/jeffrey-hamlin-v" target="_blank" rel="noopener noreferrer" className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all hover:scale-110" aria-label="LinkedIn Profile"><Linkedin className="h-6 w-6" /></a>
                <a href="https://github.com/Jeffrey-Hamlin-V" target="_blank" rel="noopener noreferrer" className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all hover:scale-110" aria-label="GitHub Profile"><Github className="h-6 w-6" /></a>
              </div>
            </div>
            <Card className="p-6 border-2 dark:bg-gray-800/50">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div><label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label><Input id="contact-name" name="name" autoComplete="name" required value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} /></div>
                <div><label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label><Input id="contact-email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} /></div>
                <div><label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label><Textarea id="contact-message" name="message" required rows={5} value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} /></div>
                <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"><Send className="h-4 w-4 mr-2" />Open email draft</Button>
                <p className="text-xs text-gray-500 dark:text-gray-400">Your email app will open with the message ready to send.</p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
