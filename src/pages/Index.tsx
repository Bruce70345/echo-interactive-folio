
import React from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Languages from '@/components/Languages';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  const sections = [
    { id: "about", title: { en: "About", zh: "關於" } },
    { id: "skills", title: { en: "Skills", zh: "技能" } },
    { id: "experience", title: { en: "Experience", zh: "經歷" } },
    { id: "projects", title: { en: "Projects", zh: "專案" } },
    { id: "education", title: { en: "Education", zh: "學歷" } },
    { id: "languages", title: { en: "Languages", zh: "語言" } },
    { id: "contact", title: { en: "Contact", zh: "聯絡" } },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a192f] transition-colors duration-300">
      <NavBar sections={sections} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Languages />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
