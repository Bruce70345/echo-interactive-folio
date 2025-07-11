import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

const languageOptions = [
  { value: "en", label: "English", flag: "🇬🇧" },
  { value: "de", label: "German", flag: "🇩🇪" },
  { value: "pt", label: "Portuguese", flag: "🇵🇹" },
  { value: "fr", label: "French", flag: "🇫🇷" },
];

const LanguageSwitcher: React.FC = () => {
  const { language, changeLanguage } = useLanguage();
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    // 確保語言在切換前有效
    if (lang === "en" || lang === "zh" || lang === "it" || lang === "mi") {
      changeLanguage(lang);
      i18n.changeLanguage(lang); // 直接調用 i18n 的 changeLanguage 方法確保立即生效
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          // variant="ghost"
          // size="icon"
          className="rounded-full bg-transparent dark:bg-transparent border-none"
        >
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Switch Language</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {/* focus:text-foreground-transparent */}
        {languageOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => handleLanguageChange(option.value)}
            className={`cursor-pointer ${
              language === option.value
                ? "bg-gray-100 dark:bg-gray-800 font-medium"
                : ""
            }`}
          >
            <span className="mr-2">{option.flag}</span>
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
