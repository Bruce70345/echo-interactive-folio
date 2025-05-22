import React from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Languages from "@/components/Languages";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const Index: React.FC = () => {
  const { t } = useTranslation();

  const sections = [
    {
      id: "about",
      title: t("about.title"),
    },
    {
      id: "skills",
      title: t("skills.title"),
    },
    {
      id: "experience",
      title: t("experience.title"),
    },
    {
      id: "projects",
      title: t("projects.title"),
    },
    {
      id: "education",
      title: t("education.title"),
    },
    {
      id: "languages",
      title: t("languages.title"),
    },
    // {
    //   id: "contact",
    //   title: t("contact.title"),
    // },
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
      {/* <ContactForm /> */}
      <Footer />
    </div>
  );
};

export default Index;
