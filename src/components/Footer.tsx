
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 md:px-12 bg-gray-100 dark:bg-[#0a192f] border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-600 dark:text-gray-300">
            &copy; {currentYear} Raffaele Chiarolanza. {language === 'en' ? 'All rights reserved' : '版權所有'}
          </p>
        </div>
        
        <div className="flex items-center space-x-6">
          <a 
            href="https://www.linkedin.com/in/raffaele-chiarolanza/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-[#64ffda] dark:hover:text-[#64ffda] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="https://github.com/raffaele-chiarolanza" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-[#64ffda] dark:hover:text-[#64ffda] transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
