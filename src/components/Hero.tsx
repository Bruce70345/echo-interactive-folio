import React, { useEffect, useRef } from "react";
import { Linkedin, Github } from "lucide-react";
// import anime from "@/lib/anime";
import { animate, utils, stagger, createTimeline } from "animejs";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<boolean>(false);

  // 分離名字和姓氏為兩個變數
  const firstName = "Raffaele";
  const lastName = "Chiarolanza";

  const heroAnimation = () => {
    if (containerRef.current) {
      // 移除目標元素的所有動畫
      utils.remove([
        ".hero-firstname .letter",
        ".hero-lastname .letter",
        ".hero-subtitle",
        ".hero-tagline",
        ".hero-buttons",
      ]);

      // 設定目標元素的初始樣式
      utils.set(
        [
          ".hero-firstname .letter",
          ".hero-lastname .letter",
          ".hero-subtitle",
          ".hero-tagline",
          ".hero-buttons",
        ],
        {
          opacity: 0,
          translateY: 60,
        }
      );

      // const timeline = createTimeline({
      //   easing: "easeOutExpo",
      // });
      const timeline = createTimeline({
        defaults: {
          ease: "outExpo",
          // duration: 2000,
        },
      });

      timeline
        .add([".hero-firstname .letter", ".hero-lastname .letter"], {
          opacity: [0, 1],
          translateY: [60, 0],
          translateZ: 0,
          delay: (el, i) => 500 + 80 * i,
        })
        .add(".hero-subtitle", {
          opacity: [0, 1],
          translateY: [60, 0],
          duration: 1200,
          offset: "-=1200",
        })
        .add(".hero-tagline", {
          opacity: [0, 1],
          translateY: [60, 0],
          duration: 1200,
          offset: "-=1000",
        })
        .add(".hero-buttons", {
          opacity: [0, 1],
          translateY: [60, 0],
          duration: 1200,
          offset: "-=1000",
        });

      animationRef.current = true;
    }
  };

  // 初始化動畫
  useEffect(() => {
    heroAnimation();

    const intervalId = setInterval(() => {
      heroAnimation();
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  // 語言變更時重新執行動畫
  useEffect(() => {
    if (animationRef.current) {
      heroAnimation();
    }
  }, [language]);

  // 將名字和姓氏分別拆分為單個字母，以便進行動畫
  const firstNameLetters = firstName.split("").map((letter, index) => (
    <span key={`first-${index}`} className="letter inline-block">
      {letter}
    </span>
  ));

  const lastNameLetters = lastName.split("").map((letter, index) => (
    <span key={`last-${index}`} className="letter inline-block">
      {letter}
    </span>
  ));

  return (
    <div
      id="hero"
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center items-start px-6 md:px-12 max-w-7xl mx-auto"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 flex flex-wrap">
        <span className="hero-firstname mr-4">{firstNameLetters}</span>
        <span className="hero-lastname">{lastNameLetters}</span>
        <span className="text-[#64ffda] dark:text-[#64ffda] w-full mt-2">
          — {t("hero.title")}
        </span>
      </h1>
      <div className="w-[50%] md:w-[25%] self-end">
        <div className="aspect-square rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center lg:absolute lg:top-[30%] lg:right-[20%] lg:w-[20%]">
          {/* Placeholder for avatar - replace with actual image */}
          {/* <span className="text-4xl">RC</span> */}
          <img src="src/data/Square-FakeAvatar.png" alt="Avatar" />
        </div>
      </div>
      <p className="hero-subtitle text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 mt-2">
        {t("hero.location")} ·{" "}
        <a
          href="mailto:chiarolanzaraffaele@gmail.com"
          className="hover:text-[#64ffda] dark:hover:text-[#64ffda] transition-colors"
        >
          chiarolanzaraffaele@gmail.com
        </a>
      </p>

      <p className="hero-tagline text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8 max-w-2xl">
        {t("hero.tagline")}
      </p>

      <div className="hero-buttons flex space-x-4">
        <Button
          variant="outline"
          className="group transition-all border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10"
          asChild
        >
          <a
            href="https://www.linkedin.com/in/raffaele-chiarolanza/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            {t("hero.buttons.linkedin")}
          </a>
        </Button>

        <Button
          variant="outline"
          className="group transition-all border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10"
          asChild
        >
          <a
            href="https://github.com/raffaele-chiarolanza"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            {t("hero.buttons.github")}
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
