import { useLanguage } from "./../Context/LanguageContext";
import "./../styles/Hero.css";

export default function Hero() {
  const { language, t } = useLanguage();

  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-eyebrow">
            <span className="hero-dot" />
            NATURAL · PRACTICAL · ECO-FRIENDLY
          </span>

          <h1>
            {language === "en" ? (
              <>
                A Natural Choice
                <br />
                for Every <span>Serving.</span>
              </>
            ) : (
              <span>{t("heroTitle")}</span>
            )}
          </h1>

          <p className="hero-description">
            {t("heroDescription")}
          </p>

          <div className="hero-actions">
            <a href="#products" className="hero-primary-btn">
              {t("exploreProducts")}{" "}
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="https://wa.me/919533191510"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-secondary-btn"
            >
              {t("enquire")}
            </a>
          </div>

          <div className="hero-trust">
            <span className="hero-trust-icon" aria-hidden="true">
              ✳
            </span>
            <p>For individual needs and bulk enquiries</p>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <img
              src="/images/leaf-plate-main.jpeg"
              alt="Eco leaf plate from Sree Hanuman Enterprises"
              className="hero-image"
              fetchPriority="high"
            />
          </div>

          <div className="hero-image-caption">
            <span className="caption-line" />
            <span>Inspired by nature</span>
          </div>

          <div className="hero-image-index" aria-hidden="true">
            <span>01</span>
            <span className="index-divider" />
            <span>LEAFWARE</span>
          </div>
        </div>
      </div>

      <div className="hero-bottom-line" aria-hidden="true">
        <span>MADE FOR EVERYDAY MOMENTS</span>
        <span>SCROLL TO DISCOVER ↓</span>
      </div>
    </section>
  );
}