export type Language = "en" | "zh" | "it" | "mi";

export interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
  setLanguage: (lang: Language) => void;
}

export interface TranslationKey {
  key: string;
  params?: Record<string, string | number>;
}

// 高亮關鍵字類型
export interface HighlightKeyword {
  text: string;
  language: Language;
}

// 技能分類類型
export interface SkillCategory {
  key: string;
  translationKey: string;
}

// 語言等級類型
export interface LanguageLevel {
  level: string;
  width: string;
}

export interface LanguageString {
  [key: string]: string;
}

export interface LanguageText {
  en: string;
  zh?: string;
  it?: string;
  mi?: string;
}

export interface Project {
  id: number;
  name: string;
  description: LanguageText;
  technologies: string[];
  category: string;
  image: string;
  github: string;
  demo?: string;
  lessons?: LanguageText;
}

export interface Skill {
  name: string;
  category: string;
  level: number;
}

export interface Experience {
  company: LanguageText;
  period: LanguageText;
  role: LanguageText;
  description: LanguageText;
  technologies: string[];
}

export interface Education {
  school: LanguageText;
  degree: LanguageText;
  period: LanguageText;
  gpa: string;
  thesis?: LanguageText;
}

export interface LanguageItem {
  name: LanguageText;
  level: LanguageText;
  code: string;
  flag: string;
}
