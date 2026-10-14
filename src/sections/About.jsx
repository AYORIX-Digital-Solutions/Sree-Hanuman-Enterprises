import { useLanguage } from "./../Context/LanguageContext";
import "./../styles/About.css";

export default function About() {
  const { language, t } = useLanguage();

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-visual">
          <img
            src="/images/leaf-plate-in-use.jpeg"
            alt="Eco leaf plates arranged for serving"
            className="about-image"
            loading="lazy"
          />

          <div className="about-image-label">
            <span className="about-label-icon">✳</span>
            <span>
              {language === "en" ? "Inspired by Nature" : "ప్రకృతి స్ఫూర్తితో"}
            </span>
          </div>
        </div>

        <div className="about-content">
          <span className="about-eyebrow">
            <span className="about-eyebrow-line" />
            {language === "en"
              ? "ABOUT SREE HANUMAN ENTERPRISES"
              : "శ్రీ హనుమాన్ ఎంటర్‌ప్రైజెస్ గురించి"}
          </span>

          <h2>
            {language === "en" ? (
              <>
                Bringing Nature
                <br />
                to Every <span>Table.</span>
              </>
            ) : (
              <>
                ప్రతి భోజనానికి
                <br />
                <span>ప్రకృతి స్పర్శ.</span>
              </>
            )}
          </h2>

          <p className="about-description">
            {language === "en"
              ? "At Sree Hanuman Enterprises, the focus is on eco leaf plates that bring a natural touch to everyday serving, family gatherings, celebrations, and bulk requirements."
              : "శ్రీ హనుమాన్ ఎంటర్‌ప్రైజెస్‌లో రోజువారీ భోజనాలు, కుటుంబ సమావేశాలు, వేడుకలు మరియు పెద్ద మొత్తంలో అవసరాల కోసం పర్యావరణహిత ఆకు ప్లేట్లు అందించడంపై దృష్టి సారిస్తున్నాము."}
          </p>

          <p className="about-description about-description-secondary">
            {language === "en"
              ? "Whether you need plates for a special occasion or larger quantities for your business, connect with us to discuss your requirements."
              : "ప్రత్యేక సందర్భానికి ప్లేట్లు కావాలన్నా లేదా మీ వ్యాపారం కోసం పెద్ద మొత్తంలో కావాలన్నా, మీ అవసరాల గురించి చర్చించడానికి మమ్మల్ని సంప్రదించండి."}
          </p>

          <a href="#products" className="about-link">
            {language === "en" ? t("productsTitle") : "మా ఉత్పత్తులను చూడండి"}{" "}
            <span aria-hidden="true">↗</span>
          </a>

          <div className="about-bottom-note">
            <span className="about-note-mark">✳</span>
            <span>
              {language === "en"
                ? "Natural appeal. Practical serving."
                : "సహజమైన అందం. సౌకర్యవంతమైన వినియోగం."}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}