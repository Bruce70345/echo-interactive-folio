import React, { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { languages } from "@/data/profile";
// import anime from "@/lib/anime";
import { animate, utils, stagger } from "animejs";
import { useTranslation } from "react-i18next";

const Languages: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animate(
            ".language-item",
            {
              opacity: [0, 1],
              translateY: [20, 0],
              delay: stagger(150),
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
  }, []);

  const getProgressWidth = (level: string) => {
    switch (level.toLowerCase()) {
      case "native":
      case "母語":
      case "madrelingua":
      case "reo taketake":
        return "100%";
      case "fluent":
      case "流利":
      case "fluente":
      case "matatau":
        return "90%";
      case "advanced":
      case "高級":
      case "avanzato":
      case "tōmua":
        return "80%";
      case "intermediate":
      case "中級":
      case "intermedio":
      case "takawaenga":
        return "60%";
      case "beginner":
      case "初級":
      case "principiante":
      case "tīmatanga":
        return "30%";
      default:
        return "50%";
    }
  };

  return (
    <section
      id="languages"
      ref={sectionRef}
      className="py-20 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
        {t("languages.title")}
      </h2>

      <div className="max-w-2xl mx-auto space-y-6">
        {languages.map((lang, index) => (
          <div key={index} className="language-item opacity-0">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <span className="text-2xl mr-3">{lang.flag}</span>
                <span className="font-medium text-gray-800 dark:text-white">
                  {lang.name[language]}
                </span>
              </div>
              <span className="text-gray-600 dark:text-gray-300">
                {lang.level[language]}
              </span>
            </div>

            <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#64ffda] rounded-full transition-all duration-1000"
                style={{ width: getProgressWidth(lang.level[language]) }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;
