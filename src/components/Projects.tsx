import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/data/profile";
// import anime from "@/lib/anime";
import { animate, utils, stagger } from "animejs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, FileImage, FileText } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Project } from "@/types";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const Projects: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});
  const [category, setCategory] = useState<"All" | "AI" | "Web" | "Robotics">(
    "All"
  );
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  const toggleItem = (index: number) => {
    const contentElement = contentRefs.current[index];
    const isOpen = openItems[index];

    if (contentElement) {
      const height = contentElement.scrollHeight;

      animate(contentElement, {
        height: isOpen ? [height, 0] : [0, height],
        opacity: isOpen ? [1, 0] : [0, 1],
        duration: 400,
        ease: "inOutQuad",
        complete: () => {
          if (!isOpen) {
            contentElement.style.height = "auto";
          }
        },
      });
    }

    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    // 初始化所有內容區域的高度為 0
    contentRefs.current.forEach((ref) => {
      if (ref) {
        ref.style.height = "0px";
        ref.style.overflow = "hidden";
      }
    });
  }, []);

  useEffect(() => {
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === category)
      );
    }
  }, [category]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animate(
            ".project-card",

            {
              opacity: [0, 1],
              translateY: [20, 0],
              delay: stagger(100),
              easing: "outExpo",
              duration: 800,
            }
          );
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
  }, [filteredProjects]);

  const categories = [
    { id: "All", label: t("projects.categories.all") },
    { id: "AI", label: t("projects.categories.ai") },
    { id: "Web", label: t("projects.categories.web") },
    { id: "Robotics", label: t("projects.categories.robotics") },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 px-6 md:px-12 max-w-7xl mx-auto min-h-screen"
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        {t("projects.title")}
      </h2>

      <Tabs defaultValue="All" className="mb-8">
        <TabsList className="mb-8">
          {categories.map((cat) => (
            <TabsTrigger
              key={cat.id}
              value={cat.id}
              onClick={() => setCategory(cat.id as any)}
            >
              {cat.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((cat) => (
          <TabsContent key={cat.id} value={cat.id} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card
                  key={index}
                  className="project-card opacity-0 group hover:shadow-lg transition-all duration-300 border-[1px] border-gray-200 dark:border-gray-800"
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-semibold text-gray-800 dark:text-[#eba427] text-[#eba427] transition-colors">
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
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-4">
                      {project.demo && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="group/button"
                          asChild
                        >
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-1 group-hover/button:text-[#eba427] transition-colors" />
                            <span className="group-hover/button:text-[#eba427] transition-colors">
                              {t("projects.demo")}
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
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-1 group-hover/button:text-[#eba427] transition-colors" />
                          <span className="group-hover/button:text-[#eba427] transition-colors">
                            GitHub
                          </span>
                        </a>
                      </Button>

                      <Collapsible
                        open={openItems[index]}
                        onOpenChange={() => toggleItem(index)}
                      >
                        <CollapsibleTrigger asChild>
                          <div className="flex items-center text-sm text-[#eba427] cursor-pointer">
                            <FileText className="h-4 w-4 mr-1" />
                            <span>{t("projects.lessonsLearned")}</span>
                          </div>
                        </CollapsibleTrigger>

                        <div
                          ref={(el) => (contentRefs.current[index] = el)}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 max-h-[160px] overflow-y-auto custom-scrollbar">
                            <p className="text-sm text-gray-700 dark:text-gray-200">
                              {project.lessons[language]}
                            </p>
                          </div>
                        </div>
                      </Collapsible>
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

export default Projects;
