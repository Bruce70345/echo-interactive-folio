import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { summary } from "@/data/profile";
import anime from "@/lib/anime";
import { cn } from "@/lib/utils";

const About: React.FC = () => {
  const { language } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  useEffect(() => {
    if (isInView) {
      anime({
        targets: ".about-content",
        opacity: [0, 1],
        translateY: [20, 0],
        easing: "easeOutExpo",
        duration: 1000,
        delay: 200,
      });
    }
  }, [isInView]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        {language === "en" ? "About Me" : "關於我"}
      </h2>

      <div className="about-content opacity-0 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-3">
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">
            {summary.short[language]}
          </p>

          <div
            className={cn(
              "overflow-hidden transition-all duration-500",
              expanded ? "max-h-96" : "max-h-0"
            )}
          >
            <p className="text-lg text-gray-700 dark:text-gray-200 mt-4">
              {summary.long[language]}
            </p>
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 flex items-center text-[#64ffda] hover:text-[#64ffda]/80 transition-colors"
          >
            {language === "en" ? "Read more" : "閱讀更多"}
            <ChevronDown
              className={cn(
                "ml-1 h-5 w-5 transition-transform duration-300",
                expanded ? "rotate-180" : ""
              )}
            />
          </button>
        </div>

        <div className="md:col-span-1">
          <div className="aspect-square rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
            {/* Placeholder for avatar - replace with actual image */}
            <span className="text-4xl">RC</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Custom hook to check if element is in viewport
const useInView = (ref: React.RefObject<HTMLElement>, threshold = 0.1) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, threshold]);

  return isIntersecting;
};

export default About;
