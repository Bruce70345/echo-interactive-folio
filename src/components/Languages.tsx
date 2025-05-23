import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { languages } from "@/data/profile";
import { animate, stagger } from "animejs";
import { useTranslation } from "react-i18next";

const Languages: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressBarsRef = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const animateProgressBar = (element: HTMLDivElement, targetWidth: string) => {
    animate(element, {
      width: [0, targetWidth],
      easing: "inOutQuad",
      duration: 500,
    });
  };

  const handleLanguageClick = (index: number, targetWidth: string) => {
    const progressBar = progressBarsRef.current[`progress-${index}`];
    if (progressBar) {
      animateProgressBar(progressBar, targetWidth);
    }

    const clickedElement = document.getElementById(`language-item-${index}`);
    if (clickedElement) {
      animate(clickedElement, {
        scale: [1, 0.6, 1],
        backgroundColor: [
          // getComputedStyle(clickedElement).backgroundColor,
          // "#000000",
          // getComputedStyle(clickedElement).backgroundColor,
        ],
        duration: 600,
        easing: "easeInOutQuad",
      });
    }

    setActiveIndex(index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animate(".language-item", {
            opacity: [0, 1],
            translateY: [20, 0],
            delay: stagger(150),
            easing: "outExpo",
            duration: 800,
          });

          Object.entries(progressBarsRef.current).forEach(([key, element]) => {
            if (element) {
              const targetWidth =
                element.getAttribute("data-target-width") || "0%";
              animateProgressBar(element, targetWidth);
            }
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
      className="py-20 px-6 md:px-12 max-w-7xl mx-auto min-h-screen"
    >
      <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
        {t("languages.title")}
      </h2>

      <div className="max-w-2xl mx-auto space-y-6">
        {languages.map((lang, index) => {
          const targetWidth = getProgressWidth(lang.level[language]);
          return (
            <div
              key={index}
              id={`language-item-${index}`}
              className={`language-item opacity-0 cursor-pointer p-4 rounded-lg transition-transform duration-300 hover:bg-gray-50 dark:hover:bg-gray-800/50`}
              onClick={() => handleLanguageClick(index, targetWidth)}
            >
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
                  ref={(el) =>
                    (progressBarsRef.current[`progress-${index}`] = el)
                  }
                  data-target-width={targetWidth}
                  className="h-full bg-[#64ffda] rounded-full"
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Languages;
