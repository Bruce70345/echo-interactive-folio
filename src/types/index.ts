export type Language = "en" | "zh" | "it" | "mi";

export interface LanguageString {
  [key: string]: string;
}

export interface LanguageText {
  en: string;
  zh: string;
  it: string;
  mi: string;
}

export interface Project {
  id: number;
  name: string;
  description: LanguageText;
  technologies: string[];
  category: "AI" | "Web" | "Robotics";
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
