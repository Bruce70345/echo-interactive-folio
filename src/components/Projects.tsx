
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { projects } from '@/data/profile';
import anime from 'animejs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, FileImage, FileText } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Project } from '@/types';
import { cn } from '@/lib/utils';

const Projects: React.FC = () => {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [category, setCategory] = useState<'All' | 'AI' | 'Web' | 'Robotics'>('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  
  useEffect(() => {
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  }, [category]);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        anime({
          targets: '.project-card',
          opacity: [0, 1],
          translateY: [20, 0],
          delay: anime.stagger(100),
          easing: 'easeOutExpo',
          duration: 800
        });
        observer.unobserve(entries[0].target);
      }
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [filteredProjects]);
  
  const categories = [
    { id: 'All', label: { en: 'All', zh: '全部' } },
    { id: 'AI', label: { en: 'AI', zh: '人工智能' } },
    { id: 'Web', label: { en: 'Web', zh: '網頁' } },
    { id: 'Robotics', label: { en: 'Robotics', zh: '機器人' } }
  ];
  
  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        {language === 'en' ? 'Projects' : '專案'}
      </h2>
      
      <Tabs defaultValue="All" className="mb-8">
        <TabsList className="mb-8">
          {categories.map(cat => (
            <TabsTrigger 
              key={cat.id}
              value={cat.id}
              onClick={() => setCategory(cat.id as any)}
            >
              {cat.label[language]}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {categories.map(cat => (
          <TabsContent key={cat.id} value={cat.id} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card 
                  key={project.id}
                  className="project-card opacity-0 group hover:shadow-lg transition-all duration-300 border-[1px] border-gray-200 dark:border-gray-800"
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-[#64ffda] transition-colors">
                      {project.name}
                    </CardTitle>
                    <CardDescription>
                      {project.description[language]}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden relative">
                      <img 
                        src={project.image} 
                        alt={project.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <FileImage className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    {project.lessons && (
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <div className="flex items-center text-sm text-[#64ffda] cursor-pointer">
                            <FileText className="h-4 w-4 mr-1" />
                            <span>
                              {language === 'en' ? 'Lessons learned' : '學習心得'}
                            </span>
                          </div>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                          <p className="text-sm text-gray-700 dark:text-gray-200">
                            {project.lessons[language]}
                          </p>
                        </HoverCardContent>
                      </HoverCard>
                    )}
                  </CardContent>
                  
                  <CardFooter className={cn(
                    "flex justify-between",
                    !project.demo && "justify-end"
                  )}>
                    {project.demo && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="group/button"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1 group-hover/button:text-[#64ffda] transition-colors" />
                          <span className="group-hover/button:text-[#64ffda] transition-colors">
                            Demo
                          </span>
                        </a>
                      </Button>
                    )}
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="group/button"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1 group-hover/button:text-[#64ffda] transition-colors" />
                        <span className="group-hover/button:text-[#64ffda] transition-colors">
                          GitHub
                        </span>
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default Projects;
