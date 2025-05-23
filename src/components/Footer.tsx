import React from "react";
import { useLanguage } from "@/context/LanguageContext";
// import { Linkedin, Github } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { profileData } from "@/data/profileData";

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 md:px-12 bg-gray-100 dark:bg-[#0a192f] border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-600 dark:text-gray-300">
            &copy; {currentYear} Raffaele Chiarolanza.{" "}
            {t("footer.allRightsReserved")}
          </p>
        </div>

        <div className="flex items-center space-x-6">
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-[#64ffda] dark:hover:text-[#64ffda] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-[#64ffda] dark:hover:text-[#64ffda] transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
