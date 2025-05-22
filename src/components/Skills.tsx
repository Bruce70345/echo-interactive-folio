import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { skills } from "@/data/profile";
import { Code, Database, Globe, CircleCheck, Bot } from "lucide-react";
import anime from "@/lib/anime";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from "react-i18next";

const Skills: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [category, setCategory] = useState("All");
  const [filteredSkills, setFilteredSkills] = useState(skills);

  useEffect(() => {
    if (category === "All") {
      setFilteredSkills(skills);
    } else {
      setFilteredSkills(skills.filter((skill) => skill.category === category));
    }
  }, [category]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          anime({
            targets: ".skill-card",
            opacity: [0, 1],
            translateY: [20, 0],
            delay: anime.stagger(100),
            easing: "easeOutExpo",
            duration: 800,
          });
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [filteredSkills]);

  const getIcon = (category: string) => {
    switch (category) {
      case "Programming":
        return (
          <Code className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" />
        );
      case "AI/Machine Learning":
        return (
          <Bot className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" />
        );
      case "Web & API":
        return (
          <Globe className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" />
        );
      case "Database":
        return (
          <Database className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" />
        );
      case "Testing & Version Control":
        return (
          <CircleCheck className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" />
        );
      case "Robotics & Vision":
        return (
          <Bot className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" />
        );
      default:
        return null;
    }
  };

  const categories = [
    "All",
    "Programming",
    "AI/Machine Learning",
    "Web & API",
    "Database",
    "Testing & Version Control",
    "Robotics & Vision",
  ];

  const getCategoryTranslation = (category: string) => {
    switch (category) {
      case "All":
        return t("projects.categories.all");
      case "AI/Machine Learning":
        return t("projects.categories.ai");
      case "Web & API":
        return t("projects.categories.web");
      case "Robotics & Vision":
        return t("projects.categories.robotics");
      default:
        return category;
    }
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        {t("skills.title")}
      </h2>

      <Tabs defaultValue="All" className="mb-8">
        <TabsList className="mb-8">
          {categories.map((cat) => (
            <TabsTrigger key={cat} value={cat} onClick={() => setCategory(cat)}>
              {getCategoryTranslation(cat)}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((cat) => (
          <TabsContent key={cat} value={cat} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSkills.map((skill) => (
                <Card
                  key={skill.name}
                  className="skill-card opacity-0 hover:shadow-lg transition-all duration-300 border-[1px] border-gray-200 dark:border-gray-800"
                >
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium flex items-center">
                      {getIcon(skill.category)}
                      {skill.name}
                    </CardTitle>
                    <div className="text-gray-500 dark:text-gray-400">
                      {skill.level}
                      <Badge variant="secondary" className="ml-2">
                        {t("skills.years")}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">{skill.category}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default Skills;
