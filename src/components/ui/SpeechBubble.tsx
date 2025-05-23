import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

interface SpeechBubbleProps {
  show: boolean;
  onHide: () => void;
  className?: string;
}

const SpeechBubble: React.FC<SpeechBubbleProps> = ({ show, onHide }) => {
  const { language } = useLanguage();

  const greetings = {
    en: "Hello",
    zh: "你好",
    it: "Ciao",
    mi: "Kia ora",
  };

  React.useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onHide();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [show, onHide]);

  if (!show) return null;

  return (
    <div
      className={cn(
        "absolute lg:left-[-120px] lg:top-[40%] -left-32 top-0 md:hidden",
        "bg-[#64ffda]/10 dark:bg-[#64ffda]/5 border border-[#64ffda]/20",
        "p-3 rounded-lg shadow-lg backdrop-blur-sm",
        "transform transition-all duration-300 ease-in-out",
        "animate-in fade-in slide-in-from-bottom-4",
        "font-mono text-sm text-[#64ffda]",
        "after:content-[''] after:absolute after:top-[50%] after:right-[-8px]",
        "after:border-t-[8px] after:border-t-transparent",
        "after:border-l-[8px] after:border-l-[#64ffda]/20",
        "after:border-b-[8px] after:border-b-transparent"
      )}
    >
      <div className="flex space-x-2">
        <span className="typing-cursor">{">"}</span>
        <span className="typing-text">{greetings[language]}</span>
      </div>
    </div>
  );
};

export default SpeechBubble;
