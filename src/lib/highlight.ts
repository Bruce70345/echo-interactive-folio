import React from "react";

// /**
//  * 關鍵字高亮工具函數
//  * @param text 需要高亮的文字
//  * @param language 當前語言
//  * @param highlightColor 高亮顏色，默認為 #ffa828
//  * @returns React 元素，包含高亮處理後的文字
//  */
// export const highlightKeywords = (
//   text: string,
//   language: string,
//   highlightColor: string = "#ffa828"
// ) => {
//   // 根據不同語言設置需要高亮的關鍵詞
//   const keywords: Record<string, string[]> = {
//     en: [
//       "Detail-oriented",
//       "organized",
//       "meticulous",
//       "AI",
//       "Robotics",
//       "Web Development",
//       "fast pace",
//       "tight deadlines",
//       "Enthusiastic team player",
//       "proactive",
//       "expertise",
//       "machine learning",
//       "Spring Boot",
//       "Java",
//       "RESTful API",
//       "TomTom",
//       "CO2 emissions",
//       "Python",
//       "TensorFlow",
//     ],
//     zh: [
//       "細心",
//       "有條理",
//       "一絲不苟",
//       "人工智能",
//       "機器人",
//       "網頁開發",
//       "快節奏",
//       "緊迫的期限",
//       "熱情的團隊合作者",
//       "專注",
//       "專業",
//       "機器學習",
//       "Spring Boot",
//       "Java",
//       "RESTful API",
//       "TomTom",
//       "二氧化碳排放",
//       "Python",
//       "TensorFlow",
//     ],
//     it: [
//       "orientato ai dettagli",
//       "organizzato",
//       "meticoloso",
//       "IA",
//       "Robotica",
//       "Sviluppo Web",
//       "ritmo sostenuto",
//       "scadenze strette",
//       "Entusiasta giocatore di squadra",
//       "proattivo",
//       "competenze",
//       "apprendimento automatico",
//       "Spring Boot",
//       "Java",
//       "RESTful API",
//       "TomTom",
//       "emissioni di CO2",
//       "Python",
//       "TensorFlow",
//     ],
//     mi: [
//       "aro ana ki nga taipitopito",
//       "whakaritea",
//       "tika",
//       "AI",
//       "Robotics",
//       "Whakawhanake Tukutuku",
//       "kato tere",
//       "wa mutunga maukati",
//       "kaitakaro roopu hihiko",
//       "mātanga",
//       "ako miihini",
//       "Spring Boot",
//       "Java",
//       "RESTful API",
//       "TomTom",
//       "tukunga CO2",
//       "Python",
//       "TensorFlow",
//     ],
//   };

//   // 獲取當前語言的關鍵詞
//   const currentKeywords = keywords[language] || [];

//   // 替換關鍵詞為帶有黃色樣式的 span
//   let highlightedText = text;

//   currentKeywords.forEach((keyword) => {
//     // 使用正則表達式做不區分大小寫的替換
//     const regex = new RegExp(`(${keyword})`, "gi");
//     highlightedText = highlightedText.replace(
//       regex,
//       `<span class="text-[${highlightColor}]">$1</span>`
//     );
//   });

//   return React.createElement("span", {
//     dangerouslySetInnerHTML: { __html: highlightedText },
//   });
// };

export const highlightKeywords = (text: string, language: string) => {
  // 根據不同語言設置需要高亮的關鍵詞
  const keywords: Record<string, string[]> = {
    en: [
      "Strategic thinker",
      "Brand positioning",
      "Digital marketing",
      "Content creation",
      "SEO",
      "SEM",
      "Social media strategy",
      "Analytics",
      "Market research",
      "Target audience",
      "Campaign management",
      "Email marketing",
      "Copywriting",
      "Conversion optimization",
      "KPI tracking",
      "Storytelling",
      "Creative direction",
      "Team collaboration",
      "Deadline-driven",
      "Growth hacking",
      "Cross-functional teamwork",
      "CRM tools",
      "A/B testing",
      "Marketing automation",
      "B2B marketing",
      "B2C engagement",
      "Brand awareness",
      "Data-driven decisions",
    ],
    zh: [
      "策略思考",
      "品牌定位",
      "數位行銷",
      "內容創作",
      "SEO 搜尋引擎最佳化",
      "SEM 搜尋引擎行銷",
      "社群媒體策略",
      "數據分析",
      "市場調查",
      "目標受眾",
      "活動管理",
      "電子報行銷",
      "文案撰寫",
      "轉換率優化",
      "KPI 指標追蹤",
      "故事行銷",
      "創意指導",
      "團隊合作",
      "期限導向",
      "成長駭客",
      "跨部門協作",
      "CRM 客戶關係管理",
      "A/B 測試",
      "行銷自動化",
      "B2B 行銷",
      "B2C 互動",
      "品牌知名度",
      "數據驅動決策",
    ],
    it: [
      "pensiero strategico",
      "posizionamento del marchio",
      "marketing digitale",
      "creazione di contenuti",
      "SEO",
      "SEM",
      "strategia sui social media",
      "analisi dei dati",
      "ricerca di mercato",
      "pubblico target",
      "gestione delle campagne",
      "email marketing",
      "scrittura persuasiva",
      "ottimizzazione delle conversioni",
      "monitoraggio KPI",
      "storytelling",
      "direzione creativa",
      "collaborazione di squadra",
      "orientato alle scadenze",
      "growth hacking",
      "lavoro interfunzionale",
      "strumenti CRM",
      "test A/B",
      "automazione del marketing",
      "marketing B2B",
      "coinvolgimento B2C",
      "notorietà del marchio",
      "decisioni basate sui dati",
    ],
    mi: [
      "whakaaro rautaki",
      "whakatūnga waitohu",
      "hokohoko matihiko",
      "hanga ihirangi",
      "SEO",
      "SEM",
      "rautaki pāpāho pāpori",
      "tātari raraunga",
      "rangahau mākete",
      "hunga whāinga",
      "whakahaere kaupapa",
      "hokohoko īmēra",
      "tuhi kape",
      "whakapai hurihanga",
      "arataki KPI",
      "kōrero pakiwaitara",
      "arataki auaha",
      "mahi tahi ā-tīma",
      "arataki wā kati",
      "pāhikohiko tipu",
      "mahi tahi ā-kaupapa",
      "utauta CRM",
      "whakamātau A/B",
      "aunoatanga hokohoko",
      "hokohoko B2B",
      "whakaurunga B2C",
      "mōhiotanga waitohu",
      "whakatau i runga i te raraunga",
    ],
  };
  

  // 獲取當前語言的關鍵詞
  const currentKeywords = keywords[language] || [];

  // 替換關鍵詞為帶有高亮樣式的 span
  let highlightedText = text;

  // 首先處理 "AI" 的特殊情況
  highlightedText = highlightedText.replace(
    /\bAI\b/g,
    '<span style="color: #ffda64">AI</span>'
  );

  // 然後處理其他關鍵詞
  currentKeywords.forEach((keyword) => {
    // 使用正則表達式做不區分大小寫的替換，但確保是完整的單詞
    const regex = new RegExp(`\\b(${keyword})\\b`, "gi");
    highlightedText = highlightedText.replace(
      regex,
      '<span style="color: #ffda64">$1</span>'
    );
  });

  return highlightedText;
};
