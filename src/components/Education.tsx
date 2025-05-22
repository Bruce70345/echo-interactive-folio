import React, { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { education } from "@/data/profile";
// import anime from "@/lib/anime";
import { animate, utils, stagger } from "animejs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarDays } from "lucide-react";
import { useTranslation } from "react-i18next";

const Education: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animate(
            {
              targets: ".education-card",
            },
            {
              opacity: [0, 1],
              translateY: [20, 0],
              delay: stagger(200),
              easing: "easeOutExpo",
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
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-20 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
        {t("education.title")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((edu, index) => (
          <Card
            key={index}
            className="education-card opacity-0 hover:shadow-lg transition-all duration-300"
          >
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800 dark:text-white">
                {edu.school[language]}
              </CardTitle>
              <CardDescription className="flex items-center">
                <CalendarDays className="h-4 w-4 mr-1" />
                {edu.period[language]}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div>
                <h4 className="text-lg font-medium text-[#64ffda]">
                  {edu.degree[language]}
                </h4>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  GPA: {edu.gpa}
                </div>
              </div>

              {edu.thesis && (
                <div>
                  <h5 className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {t("education.thesis")}
                  </h5>
                  <p className="text-gray-600 dark:text-gray-300 italic">
                    "{edu.thesis[language]}"
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Education;
