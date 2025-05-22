
import { Project, Skill, Experience, Education, Language as LanguageType } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    name: "AI Image Recognition",
    description: {
      en: "Deep learning model for image classification using TensorFlow and Keras",
      zh: "使用 TensorFlow 和 Keras 的深度學習圖像分類模型"
    },
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
    category: "AI",
    image: "/placeholder.svg",
    github: "https://github.com/yourname/ai-image-recognition",
    lessons: {
      en: "Learned optimization techniques for neural networks and data augmentation strategies",
      zh: "學習了神經網絡優化技術和數據增強策略"
    }
  },
  {
    id: 2,
    name: "Robotics Control System",
    description: {
      en: "Control system for robotic arm with real-time trajectory planning",
      zh: "機械臂控制系統，具有實時軌跡規劃功能"
    },
    technologies: ["C++", "ROS", "Python", "MATLAB"],
    category: "Robotics",
    image: "/placeholder.svg",
    github: "https://github.com/yourname/robotics-control",
    lessons: {
      en: "Implemented inverse kinematics algorithms and optimized for real-time performance",
      zh: "實施了逆運動學算法並針對實時性能進行了優化"
    }
  },
  {
    id: 3,
    name: "Personal Dashboard",
    description: {
      en: "Web dashboard for personal productivity with customizable widgets",
      zh: "具有可自定義小工具的個人生產力 Web 儀表板"
    },
    technologies: ["React", "TypeScript", "TailwindCSS", "Firebase"],
    category: "Web",
    image: "/placeholder.svg",
    github: "https://github.com/yourname/personal-dashboard",
    demo: "https://dashboard-demo.example.com",
    lessons: {
      en: "Explored reactive state management and component composition patterns",
      zh: "探索了響應式狀態管理和組件組合模式"
    }
  },
  {
    id: 4,
    name: "Computer Vision Library",
    description: {
      en: "C++ library for common CV operations with Python bindings",
      zh: "具有 Python 綁定的通用 CV 操作的 C++ 庫"
    },
    technologies: ["C++", "Python", "OpenCV", "CMake"],
    category: "Robotics",
    image: "/placeholder.svg",
    github: "https://github.com/yourname/cv-library",
    lessons: {
      en: "Focused on cross-platform compatibility and optimized performance",
      zh: "專注於跨平台兼容性和優化性能"
    }
  }
];

export const skills: Skill[] = [
  { name: "Python", category: "Programming", level: 5 },
  { name: "TensorFlow", category: "AI/Machine Learning", level: 4 },
  { name: "PyTorch", category: "AI/Machine Learning", level: 4 },
  { name: "Computer Vision", category: "Robotics & Vision", level: 4 },
  { name: "Machine Learning", category: "AI/Machine Learning", level: 4 },
  { name: "C++", category: "Programming", level: 3 },
  { name: "ROS", category: "Robotics & Vision", level: 3 },
  { name: "React", category: "Web & API", level: 4 },
  { name: "TypeScript", category: "Programming", level: 3 },
  { name: "Node.js", category: "Web & API", level: 3 },
  { name: "PostgreSQL", category: "Database", level: 3 },
  { name: "MongoDB", category: "Database", level: 3 },
  { name: "Git", category: "Testing & Version Control", level: 4 },
  { name: "Docker", category: "Testing & Version Control", level: 3 },
  { name: "REST API", category: "Web & API", level: 4 }
];

export const experiences: Experience[] = [
  {
    company: { en: "Coding Giants", zh: "Coding Giants" },
    period: { en: "2024 - Present", zh: "2024 - 現在" },
    role: { en: "Senior Software Engineer", zh: "資深軟體工程師" },
    description: {
      en: "Leading development team for AI-driven solutions. Architected and implemented computer vision algorithms for real-time analysis.",
      zh: "領導 AI 驅動解決方案的開發團隊。設計並實施了用於實時分析的計算機視覺算法。"
    },
    technologies: ["Python", "TensorFlow", "React", "AWS"]
  },
  {
    company: { en: "T&C Systems Group", zh: "T&C Systems Group" },
    period: { en: "2022 - 2023", zh: "2022 - 2023" },
    role: { en: "Software Developer", zh: "軟體開發工程師" },
    description: {
      en: "Developed embedded systems for robotics applications. Implemented motion control algorithms and integrated sensor systems.",
      zh: "開發用於機器人應用的嵌入式系統。實施運動控制算法並整合了傳感器系統。"
    },
    technologies: ["C++", "ROS", "Python", "MATLAB"]
  }
];

export const education: Education[] = [
  {
    school: { en: "National Taiwan University of Science and Technology", zh: "國立臺灣科技大學" },
    degree: { en: "Master's in Computer Science", zh: "計算機科學碩士" },
    period: { en: "2020 - 2022", zh: "2020 - 2022" },
    gpa: "3.92/4.0",
    thesis: {
      en: "Advanced Computer Vision Techniques for Robotic Manipulation",
      zh: "用於機器人操作的先進計算機視覺技術"
    }
  },
  {
    school: { en: "University of Salerno", zh: "薩勒諾大學" },
    degree: { en: "Bachelor's in Computer Engineering", zh: "計算機工程學士" },
    period: { en: "2016 - 2020", zh: "2016 - 2020" },
    gpa: "3.85/4.0",
    thesis: {
      en: "Machine Learning Approaches to Natural Language Processing",
      zh: "自然語言處理的機器學習方法"
    }
  }
];

export const languages: LanguageType[] = [
  {
    name: { en: "Italian", zh: "義大利文" },
    level: { en: "Native", zh: "母語" },
    code: "it",
    flag: "🇮🇹"
  },
  {
    name: { en: "English", zh: "英文" },
    level: { en: "Native", zh: "母語" },
    code: "en",
    flag: "🇬🇧"
  },
  {
    name: { en: "Chinese", zh: "中文" },
    level: { en: "Intermediate", zh: "中級" },
    code: "zh",
    flag: "🇨🇳"
  }
];

export const summary = {
  short: {
    en: "I'm a Software Engineer specializing in AI, Robotics, and Web Development. With expertise in Python, TensorFlow, and React, I build intelligent systems that solve real-world problems.",
    zh: "我是一名專注於人工智能、機器人和網頁開發的軟體工程師。憑藉 Python、TensorFlow 和 React 的專業知識，我構建解決現實世界問題的智能系統。"
  },
  long: {
    en: "With over 5 years of experience in software development, I've worked on a diverse range of projects from computer vision systems to web applications. My passion lies in creating intuitive interfaces for complex AI systems, making technology more accessible to users. I'm always exploring new technologies and methodologies to enhance my skills and deliver better solutions.",
    zh: "憑藉超過 5 年的軟體開發經驗，我參與了從計算機視覺系統到網頁應用程序的各種項目。我的熱情在於為複雜的人工智能系統創建直觀的界面，使技術更易於用戶使用。我一直在探索新技術和方法來提升我的技能並提供更好的解決方案。"
  }
};
