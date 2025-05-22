import React, { createContext, useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export type LanguageType = "en" | "zh" | "it" | "mi";

interface LanguageContextType {
  language: LanguageType;
  changeLanguage: (lang: LanguageType) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { i18n } = useTranslation();

  // 獲取使用者的初始語言
  const getInitialLanguage = (): LanguageType => {
    // 首先檢查本地存儲中的語言設置
    const savedLanguage = localStorage.getItem("language") as LanguageType;
    if (savedLanguage && ["en", "zh", "it", "mi"].includes(savedLanguage)) {
      return savedLanguage;
    }

    // 如果沒有本地存儲的語言，檢查瀏覽器語言
    const browserLang = navigator.language.split("-")[0];

    // 檢查瀏覽器語言是否在我們支持的語言中
    if (browserLang === "zh") return "zh";
    if (browserLang === "it") return "it";
    if (browserLang === "mi") return "mi";

    // 默認使用英語
    return "en";
  };

  const [language, setLanguage] = useState<LanguageType>(getInitialLanguage);

  // 初始化時和語言更改時更新 i18n 實例和本地存儲
  useEffect(() => {
    const applyLanguage = async () => {
      await i18n.changeLanguage(language);
      localStorage.setItem("language", language);
      // 更新 HTML 的 lang 屬性以幫助屏幕閱讀器和搜索引擎
      document.documentElement.lang = language;
    };

    applyLanguage();
  }, [language, i18n]);

  const changeLanguage = (lang: LanguageType) => {
    if (["en", "zh", "it", "mi"].includes(lang)) {
      setLanguage(lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
