import {
  createContext,
  useContext,
  useState,
} from "react";

const LanguageContext = createContext(null);

const translations = {
  en: {
    home: "Home",
    about: "About",
    products: "Products",
    whyChooseUs: "Why Choose Us",
    contact: "Contact",
    heroTitle: "Naturally thoughtful.",
    heroDescription:
      "Discover eco leaf plates for your serving needs, gatherings, and celebrations.",
    exploreProducts: "Explore Products",
    aboutTitle: "About Us",
    productsTitle: "Our Collection",
    productsDescription:
      "Explore our eco leaf plates for everyday serving and special occasions.",
    product1: "Eco Leaf Plates",
    product2: "Stacked Leaf Plates",
    product3: "Bulk Leaf Plates",
    enquire: "Enquire on WhatsApp",
    whyTitle: "Naturally thoughtful.",
    contactTitle: "Let's talk about your requirements.",
    contactPerson: "Gudelli Purna Chander",
    phone: "Phone",
    directEnquiry: "Direct Enquiries",
    footerExplore: "Explore",
    getInTouch: "Get in touch",
    backToTop: "Back to top",
  },

  te: {
    home: "హోమ్",
    about: "మా గురించి",
    products: "మా ఉత్పత్తులు",
    whyChooseUs: "మమ్మల్ని ఎందుకు ఎంచుకోవాలి",
    contact: "సంప్రదించండి",
    heroTitle: "సహజత్వంలోనే ప్రత్యేకత.",
    heroDescription:
      "మీ భోజన అవసరాలు, వేడుకలు, సమావేశాల కోసం మా ఆకు ప్లేట్లను చూడండి.",
    exploreProducts: "ఉత్పత్తులను చూడండి",
    aboutTitle: "మా గురించి",
    productsTitle: "మా ఉత్పత్తుల సేకరణ",
    productsDescription:
      "రోజువారీ వినియోగం, ప్రత్యేక సందర్భాల కోసం మా ఆకు ప్లేట్లను చూడండి.",
    product1: "ఆకు ప్లేట్లు",
    product2: "పేర్చిన ఆకు ప్లేట్లు",
    product3: "బల్క్ ఆర్డర్లు",
    enquire: "వాట్సాప్‌లో విచారించండి",
    whyTitle: "సహజత్వంలోనే ప్రత్యేకత.",
    contactTitle: "మీ అవసరాల గురించి మాట్లాడుకుందాం.",
    contactPerson: "గుడెల్లి పూర్ణ చంద్ర్",
    phone: "ఫోన్",
    directEnquiry: "నేరుగా సంప్రదించండి",
    footerExplore: "వెబ్‌సైట్ విభాగాలు",
    getInTouch: "సంప్రదించండి",
    backToTop: "పైకి వెళ్లండి",
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((current) => (current === "en" ? "te" : "en"));
  };

  const t = (key) => translations[language][key] ?? key;

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, toggleLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}