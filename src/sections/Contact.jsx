import { useLanguage } from "./../Context/LanguageContext";
import "./../styles/Contact.css";

const phoneNumber = "9533191510";

export default function Contact() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const whatsappMessage = isEnglish
    ? "Hello, I would like to enquire about Sree Hanuman Enterprises eco leaf plates. Please share the available options and details."
    : "నమస్కారం, శ్రీ హనుమాన్ ఎంటర్‌ప్రైజెస్ ఆకు ప్లేట్ల గురించి వివరాలు తెలుసుకోవాలనుకుంటున్నాను. అందుబాటులో ఉన్న రకాలు మరియు వివరాలు తెలియజేయండి.";

  const whatsappLink =
    "https://wa.me/919533191510?text=" +
    encodeURIComponent(whatsappMessage);

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <span className="contact-eyebrow">
            <span className="contact-eyebrow-line" />
            {isEnglish ? "GET IN TOUCH" : "సంప్రదించండి"}
          </span>

          <h2>
            {isEnglish ? (
              <>
                Let’s talk about
                <br />
                <span>your requirements.</span>
              </>
            ) : (
              <>
                మీ అవసరాల గురించి
                <br />
                <span>మాట్లాడుకుందాం.</span>
              </>
            )}
          </h2>

          <p className="contact-description">
            {isEnglish
              ? "Looking for eco leaf plates? Get in touch with us to discuss your requirements and available options."
              : "ఆకు ప్లేట్లు కావాలా? మీ అవసరాలు మరియు అందుబాటులో ఉన్న రకాల గురించి తెలుసుకోవడానికి మమ్మల్ని సంప్రదించండి."}
          </p>
        </div>

        <div className="contact-panel">
          <div className="contact-panel-top">
            <span className="contact-panel-label">
              {isEnglish ? "DIRECT ENQUIRIES" : "నేరుగా సంప్రదించండి"}
            </span>
            <span className="contact-status-dot" />
          </div>

          <div className="contact-person">
            <span className="contact-avatar" aria-hidden="true">
              SH
            </span>

            <div>
              <h3>
                {isEnglish ? "Gudelli Purna Chander" : "గుడెల్లి పూర్ణ చంద్ర్"}
              </h3>
              <p>Sree Hanuman Enterprises</p>
            </div>
          </div>

          <div className="contact-divider" />

          <div className="contact-detail">
            <span className="contact-detail-label">
              {isEnglish ? "PHONE" : "ఫోన్"}
            </span>
            <a href={`tel:${phoneNumber}`} className="contact-phone">
              {phoneNumber}
            </a>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-whatsapp-button"
          >
            <span>
              {isEnglish ? "Enquire on WhatsApp" : "వాట్సాప్‌లో విచారించండి"}
            </span>
            <span className="contact-button-arrow" aria-hidden="true">
              ↗
            </span>
          </a>

          <p className="contact-note">
            {isEnglish
              ? "Connect with us to discuss your needs."
              : "మీ అవసరాల గురించి చర్చించడానికి మమ్మల్ని సంప్రదించండి."}
          </p>
        </div>
      </div>

      <div className="contact-bottom-line">
        <span>SREE HANUMAN ENTERPRISES</span>
        <span>ECO LEAF PLATES</span>
      </div>
    </section>
  );
}