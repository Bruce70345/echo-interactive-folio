import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { summary } from "@/data/profile";
// import anime from "@/lib/anime";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { animate, utils, stagger } from "animejs";

const About: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  // 高亮關鍵字的函數
  const highlightKeywords = (text: string) => {
    // 根據不同語言設置需要高亮的關鍵詞
    const keywords: Record<string, string[]> = {
      en: [
        "Detail-oriented",
        "organized",
        "meticulous",
        "AI",
        "Robotics",
        "Web Development",
        "fast pace",
        "under tight deadlines",
        "Enthusiastic team player",
      ],
      zh: [
        "細心",
        "有條理",
        "一絲不苟",
        "人工智能",
        "機器人",
        "網頁開發",
        "快節奏",
        "在緊迫的期限內交付",
        "熱情的團隊合作者",
      ],
      it: [
        "orientato ai dettagli",
        "organizzato",
        "meticoloso",
        "IA",
        "Robotica",
        "Sviluppo Web",
        "ritmo sostenuto",
        "rispettando scadenze strette",
        "Entusiasta giocatore di squadra",
      ],
      mi: [
        "aro ana ki nga taipitopito",
        "whakaritea",
        "tika",
        "AI",
        "Robotics",
        "Whakawhanake Tukutuku",
        "kato tere",
        "wa mutunga maukati",
        "kaitakaro roopu hihiko",
      ],
    };

    // 獲取當前語言的關鍵詞
    const currentKeywords = keywords[language] || [];

    // 替換關鍵詞為帶有黃色樣式的 span
    let highlightedText = text;

    currentKeywords.forEach((keyword) => {
      // 使用正則表達式做不區分大小寫的替換
      const regex = new RegExp(`(${keyword})`, "gi");
      highlightedText = highlightedText.replace(
        regex,
        '<span class="text-[#ffda64]">$1</span>'
      );
    });

    return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;
  };

  useEffect(() => {
    const targetContent = document.querySelector(".about-content");
    const shapeElements = document.querySelectorAll(".shape");
  
    if (isInView) {
      // 進入視窗，觸發動畫
      animate(targetContent, {
        opacity: [0, 1],
        translateY: [20, 0],
        easing: "outExpo",
        duration: 1000,
      });
  
      animate(shapeElements, {
        x: () => utils.random(-100, 100),
        y: () => utils.random(-100, 100),
        rotate: () => utils.random(-180, 180),
        scale: () => utils.random(0.9, 1.05),
        duration: () => utils.random(500, 1000),
        ease: "outExpo",
        // loop: true,
      });
    } else {
      // 離開視窗時停止動畫
      if (targetContent) utils.remove(targetContent);
      shapeElements.forEach((el) => utils.remove(el));
    }
  }, [isInView]);
  

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isInView) {
      intervalId = setInterval(() => {
        animate(".shape", {
          x: () => utils.random(-100, 100),
          y: () => utils.random(-100, 100),
          rotate: () => utils.random(-180, 180),
          scale: () => utils.random(0.9, 1.05),
          duration: () => utils.random(500, 1000),
          ease: "outExpo",
        });
      }, 1300);
    }

    return () => clearInterval(intervalId);
  }, [isInView]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-6 md:px-12 max-w-7xl mx-auto min-h-screen flex flex-col justify-center"
    >
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        {t("about.title")}
      </h2>

      <div className="about-content opacity-0 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">
            {highlightKeywords(summary.short[language])}
          </p>

          <div
            className={cn(
              "overflow-hidden transition-all duration-500",
              expanded ? "max-h-96" : "max-h-0"
            )}
          >
            <p className="text-lg text-gray-700 dark:text-gray-200 mt-4">
              {highlightKeywords(summary.long[language])}
            </p>
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 flex items-center text-[#64ffda] hover:text-[#64ffda]/80 transition-colors"
          >
            {t("about.readMore")}
            <ChevronDown
              className={cn(
                "ml-1 h-5 w-5 transition-transform duration-300",
                expanded ? "rotate-180" : ""
              )}
            />
          </button>
        </div>
        {/* 
        circle fill // w-10 h-10 bg-[#ffa828]
        circle // w-10 h-10 rounded-full border-2 border-[#ffa828]
        square fill // w-10 h-10 bg-[#ffa828]
        square // w-10 h-10 border-2 border-[#ffa828]
        */}
        <div
          className={` sm:mt-0 sm:col-span-4 md:col-span-2 flex ${
            expanded
              ? "opacity-0 md:opacity-100 scale-95 md:scale-100 pointer-events-none md:pointer-events-auto justify-center"
              : "opacity-100 scale-100 justify-center"
          }`}
        >
          <div className="flex grid grid-cols-8 md:grid-cols-10 lg:grid-cols-12 items-center justify-start sm:justify-center flex-wrap gap-2 overflow-hidden">
            <div className="shape col-span-1 w-10 h-10 rounded-full border-2 border-[#64ffda]"></div>
            <div className="shape col-span-2 w-10 h-10 bg-[#ffda64]"></div>
            <div className="shape col-span-2 w-10 h-10 border-2 border-[#64ffda]"></div>
            <div className="shape col-span-2 w-10 h-10 rounded-full bg-[#ffda64]"></div>
            <div className="shape col-span-2 w-10 h-10 rounded-full border-2 border-[#64ffda]"></div>
            <div className="shape col-span-2 w-10 h-10 bg-[#ffda64]"></div>
            <div className="shape col-span-2 w-10 h-10 border-2 border-[#ffda64]"></div>
            <div className="shape col-span-2 w-10 h-10 rounded-full bg-[#64ffda]"></div>
            <div className="shape col-span-2 w-10 h-10 rounded-full bg-[#ffda64]"></div>
            <div className="shape col-span-2 w-10 h-10 bg-[#ffda64]"></div>
            <div className="shape col-span-2 w-10 h-10 border-2 border-[#64ffda]"></div>
            <div className="shape col-span-5 w-10 h-10 rounded-full border-2 border-[#64ffda]"></div>
            <div className="shape col-span-5 w-10 h-10 rounded-full border-2 border-[#ffda64]"></div>
            <div className="shape hidden lg:block col-span-5 w-10 h-10 rounded-full border-2 border-[#64ffda]"></div>
            <div className="shape hidden lg:block col-span-5 w-10 h-10 rounded-full border-2 border-[#ffda64]"></div>
            <div className="shape hidden lg:block col-span-3 w-10 h-10 bg-[#64ffda]"></div>
            <div className="shape hidden lg:block col-span-3 w-10 h-10 border-2 border-[#ffda64]"></div>
            <div className="shape hidden lg:block col-span-3 w-10 h-10 bg-[#64ffda]"></div>
            <div className="shape hidden lg:block col-span-3 w-10 h-10 border-2 border-[#ffda64]"></div>
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
