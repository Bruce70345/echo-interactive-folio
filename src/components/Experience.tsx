import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { experiences } from "@/data/profile";
import { CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";
// import anime from "@/lib/anime";
import { animate, utils, stagger } from "animejs";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { highlightKeywords } from "@/lib/highlight";

const Experience: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    const contentElement = contentRefs.current[index];
    const isOpen = openItems[index];

    if (contentElement) {
      const height = contentElement.scrollHeight;

      animate(contentElement, {
        height: isOpen ? [height, 0] : [0, height],
        opacity: isOpen ? [1, 0] : [0, 1],
        duration: 400,
        ease: "inOutSine",
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
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animate(".timeline-item", {
            opacity: [0, 1],
            translateY: [20, 0],
            delay: stagger(200),
            easing: "outExpo",
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
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 px-6 md:px-12 max-w-7xl mx-auto min-h-screen"
    >
      <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
        {t("experience.title")}
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 h-full w-px bg-gray-300 dark:bg-gray-700 transform -translate-x-1/2"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={cn(
                "timeline-item opacity-0 relative flex flex-col md:flex-row",
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-[#eba427] transform -translate-x-1/2 z-10"></div>

              <div
                className={cn(
                  "w-full md:w-1/2 p-6 md:pr-12 md:pl-0",
                  index % 2 === 0
                    ? "md:text-right md:pr-12 md:pl-0"
                    : "md:text-left md:pl-12 md:pr-0"
                )}
              >
                <div
                  className={cn(
                    "bg-white dark:bg-[#112240] rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300",
                    index % 2 === 0 ? "md:mr-6" : "md:ml-6"
                  )}
                >
                  <Collapsible
                    open={openItems[index]}
                    onOpenChange={() => toggleItem(index)}
                  >
                    <div className="flex flex-col mb-4">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-start">
                        {exp.company[language]}
                      </h3>

                      <div className="flex items-center text-gray-600 dark:text-gray-300 mt-1">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        <span>{exp.period[language]}</span>
                      </div>

                      <p className="text-[#eba427] mt-2 text-start">
                        {exp.role[language]}
                      </p>
                    </div>

                    <div
                      ref={(el) => (contentRefs.current[index] = el)}
                      className="overflow-hidden"
                    >
                      <div className="space-y-4">
                        <div
                          className="text-gray-700 dark:text-gray-200"
                          dangerouslySetInnerHTML={{
                            __html: highlightKeywords(
                              exp.description[language],
                              language
                            ),
                          }}
                        ></div>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <CollapsibleTrigger className="w-full mt-3 text-sm text-[#eba427] hover:text-[#eba427]/80">
                      {openItems[index]
                        ? t("experience.showLess")
                        : t("experience.showMore")}
                    </CollapsibleTrigger>
                  </Collapsible>
                </div>
              </div>

              {/* Empty space for timeline alignment */}
              <div className="hidden md:block w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
