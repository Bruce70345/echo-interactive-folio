import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";

const ContactForm: React.FC = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: language === "en" ? "Message sent!" : "訊息已發送！",
      description:
        language === "en"
          ? "Thank you for your message. I will get back to you soon!"
          : "感謝您的訊息。我會盡快回覆！",
      duration: 5000,
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        {language === "en" ? "Contact Me" : "聯絡我"}
      </h2>

      <div className="max-w-2xl mx-auto bg-white dark:bg-[#112240] rounded-lg shadow-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">{language === "en" ? "Name" : "姓名"}</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full"
              placeholder={language === "en" ? "Your name" : "您的姓名"}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              {language === "en" ? "Email" : "電子郵件"}
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full"
              placeholder={language === "en" ? "Your email" : "您的電子郵件"}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">
              {language === "en" ? "Message" : "訊息"}
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full"
              placeholder={language === "en" ? "Your message" : "您的訊息"}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#64ffda] text-[#0a192f] hover:bg-[#64ffda]/90 transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? language === "en"
                ? "Sending..."
                : "發送中..."
              : language === "en"
              ? "Send Message"
              : "發送訊息"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
