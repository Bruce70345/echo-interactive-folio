import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// 導入翻譯文件
import enTranslation from "./locales/en.json";
import zhTranslation from "./locales/zh.json";
import itTranslation from "./locales/it.json";
import miTranslation from "./locales/mi.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  zh: {
    translation: zhTranslation,
  },
  it: {
    translation: itTranslation,
  },
  mi: {
    translation: miTranslation,
  },
};

// 檢查和處理 localStorage 中的語言設置
const getSavedLanguage = () => {
  try {
    const savedLang = localStorage.getItem("language");
    if (savedLang && ["en", "zh", "it", "mi"].includes(savedLang)) {
      return savedLang;
    }
  } catch (error) {
    console.warn("Unable to access localStorage:", error);
  }
  return undefined;
};

i18n
  .use(LanguageDetector) // 使用瀏覽器語言檢測
  .use(initReactI18next) // 將 i18n 實例傳遞給 react-i18next
  .init({
    resources,
    fallbackLng: "en", // 如果用戶語言不受支持，則使用英語
    lng: getSavedLanguage(), // 嘗試使用保存的語言設置

    interpolation: {
      escapeValue: false, // 不會對 React 應用進行 HTML 轉義
    },

    detection: {
      // 語言檢測選項
      order: ["localStorage", "navigator"], // 檢測順序
      lookupLocalStorage: "language", // localStorage 中使用的 key
      caches: ["localStorage"], // 使用 localStorage 快取語言選擇
    },

    react: {
      useSuspense: true, // 使用 React Suspense
    },
  });

// 確保 HTML lang 屬性與當前語言一致
document.documentElement.lang = i18n.language;

// 監聽語言變更
i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
});

export default i18n;
