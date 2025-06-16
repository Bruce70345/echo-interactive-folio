import React, { useEffect, useRef, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
// import anime from "@/lib/anime";
import { animate, utils, stagger, createTimeline } from "animejs";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import SpeechBubble from "@/components/ui/SpeechBubble";
import { profileData } from "@/data/profileData";

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<boolean>(false);
  const [showGreeting, setShowGreeting] = useState(false);

  // 分離名字和姓氏為兩個變數
  const firstName = "XXXOOO";
  const lastName = "FFFXXXX";

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
    }, 20000);

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

  const handleAvatarClick = () => {
    setShowGreeting(true);
  };

  return (
    <div
      id="hero"
      ref={containerRef}
      className="flex flex-col justify-center items-start px-6 md:px-12 max-w-7xl mx-auto min-h-screen"
    >
      <div className="my-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 flex flex-wrap">
          <span className="hero-firstname mr-4">{firstNameLetters}</span>
          <span className="hero-lastname">{lastNameLetters}</span>
          <span className="text-[#eba427] dark:text-[#eba427] w-full mt-2">
            — {t("hero.title")}
          </span>
        </h1>
        <div className="flex flex-row w-full justify-end">
          <div className="w-[50%] md:w-[25%] self-end">
            <div className="relative lg:static">
              <SpeechBubble
                className="lg:hidden"
                show={showGreeting}
                onHide={() => setShowGreeting(false)}
              />
              <div
                className="aspect-square rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center lg:absolute lg:top-[30%] lg:right-[20%] lg:w-[20%]"
                onClick={handleAvatarClick}
              >
                <img src="/Square-FakeAvatar.png" alt="Avatar" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
        <p className="hero-subtitle text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 mt-2">
          {t("hero.location")} ·{" "}
          <a
            href="mailto:FFFXXXXXXXOOO@gmail.com"
            className="hover:text-[#eba427] dark:hover:text-[#eba427] transition-colors"
          >
            FFFXXXXXXXOOO@gmail.com
          </a>
        </p>

        <p className="hero-tagline text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8 max-w-2xl">
          {t("hero.tagline")}
        </p>

        <div className="hero-buttons flex space-x-4">
          <Button
            variant="outline"
            className="group transition-all border-[#eba427] text-[#eba427] hover:bg-[#eba427]/10"
            asChild
          >
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              {t("hero.buttons.linkedin")}
            </a>
          </Button>

          <Button
            variant="outline"
            className="group transition-all border-[#eba427] text-[#eba427] hover:bg-[#eba427]/10"
            asChild
          >
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              {t("hero.buttons.github")}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
