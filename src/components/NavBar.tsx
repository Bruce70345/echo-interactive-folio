import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavBarProps {
  sections: {
    id: string;
    title: string;
  }[];
}

const NavBar: React.FC<NavBarProps> = ({ sections }) => {
  const { theme, toggleTheme } = useTheme();
  const { language } = useLanguage();
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);

      // Determine which section is currently in view
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      const currentSection = sectionElements.find((section) => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full px-6 md:px-12 py-4 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 dark:bg-[#273f4a]/90 shadow-md backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div
          className="text-xl md:text-2xl font-bold dark:text-white noselect"
          onClick={() => scrollToSection("hero")}
        >
          Brand x People
        </div>

        <div className="flex items-center space-x-1 md:space-x-4">
          <div className="hidden lg:flex space-x-1 lg:space-x-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "px-2 py-1 rounded-md transition-colors",
                  activeSection === section.id
                    ? "text-[#eba427] dark:text-[#eba427]"
                    : "text-gray-600 dark:text-gray-300 hover:text-[#eba427] dark:hover:text-[#eba427]"
                )}
              >
                {section.title}
              </button>
            ))}
          </div>

          <LanguageSwitcher />

          {/* <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-[#eba427] dark:hover:text-[#eba427]"
            aria-label={
              theme === "light"
                ? t("theme.switchToDark")
                : t("theme.switchToLight")
            }
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
