
import React, { useEffect, useRef } from 'react';
import { Linkedin, Github } from 'lucide-react';
import anime from 'animejs/lib/anime.es.js';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (containerRef.current) {
      const timeline = anime.timeline({
        easing: 'easeOutExpo',
      });
      
      timeline
        .add({
          targets: '.hero-title .letter',
          opacity: [0, 1],
          translateY: [20, 0],
          translateZ: 0,
          duration: 1400,
          delay: (el, i) => 300 + 30 * i
        })
        .add({
          targets: '.hero-subtitle',
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 800,
          offset: '-=800'
        })
        .add({
          targets: '.hero-tagline',
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 800,
          offset: '-=600'
        })
        .add({
          targets: '.hero-buttons',
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 800,
          offset: '-=400'
        });
    }
  }, []);
  
  // Split the name into individual letters for animation
  const nameLetters = "Raffaele Chiarolanza".split('').map((letter, index) => (
    <span key={index} className="letter inline-block">
      {letter === ' ' ? '\u00A0' : letter}
    </span>
  ));

  return (
    <div id="hero" ref={containerRef} className="min-h-screen flex flex-col justify-center items-start px-6 md:px-12 pt-16 max-w-7xl mx-auto">
      <h1 className="hero-title text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
        {nameLetters}
        <span className="text-[#64ffda] dark:text-[#64ffda]"> — Software Engineer</span>
      </h1>
      
      <p className="hero-subtitle text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
        {language === 'en' ? 'Taipei, Taiwan · ' : '台北，台灣 · '}
        <a 
          href="mailto:chiarolanzaraffaele@gmail.com" 
          className="hover:text-[#64ffda] dark:hover:text-[#64ffda] transition-colors"
        >
          chiarolanzaraffaele@gmail.com
        </a>
      </p>
      
      <p className="hero-tagline text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8 max-w-2xl">
        {language === 'en' 
          ? "AI and Robotics Enthusiast with a Passion for Clean Code." 
          : "熱衷於人工智能和機器人技術，追求乾淨的代碼。"}
      </p>
      
      <div className="hero-buttons flex space-x-4">
        <Button 
          variant="outline"
          className="group transition-all border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10"
          asChild
        >
          <a href="https://www.linkedin.com/in/raffaele-chiarolanza/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            LinkedIn
          </a>
        </Button>
        
        <Button 
          variant="outline"
          className="group transition-all border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10"
          asChild
        >
          <a href="https://github.com/raffaele-chiarolanza" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            GitHub
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
