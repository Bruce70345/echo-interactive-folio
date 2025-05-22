import { Project, Skill, Experience, Education, LanguageItem } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    name: "Malware Detection Utilizing AI",
    description: {
      en: "A malware detection system that identifies malicious network packets through AI-based analysis",
      zh: "通過基於人工智能的分析識別惡意網絡數據包的惡意軟件檢測系統",
      it: "Un sistema di rilevamento malware che identifica pacchetti di rete dannosi tramite analisi basata su IA",
      mi: "He pūnaha kite kino kino e tautuhi ana i ngā pēke whatunga kino mā te tātaritanga ā-AI",
    },
    technologies: ["Python", "TensorFlow", "Scikit-learn", "Wireshark"],
    category: "AI",
    image: "/placeholder.svg",
    github: "https://github.com/yourname/malware-detection",
    lessons: {
      en: "Developed expertise in building AI-driven security solutions, enhancing accuracy through real-time data analysis and feature engineering",
      zh: "在構建人工智能驅動的安全解決方案方面積累了專業知識，通過實時數據分析和特徵工程提高準確性",
      it: "Ho sviluppato competenze nella creazione di soluzioni di sicurezza basate su IA, migliorando la precisione attraverso l'analisi dei dati in tempo reale e l'ingegneria delle caratteristiche",
      mi: "I whakawhanakehia te mātauranga i te hanga otinga haumarutanga ārahi-AI, te whakapai ake i te tika mā te tātaritanga raraunga wā-tūturu me te hangarau āhuahira",
    },
  },
  {
    id: 2,
    name: "Robotic Vision System",
    description: {
      en: "A robotic navigation system that enables TurtleBot 3 robots to map environments and avoid obstacles autonomously",
      zh: "一種機器人導航系統，使 TurtleBot 3 機器人能夠自主繪製環境地圖並避開障礙物",
      it: "Un sistema di navigazione robotica che consente ai robot TurtleBot 3 di mappare ambienti ed evitare ostacoli autonomamente",
      mi: "He pūnaha whakatere karetao e āhei ana ki ngā karetao TurtleBot 3 ki te mahere taiao me te karo tūraru aunoa",
    },
    technologies: ["ROS", "OpenCV", "Python", "TurtleBot 3"],
    category: "Robotics",
    image: "/placeholder.svg",
    github: "https://github.com/yourname/robotic-vision",
    lessons: {
      en: "Mastered computer vision techniques like obstacle detection and SLAM (Simultaneous Localization and Mapping), optimizing real-time robot navigation",
      zh: "掌握了計算機視覺技術，如障礙物檢測和 SLAM（同步定位與地圖構建），優化實時機器人導航",
      it: "Ho padroneggiato tecniche di visione artificiale come il rilevamento di ostacoli e SLAM (Localizzazione e Mappatura Simultanea), ottimizzando la navigazione robotica in tempo reale",
      mi: "Kua tohungia nga hangarau tirohanga rorohiko penei i te kite arai me te SLAM (Simultaneous Localization and Mapping), te whakapainga o te whakatere karetao wa-tuturu",
    },
  },
  {
    id: 3,
    name: "FinanceTracker",
    description: {
      en: "A financial management application that helps users monitor deposits, withdrawals, and generate customized financial reports",
      zh: "一款財務管理應用程序，幫助用戶監控存款、取款並生成定制的財務報告",
      it: "Un'applicazione di gestione finanziaria che aiuta gli utenti a monitorare depositi, prelievi e generare report finanziari personalizzati",
      mi: "He tono whakahaere pūtea e āwhina ana i ngā kaiwhakamahi ki te aroturuki pūtea, tangohanga, me te whakaputa pūrongo pūtea whakaritea",
    },
    technologies: ["Spring Boot", "Java", "MySQL", "JUnit 5"],
    category: "Web",
    image: "/placeholder.svg",
    github: "https://github.com/yourname/finance-tracker",
    lessons: {
      en: "Gained experience in designing scalable RESTful APIs and implementing robust unit testing for reliable application performance",
      zh: "獲得了設計可擴展 RESTful API 和實施可靠單元測試以確保應用程序可靠性能的經驗",
      it: "Ho acquisito esperienza nella progettazione di API RESTful scalabili e nell'implementazione di solidi test unitari per prestazioni affidabili delle applicazioni",
      mi: "I whiwhi wheako ki te hoahoa API RESTful whakarahinga me te whakatinana whakamatautau kotahi pakari mo nga mahi tono pono",
    },
  },
  {
    id: 4,
    name: "LEGO AI Transformation",
    description: {
      en: "An AI-driven technique to transform real-world subjects into LEGO brick representations",
      zh: "一種將現實世界主題轉換為樂高積木表示的人工智能驅動技術",
      it: "Una tecnica basata sull'IA per trasformare soggetti del mondo reale in rappresentazioni di mattoncini LEGO",
      mi: "He hangarau ārahi-AI ki te huri i ngā kaupapa ao tūturu ki ngā whakaahuatanga pereki LEGO",
    },
    technologies: [
      "Python",
      "TensorFlow",
      "Computer Vision",
      "Machine Learning",
    ],
    category: "AI",
    image: "/placeholder.svg",
    github: "https://github.com/yourname/lego-ai",
    lessons: {
      en: "Leveraged advanced machine learning models for creative digital transformation of physical objects",
      zh: "利用先進的機器學習模型對物理物體進行創造性數字轉換",
      it: "Ho utilizzato modelli avanzati di machine learning per la trasformazione digitale creativa di oggetti fisici",
      mi: "I whakamahia ngā tauira ako miihini ara mo te huringa matihiko auaha o nga taonga tinana",
    },
  },
];

export const skills: Skill[] = [
  { name: "Python", category: "Programming", level: 5 },
  { name: "TensorFlow", category: "AI / Machine Learning", level: 4 },
  { name: "MATLAB", category: "AI / Machine Learning", level: 4 },
  { name: "Reinforcement Learning", category: "AI / Machine Learning", level: 4 },
  { name: "Computer Vision", category: "Robotics & Vision", level: 4 },
  { name: "C", category: "Programming", level: 4 },
  { name: "Java", category: "Programming", level: 4 },
  { name: "Spring Framework", category: "Web & API", level: 4 },
  { name: "Hibernate", category: "Database", level: 3 },
  { name: "SQL", category: "Database", level: 4 },
  { name: "MySQL", category: "Database", level: 4 },
  { name: "PostgreSQL", category: "Database", level: 3 },
  { name: "Git", category: "Testing & Version Control", level: 4 },
  { name: "Docker", category: "Testing & Version Control", level: 3 },
  { name: "Postman", category: "Web & API", level: 3 },
];

export const experiences: Experience[] = [
  {
    company: {
      en: "Coding Giants",
      zh: "Coding Giants",
      it: "Coding Giants",
      mi: "Coding Giants",
    },
    period: {
      en: "2024-09 - Present",
      zh: "2024-09 - 現在",
      it: "2024-09 - Presente",
      mi: "2024-09 - Inaianei",
    },
    role: {
      en: "Coding Instructor",
      zh: "編程講師",
      it: "Istruttore di Programmazione",
      mi: "Kaiako Waehere",
    },
    description: {
      en: "Teach programming fundamentals through hands-on projects, including game development, mobile app creation, web design, and 3D graphics. Enhance communication, presentation, and teaching skills through interactive and dynamic virtual classes.",
      zh: "通過實踐項目教授編程基礎知識，包括遊戲開發、移動應用程序創建、網頁設計和 3D 圖形。通過互動和動態虛擬課程提高溝通、演示和教學技能。",
      it: "Insegno i fondamenti della programmazione attraverso progetti pratici, inclusi sviluppo di giochi, creazione di app mobili, web design e grafica 3D. Miglioro le capacità di comunicazione, presentazione e insegnamento attraverso lezioni virtuali interattive e dinamiche.",
      mi: "Whakaako i nga turanga papatono ma nga kaupapa ringa-on, tae atu ki te whakawhanake keemu, te hanga taupānga pūkoro, te hoahoa tukutuku, me te whakairoiro 3D. Whakapai ake i nga pukenga whakawhitiwhiti, whakaaturanga, me te whakaako ma nga karaehe mariko ngahau me te ngahau.",
    },
    technologies: [
      "C#",
      "Java",
      "Python",
      "Unity",
      "Android Studio",
      "Scratch",
      "Minecraft Education",
    ],
  },
  {
    company: {
      en: "T&C Systems Group",
      zh: "T&C Systems Group",
      it: "T&C Systems Group",
      mi: "T&C Systems Group",
    },
    period: {
      en: "2022-10 - 2023-02",
      zh: "2022-10 - 2023-02",
      it: "2022-10 - 2023-02",
      mi: "2022-10 - 2023-02",
    },
    role: {
      en: "Back-end Developer Internship",
      zh: "後端開發實習生",
      it: "Stage come Sviluppatore Back-end",
      mi: "Mahi Whakangungu Kaiwhakawhanake Back-end",
    },
    description: {
      en: "Designed and implemented RESTful APIs enabling efficient data exchange in distributed systems using Spring Boot and Java. Built a carpooling platform integrating TomTom Geocoding APIs, optimizing route planning and vehicle usage. Developed a system with potential to reduce CO2 emissions by 69,552 tons per day and decrease vehicle count by 66%.",
      zh: "使用 Spring Boot 和 Java 設計並實施 RESTful API，使分佈式系統中的數據交換更加高效。構建了集成 TomTom 地理編碼 API 的拼車平台，優化了路線規劃和車輛使用。開發了一個系統，有可能每天減少 69,552 噸二氧化碳排放量並減少 66% 的車輛數量。",
      it: "Ho progettato e implementato API RESTful che consentono uno scambio efficiente di dati in sistemi distribuiti utilizzando Spring Boot e Java. Ho costruito una piattaforma di carpooling integrando le API di geocodifica TomTom, ottimizzando la pianificazione del percorso e l'utilizzo dei veicoli. Ho sviluppato un sistema con il potenziale di ridurre le emissioni di CO2 di 69.552 tonnellate al giorno e ridurre il numero di veicoli del 66%.",
      mi: "I hoahoatia me te whakatinanatia nga API RESTful e whakamana ana i te whakawhitinga raraunga pai i roto i nga punaha tohatoha ma te whakamahi i te Spring Boot me Java. I hangaia he papaaho carpooling e whakakotahi ana i nga API Geocoding TomTom, e pai ake ana i te whakamahere huarahi me te whakamahinga waka. I whakawhanakehia he punaha me te kaha ki te whakaiti i nga tukunga CO2 ma te 69,552 tana ia ra me te heke i te tatau waka ma te 66%.",
    },
    technologies: [
      "Spring Boot",
      "Java",
      "RESTful API",
      "TomTom Geocoding API",
    ],
  },
];

export const education: Education[] = [
  {
    school: {
      en: "National Taiwan University of Science and Technology",
      zh: "國立臺灣科技大學",
      it: "Università Nazionale di Scienza e Tecnologia di Taiwan",
      mi: "Te Whare Wānanga o te Pūtaiao me te Hangarau o Taiwan",
    },
    degree: {
      en: "Master of Science in Computer Science and Information Engineering",
      zh: "計算機科學與資訊工程碩士",
      it: "Master in Scienze Informatiche e Ingegneria dell'Informazione",
      mi: "Tohu Paerua i te Pūtaiao Rorohiko me te Pūkaha Pārongo",
    },
    period: {
      en: "Expected: 2025-06",
      zh: "預計: 2025-06",
      it: "Previsto: 2025-06",
      mi: "E tūmanakohia ana: 2025-06",
    },
    gpa: "3.9/4.0",
    thesis: {
      en: "Developed an AI-driven technique to transform real-world subjects into LEGO brick representations, leveraging advanced machine learning models",
      zh: "開發了一種人工智能驅動的技術，將現實世界的主題轉換為樂高積木表示，利用先進的機器學習模型",
      it: "Ho sviluppato una tecnica basata sull'IA per trasformare soggetti del mondo reale in rappresentazioni di mattoncini LEGO, sfruttando modelli avanzati di apprendimento automatico",
      mi: "I whakawhanakehia he hangarau ārahi-AI hei huri i nga kaupapa ao tuturu ki nga whakaahuatanga pereki LEGO, ma te whakamahi i nga tauira ako miihini ara",
    },
  },
  {
    school: {
      en: "University of Salerno",
      zh: "薩勒諾大學",
      it: "Università degli Studi di Salerno",
      mi: "Te Whare Wānanga o Salerno",
    },
    degree: {
      en: "Bachelor of Science in Computer Science",
      zh: "計算機科學學士",
      it: "Laurea in Informatica",
      mi: "Tohu Paetahi i te Pūtaiao Rorohiko",
    },
    period: {
      en: "Graduated: 2023-05",
      zh: "畢業: 2023-05",
      it: "Laureato: 2023-05",
      mi: "Kua whakawhiwhia: 2023-05",
    },
    gpa: "3.9/4.0",
    thesis: {
      en: "Developed a carpooling system using Java Spring Boot focusing on backend development and geospatial data integration",
      zh: "使用 Java Spring Boot 開發了一個拼車系統，專注於後端開發和地理空間數據集成",
      it: "Ho sviluppato un sistema di carpooling utilizzando Java Spring Boot concentrandomi sullo sviluppo backend e sull'integrazione di dati geospaziali",
      mi: "I whakawhanakehia he punaha whakahaere waka ma te whakamahi i te Java Spring Boot e arotahi ana ki te whakawhanake backend me te whakauru raraunga geospatial",
    },
  },
];

export const languages: LanguageItem[] = [
  {
    name: {
      en: "Italian",
      zh: "義大利文",
      it: "Italiano",
      mi: "Itāriana",
    },
    level: {
      en: "Native",
      zh: "母語",
      it: "Madrelingua",
      mi: "Reo Taketake",
    },
    code: "it",
    flag: "🇮🇹",
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
      en: "Chinese",
      zh: "中文",
      it: "Cinese",
      mi: "Hainamana",
    },
    level: {
      en: "Intermediate (B1)",
      zh: "中級 (B1)",
      it: "Intermedio (B1)",
      mi: "Takawaenga (B1)",
    },
    code: "zh",
    flag: "🇨🇳",
  },
];

export const summary = {
  short: {
    en: "Dedicated software engineer with expertise in AI, Robotics, and Web Development. Thrives in fast-paced environments and excels at meeting deadlines. A proactive team player committed to delivering impactful solutions.",
    zh: "專注於人工智慧、機器人與網頁開發的軟體工程師，能在高壓環境中迅速達成目標，積極參與團隊合作，致力於提供具影響力的解決方案。",
    it: "Ingegnere del software con competenze in IA, Robotica e Sviluppo Web. Si distingue per la capacità di operare efficacemente in ambienti dinamici e per il rispetto delle scadenze. Collaboratore proattivo orientato a soluzioni di impatto.",
    mi: "He kaipūkaha pūmanawa rorohiko mātanga ki te AI, Robotics me te Whakawhanake Tukutuku. Ka mahi kaha i raro i ngā taumahatanga, ā, he mema o te rōpū e ū ana ki te whakatutuki i ngā otinga whai hua.",
  },
  long: {
    en: "A detail-oriented software engineer specializing in AI, Robotics, and Web Development. Demonstrates strong organizational skills and the ability to adapt quickly to new challenges. Committed to delivering high-quality results under tight deadlines and contributing positively to team objectives.",
    zh: "一位注重細節的軟體工程師，專長於人工智慧、機器人與網頁開發。具備良好的組織能力，能迅速適應新挑戰，致力於在緊迫的期限內交付高品質成果，並積極貢獻於團隊目標。",
    it: "Ingegnere del software attento ai dettagli, specializzato in IA, Robotica e Sviluppo Web. Dimostra eccellenti capacità organizzative e adattabilità a nuove sfide. Impegnato a fornire risultati di alta qualità rispettando scadenze strette e contribuendo positivamente agli obiettivi del team.",
    mi: "He kaipūkaha pūmanawa rorohiko e aro ana ki ngā taipitopito, he mātanga ki te AI, Robotics me te Whakawhanake Tukutuku. He kaha ki te whakarite me te urutau tere ki ngā wero hou. E ū ana ki te tuku hua kounga tiketike i raro i ngā wā mutunga poto, ā, he kaitākaro rōpū pai hoki.",
  },
};
