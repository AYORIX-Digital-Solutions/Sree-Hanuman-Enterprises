import { useLanguage } from "./../Context/LanguageContext";
import "./../styles/Footer.css";

export default function Footer() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const navigationLinks = [
    { label: isEnglish ? "Home" : "హోమ్", href: "#home" },
    { label: isEnglish ? "About" : "మా గురించి", href: "#about" },
    { label: isEnglish ? "Products" : "ఉత్పత్తులు", href: "#products" },
    {
      label: isEnglish ? "Why Choose Us" : "మమ్మల్ని ఎందుకు ఎంచుకోవాలి",
      href: "#why-choose-us",
    },
    { label: isEnglish ? "Contact" : "సంప్రదించండి", href: "#contact" },
  ];

  const whatsappMessage = isEnglish
    ? "Hello, I would like to enquire about Sree Hanuman Enterprises eco leaf plates."
    : "నమస్కారం, శ్రీ హనుమాన్ ఎంటర్‌ప్రైజెస్ ఆకు ప్లేట్ల గురించి వివరాలు తెలుసుకోవాలనుకుంటున్నాను.";

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-brand-header">
              <img
                src="/images/sree-hanuman-logo.jpeg"
                alt="Sree Hanuman Enterprises Eco Leaves logo"
                className="footer-logo"
              />

              <span className="footer-brand-title">
                SREE HANUMAN
                <small>ENTERPRISES</small>
              </span>
            </a>

            <p className="footer-brand-description">
              {isEnglish
                ? "Eco leaf plates for your serving needs, gatherings, and celebrations."
                : "మీ వడ్డింపు అవసరాలు, సమావేశాలు మరియు వేడుకల కోసం పర్యావరణహిత ఆకు ప్లేట్లు."}
            </p>

            <span className="footer-category">
              <span className="footer-category-dot" />
              {isEnglish ? "ECO LEAF PLATES" : "ఆకు ప్లేట్లు"}
            </span>
          </div>

          <div className="footer-navigation">
            <h3>{isEnglish ? "Explore" : "విభాగాలు"}</h3>

            <nav aria-label={isEnglish ? "Footer navigation" : "ఫుటర్ నావిగేషన్"}>
              {navigationLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-contact">
            <h3>{isEnglish ? "Get in touch" : "సంప్రదించండి"}</h3>

            <p className="footer-contact-person">
              {isEnglish ? "Gudelli Purna Chander" : "గుడెల్లి పూర్ణ చంద్ర్"}
            </p>

            <a href="tel:9533191510" className="footer-phone">
              +91 95331 91510
            </a>

            <a
              href={`https://wa.me/919533191510?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp"
            >
              <span>
                {isEnglish ? "Enquire on WhatsApp" : "వాట్సాప్‌లో విచారించండి"}
              </span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Sree Hanuman Enterprises.
            {isEnglish ? " All rights reserved." : " అన్ని హక్కులు సంస్థకు చెందుతాయి."}
          </p>

          <a href="#home" className="footer-back-top">
            {isEnglish ? "Back to top" : "పైకి వెళ్లండి"}{" "}
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}