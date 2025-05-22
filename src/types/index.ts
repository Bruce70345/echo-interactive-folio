
export type Language = 'en' | 'zh';

export interface Project {
  id: number;
  name: string;
  description: {
    en: string;
    zh: string;
  };
  technologies: string[];
  category: 'AI' | 'Web' | 'Robotics' | 'All';
  image: string;
  github: string;
  demo?: string;
  lessons?: {
    en: string;
    zh: string;
  };
}

export interface Skill {
  name: string;
  category: 'AI/Machine Learning' | 'Robotics & Vision' | 'Programming' | 'Web & API' | 'Database' | 'Testing & Version Control';
  level: number; // 1-5
  icon?: string;
}

export interface Experience {
  company: {
    en: string;
    zh: string;
  };
  period: {
    en: string;
    zh: string;
  };
  role: {
    en: string;
    zh: string;
  };
  description: {
    en: string;
    zh: string;
  };
  technologies: string[];
}

export interface Education {
  school: {
    en: string;
    zh: string;
  };
  degree: {
    en: string;
    zh: string;
  };
  period: {
    en: string;
    zh: string;
  };
  gpa: string;
  thesis?: {
    en: string;
    zh: string;
  };
}

export interface Language {
  name: {
    en: string;
    zh: string;
  };
  level: {
    en: string;
    zh: string;
  };
  code: string;
  flag: string;
}
