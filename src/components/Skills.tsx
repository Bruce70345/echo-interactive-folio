
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { skills } from '@/data/profile';
import { Code, Globe, Database, Robot, Ai, GitBranch } from 'lucide-react';
import anime from 'animejs';
import { cn } from '@/lib/utils';

// Group skills by category
const groupedSkills = skills.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {} as Record<string, typeof skills>);

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Programming':
      return <Code className="h-6 w-6" />;
    case 'Web & API':
      return <Globe className="h-6 w-6" />;
    case 'Database':
      return <Database className="h-6 w-6" />;
    case 'Robotics & Vision':
      return <Robot className="h-6 w-6" />;
    case 'AI/Machine Learning':
      return <Ai className="h-6 w-6" />;
    case 'Testing & Version Control':
      return <GitBranch className="h-6 w-6" />;
    default:
      return <Code className="h-6 w-6" />;
  }
};

const getCategoryTitle = (category: string, language: 'en' | 'zh') => {
  const translations: Record<string, { en: string, zh: string }> = {
    'Programming': { en: 'Programming', zh: '程式設計' },
    'Web & API': { en: 'Web & API', zh: '網頁和API' },
    'Database': { en: 'Database', zh: '資料庫' },
    'Robotics & Vision': { en: 'Robotics & Vision', zh: '機器人與視覺' },
    'AI/Machine Learning': { en: 'AI/Machine Learning', zh: '人工智能/機器學習' },
    'Testing & Version Control': { en: 'Testing & Version Control', zh: '測試與版本控制' }
  };
  
  return translations[category]?.[language] || category;
};

const Skills: React.FC = () => {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: '.skill-card',
            opacity: [0, 1],
            translateY: [20, 0],
            delay: anime.stagger(100),
            easing: 'easeOutExpo',
            duration: 800
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
        {language === 'en' ? 'Skills' : '技能'}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div 
            key={category}
            className="skill-card bg-white dark:bg-[#112240] rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 transform"
          >
            <div className="flex items-center mb-4 text-[#64ffda]">
              {getCategoryIcon(category)}
              <h3 className="ml-2 text-xl font-semibold text-gray-800 dark:text-white">
                {getCategoryTitle(category, language)}
              </h3>
            </div>
            
            <div className="space-y-4">
              {categorySkills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-[#64ffda] dark:group-hover:text-[#64ffda] transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.level}/5
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className={cn(
                        "h-2 rounded-full transition-all duration-500 group-hover:bg-[#64ffda]",
                        skill.level === 5 ? "bg-green-500 dark:bg-green-400" :
                        skill.level === 4 ? "bg-blue-500 dark:bg-blue-400" :
                        skill.level === 3 ? "bg-yellow-500 dark:bg-yellow-400" :
                        "bg-orange-500 dark:bg-orange-400"
                      )}
                      style={{ width: `${(skill.level / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
