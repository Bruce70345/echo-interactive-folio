import { Project, Skill, Experience, Education, LanguageItem } from "../types";
import { profileData } from "./profileData";

export const projects: Project[] = [
  {
    id: 1,
    name: "Customer Behavior Analytics Dashboard",
    description: {
      en: "A real-time dashboard analyzing customer behavior across digital platforms to improve targeting and ROI",
    },
    technologies: ["Google Analytics", "Tableau", "Python", "SQL"],
    category: "Marketing Analytics",
    image: "/placeholder.svg",
    github: "https://github.com/yourname/customer-analytics",
    lessons: {
      en: "Enhanced data visualization skills and developed insights-driven marketing strategies based on user behavior data",
    },
  },
  {
    id: 2,
    name: "Email Campaign Automation",
    description: {
      en: "An automated email campaign system using segmentation and A/B testing to increase conversion rates",
    },
    technologies: ["Mailchimp", "Zapier", "HTML", "CSS"],
    category: "Digital Marketing",
    image: "/placeholder.svg",
    github: "https://github.com/yourname/email-campaign",
    lessons: {
      en: "Learned effective content targeting, campaign optimization, and performance tracking through marketing automation tools",
    },
  },
  {
    id: 3,
    name: "SEO Optimization Toolkit",
    description: {
      en: "A toolkit designed to audit websites, identify SEO issues, and provide actionable improvement suggestions",
    },
    technologies: [
      "JavaScript",
      "Chrome DevTools",
      "Google Search Console",
      "Ahrefs API",
    ],
    category: "SEO",
    image: "/placeholder.svg",
    github: "https://github.com/yourname/seo-toolkit",
    lessons: {
      en: "Deepened understanding of search engine algorithms and technical SEO practices to boost organic traffic",
    },
  },
];

export const skills: Skill[] = [
  { name: "SEO", category: "Digital Marketing", level: 5 },
  { name: "Google Analytics", category: "Analytics", level: 4 },
  { name: "Email Marketing", category: "Digital Marketing", level: 4 },
  { name: "Content Strategy", category: "Marketing", level: 4 },
  { name: "A/B Testing", category: "Analytics", level: 4 },
  { name: "Social Media Advertising", category: "Digital Marketing", level: 4 },
  { name: "Copywriting", category: "Creative", level: 4 },
  { name: "CRM Tools (e.g. HubSpot)", category: "Marketing Tools", level: 3 },
  { name: "Tableau", category: "Data Visualization", level: 3 },
  { name: "Google Tag Manager", category: "Analytics", level: 3 },
];

export const experiences: Experience[] = [
  {
    company: { en: "GrowMedia Agency" },
    period: { en: "2023-03 - Present" },
    role: { en: "Digital Marketing Specialist" },
    description: {
      en: "Led multi-channel campaigns across social media, email, and Google Ads. Increased client lead generation by 34% through optimized content strategies and A/B testing.",
    },
    technologies: [
      "Google Ads",
      "Meta Ads",
      "Mailchimp",
      "Canva",
      "Google Analytics",
    ],
  },
  {
    company: { en: "BrightSpark E-commerce" },
    period: { en: "2021-06 - 2022-12" },
    role: { en: "Marketing Analyst" },
    description: {
      en: "Monitored digital KPIs, tracked customer journeys, and created marketing reports to support data-informed decisions. Spearheaded a dashboard project that reduced reporting time by 50%.",
    },
    technologies: ["Tableau", "SQL", "Python", "Google Analytics", "Shopify"],
  },
];

export const education: Education[] = [
  {
    school: {
      en: "University of Leeds",
    },
    degree: {
      en: "Master of Science in Marketing Analytics",
    },
    period: {
      en: "Expected: 2025-06",
    },
    gpa: "3.9/4.0",
    thesis: {
      en: "Analyzed multi-platform user data to predict campaign performance using machine learning and behavioral segmentation",
    },
  },
  {
    school: {
      en: "University of Saarland",
    },
    degree: {
      en: "Bachelor of Business Administration in Marketing",
    },
    period: {
      en: "Graduated: 2023-05",
    },
    gpa: "3.9/4.0",
    thesis: {
      en: "Developed a social media growth strategy for local businesses using influencer collaboration and targeted advertising",
    },
  },
];

export const languages: LanguageItem[] = [
  {
    name: {
      en: "German",
      zh: "德文",
      it: "Tedesco",
      mi: "Te Reo",
    },
    level: {
      en: "Native",
      zh: "母語",
      it: "Madrelingua",
      mi: "Reo Taketake",
    },
    code: "de",
    flag: "🇩🇪",
  },
  {
    name: {
      en: "English",
      zh: "英文",
      it: "Inglese",
      mi: "Ingarihi",
    },
    level: {
      en: "Native",
      zh: "母語",
      it: "Madrelingua",
      mi: "Reo Taketake",
    },
    code: "en",
    flag: "🇬🇧",
  },
  {
    name: {
      en: "Portuguese",
      zh: "葡萄牙文",
      it: "Portoghese",
      mi: "Hainamana",
    },
    level: {
      en: "Intermediate (B1)",
      zh: "中級 (B1)",
      it: "Intermedio (B1)",
      mi: "Takawaenga (B1)",
    },
    code: "pt",
    flag: "🇵🇹",
  },
];

export const summary = {
  short: {
    en: "Marketing specialist with expertise in digital campaigns, data analytics, and consumer psychology. Skilled in cross-platform strategies that drive engagement and growth.",
  },
  long: {
    en: "Results-driven marketing professional with a strong foundation in marketing analytics, branding, and campaign optimization. Proven ability to translate consumer insights into actionable strategies. Adept at leveraging data and creativity to drive measurable results across digital and traditional channels.",
  },
};
