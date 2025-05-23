import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { skills } from "@/data/profile";
import { Code, Database, Globe, CircleCheck, Bot } from "lucide-react";
// import anime from "@/lib/anime";
import { animate, utils, stagger } from "animejs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from "react-i18next";

// 導入 react-icons
import {
  SiPython,
  SiJavascript,
  SiCplusplus,
  SiC,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiTensorflow,
  SiHibernate,
  SiPostman,
} from "react-icons/si";
import {
  FaDatabase,
  FaGlobe,
  FaRobot,
  FaCode,
  FaCheckCircle,
  FaJava,
  FaDesktop,
} from "react-icons/fa";

const Skills: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [category, setCategory] = useState("All");
  const [filteredSkills, setFilteredSkills] = useState(skills);
  const contentRef = useRef<HTMLDivElement>(null);
  const [pressTimer, setPressTimer] = useState<NodeJS.Timeout | null>(null);
  const [pressedCardId, setPressedCardId] = useState<string | null>(null);

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
          animate(".skill-card", {
            opacity: [0, 1],
            translateY: [20, 0],
            delay: stagger(100),
            ease: "outExpo",
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

  // 處理卡片點擊事件
  const handleCardClick = (skillName: string) => {
    const cardElement = document.querySelector(
      `.skill-card-${skillName.replace(/\s+/g, "-").toLowerCase()}`
    );

    if (cardElement) {
      animate(cardElement, {
        scale: [1, 2, 1],
        duration: 300,
        easing: "easeInOutSine",
      });
    }
  };

  // 處理卡片長按開始事件
  const handleCardPressStart = (skillName: string) => {
    if (pressTimer) {
      clearTimeout(pressTimer);
    }

    const timer = setTimeout(() => {
      setPressedCardId(skillName);
      const cardElement = document.querySelector(
        `.skill-card-${skillName.replace(/\s+/g, "-").toLowerCase()}`
      );

      if (cardElement) {
        animate(cardElement, {
          boxShadow: [
            {
              to: stagger([1, 0.25], {
                modifier: (v) => `0 0 ${v * 30}px ${v * 20}px currentColor`,
                from: "center",
              }),
            },
            { to: 0 },
          ],
          // "0 0 0 rgba(100, 255, 218, 0)",
          // "0 0 20px rgba(100, 255, 218, 0.5)",
          // "0 0 30px rgba(100, 255, 218, 0.3)",
          // "0 0 0 rgba(100, 255, 218, 0)",
          duration: 1000,
          loop: false,
          ease: "easeInOutSine",
        });
      }
    }, 300);

    setPressTimer(timer);
  };

  // 處理卡片長按結束事件
  const handleCardPressEnd = (skillName: string) => {
    if (pressTimer) {
      clearTimeout(pressTimer);
      setPressTimer(null);
    }

    if (pressedCardId === skillName) {
      setPressedCardId(null);
      const cardElement = document.querySelector(
        `.skill-card-${skillName.replace(/\s+/g, "-").toLowerCase()}`
      );

      if (cardElement) {
        animate(cardElement, {
          boxShadow: [
            {
              to: stagger([1, 0.25], {
                modifier: (v) => `0 0 ${v * 30}px ${v * 20}px currentColor`,
                from: "center",
              }),
            },
            { to: 0 },
          ],
          // boxShadow: "0 0 0 rgba(100, 255, 218, 0)",
          duration: 300,
          ease: "inOutSine",
        });
      }
    }
  };

  // 獲取技能對應的專業圖示
  const getSkillIcon = (skillName: string) => {
    const iconProps = {
      className: "h-5 w-5 mr-2 text-gray-500 dark:text-gray-400",
    };

    switch (skillName.toLowerCase()) {
      case "python":
        return <SiPython {...iconProps} />;
      case "java":
        return <FaJava {...iconProps} />;
      case "c":
        return <SiC {...iconProps} />;
      case "c++":
        return <SiCplusplus {...iconProps} />;
      case "spring framework":
        return <SiSpringboot {...iconProps} />;
      case "hibernate":
        return <SiHibernate {...iconProps} />;
      case "mysql":
        return <SiMysql {...iconProps} />;
      case "postgresql":
        return <SiPostgresql {...iconProps} />;
      case "git":
        return <SiGit {...iconProps} />;
      case "docker":
        return <SiDocker {...iconProps} />;
      case "tensorflow":
        return <SiTensorflow {...iconProps} />;
      case "matlab":
        return <FaDesktop {...iconProps} />;
      case "postman":
        return <SiPostman {...iconProps} />;
      default:
        return getIcon(
          skills.find((s) => s.name === skillName)?.category || ""
        );
    }
  };

  // 獲取類別圖示
  const getIcon = (category: string) => {
    const iconProps = {
      className: "h-5 w-5 mr-2 text-gray-500 dark:text-gray-400",
    };

    switch (category) {
      case "Programming":
        return <FaCode {...iconProps} />;
      case "AI / Machine Learning":
        return <FaRobot {...iconProps} />;
      case "Web & API":
        return <FaGlobe {...iconProps} />;
      case "Database":
        return <FaDatabase {...iconProps} />;
      case "Testing & Version Control":
        return <FaCheckCircle {...iconProps} />;
      case "Robotics & Vision":
        return <FaRobot {...iconProps} />;
      default:
        return null;
    }
  };

  const categories = [
    "All",
    "Programming",
    "AI / Machine Learning",
    "Web & API",
    "Database",
    "Testing & Version Control",
    "Robotics & Vision",
  ];

  const getCategoryTranslation = (category: string) => {
    switch (category) {
      case "All":
        return t("projects.categories.all");
      case "AI / Machine Learning":
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
      className="py-16 px-6 md:px-12 max-w-7xl mx-auto h-screen flex flex-col min-h-screen"
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        {t("skills.title")}
      </h2>

      <Tabs
        defaultValue="All"
        className="flex flex-col flex-grow overflow-hidden"
      >
        <TabsList className="mb-4 flex flex-wrap w-full justify-start">
          {categories.map((cat) => (
            <TabsTrigger
              key={cat}
              value={cat}
              onClick={() => setCategory(cat)}
              className="mb-2 text-sm md:text-sm"
            >
              {getCategoryTranslation(cat)}
            </TabsTrigger>
          ))}
        </TabsList>

        <div
          ref={contentRef}
          className="overflow-y-auto flex-grow pr-1 custom-scrollbar"
        >
          {categories.map((cat) => (
            <TabsContent key={cat} value={cat} className="mt-0 h-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-4 justify-items-center">
                {filteredSkills.map((skill) => (
                  <Card
                    key={skill.name}
                    className={`skill-card skill-card-${skill.name
                      .replace(/\s+/g, "-")
                      .toLowerCase()} opacity-0 hover:shadow-lg transition-all duration-300 border-[1px] border-gray-200 dark:border-gray-800 cursor-pointer w-[90%] mt-2 noselect`}
                    onClick={() => handleCardClick(skill.name)}
                    onMouseDown={() => handleCardPressStart(skill.name)}
                    onMouseUp={() => handleCardPressEnd(skill.name)}
                    onMouseLeave={() => handleCardPressEnd(skill.name)}
                    onTouchStart={() => handleCardPressStart(skill.name)}
                    onTouchEnd={() => handleCardPressEnd(skill.name)}
                  >
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                      <CardTitle className="text-sm font-medium flex items-center text-[#64ffda]">
                        {getSkillIcon(skill.name)}
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
        </div>
      </Tabs>
    </section>
  );
};

export default Skills;
