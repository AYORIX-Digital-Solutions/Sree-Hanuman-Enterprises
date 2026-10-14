import { useLanguage } from "./../Context/LanguageContext";
import "./../styles/WhyChooseUs.css";

const features = [
  {
    number: "01",
    title: "A Natural Look",
    titleTe: "సహజమైన రూపం",
    description:
      "Explore leaf plates with a natural appearance for everyday meals and special occasions.",
    descriptionTe:
      "రోజువారీ భోజనాలు మరియు ప్రత్యేక సందర్భాలకు సహజమైన రూపాన్ని అందించే ఆకు ప్లేట్లను చూడండి.",
  },
  {
    number: "02",
    title: "Made for Serving",
    titleTe: "వడ్డించడానికి అనువైనవి",
    description:
      "Discover options for family meals, celebrations, gatherings, and different serving needs.",
    descriptionTe:
      "కుటుంబ భోజనాలు, వేడుకలు, సమావేశాలు మరియు వివిధ అవసరాలకు తగిన ఆకు ప్లేట్లను తెలుసుకోండి.",
  },
  {
    number: "03",
    title: "Options to Explore",
    titleTe: "ఎంచుకోవడానికి వివిధ రకాలు",
    description:
      "Browse our collection and ask about the products that suit your requirements.",
    descriptionTe:
      "మా ఉత్పత్తుల సేకరణను పరిశీలించి, మీ అవసరాలకు సరిపోయే ఉత్పత్తుల గురించి అడగండి.",
  },
  {
    number: "04",
    title: "Direct Communication",
    titleTe: "నేరుగా సంప్రదించండి",
    description:
      "Connect directly with Sree Hanuman Enterprises for product enquiries and availability.",
    descriptionTe:
      "ఉత్పత్తుల వివరాలు మరియు లభ్యత గురించి తెలుసుకోవడానికి శ్రీ హనుమాన్ ఎంటర్‌ప్రైజెస్‌ను నేరుగా సంప్రదించండి.",
  },
];

export default function WhyChooseUs() {
    console.log("LanguageContext file loaded");
  const { language } = useLanguage();
  console.log("WhyChooseUs language:", language);
  const isEnglish = language === "en";

  const whatsappMessage = isEnglish
    ? "Hello, I would like to know more about Sree Hanuman Enterprises eco leaf plates."
    : "నమస్కారం, శ్రీ హనుమాన్ ఎంటర్‌ప్రైజెస్ ఆకు ప్లేట్ల గురించి మరిన్ని వివరాలు తెలుసుకోవాలనుకుంటున్నాను.";

  return (
    <section className="why-section" id="why-choose-us">
      <div className="why-container">
        <div className="why-topline">
          <span>{isEnglish ? "THE DIFFERENCE" : "మా ప్రత్యేకత"}</span>
          <span>01 — 04</span>
        </div>

        <div className="why-layout">
          <div className="why-intro">
            <span className="why-eyebrow">
              {isEnglish ? "WHY CHOOSE US" : "మమ్మల్ని ఎందుకు ఎంచుకోవాలి"}
            </span>

            <h2>
              {isEnglish ? (
                <>
                  Naturally
                  <br />
                  <span>thoughtful.</span>
                </>
              ) : (
                <>
                  సహజత్వంతో
                  <br />
                  <span>ప్రత్యేకత.</span>
                </>
              )}
            </h2>

            <p className="why-description">
              {isEnglish
                ? "Simple serving essentials, a natural aesthetic, and a straightforward way to explore our eco leaf plate collection."
                : "సులభమైన వడ్డింపు, సహజమైన అందం మరియు మా పర్యావరణహిత ఆకు ప్లేట్ల సేకరణను సులభంగా పరిశీలించే అవకాశం."}
            </p>

            <a
              className="why-contact-link"
              href={`https://wa.me/919533191510?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {isEnglish
                ? "Let’s talk about your needs"
                : "మీ అవసరాల గురించి మాట్లాడుకుందాం"}
              <span aria-hidden="true">↗</span>
            </a>

            <div className="why-image-wrap">
              <img
                src="/images/leaf-plates-in-use.jpeg"
                alt={
                  isEnglish
                    ? "Leaf plates arranged for serving"
                    : "వడ్డించడానికి అమర్చిన ఆకు ప్లేట్లు"
                }
                loading="lazy"
              />

              <span className="why-image-label">
                SREE HANUMAN ENTERPRISES
              </span>
            </div>
          </div>

          <div className="why-list">
            <div className="why-list-heading">
              <span>{isEnglish ? "WHAT MATTERS" : "ముఖ్యమైన అంశాలు"}</span>
              <span>01—04</span>
            </div>

            {features.map((feature) => (
              <article
                className="why-feature"
                key={feature.number}
              >
                <span className="why-feature-number">
                  {feature.number}
                </span>

                <div className="why-feature-content">
                  <h3>
                    {isEnglish ? feature.title : feature.titleTe}
                  </h3>
                  <p>
                    {isEnglish
                      ? feature.description
                      : feature.descriptionTe}
                  </p>
                </div>

                <span
                  className="why-feature-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </article>
            ))}

            <div className="why-note">
              <span className="why-note-symbol" aria-hidden="true">
                ✳
              </span>

              <p>
                {isEnglish
                  ? "Explore the collection. Ask questions. Find the right option for your needs."
                  : "ఉత్పత్తులను పరిశీలించండి. వివరాలు అడగండి. మీ అవసరాలకు సరైన ఎంపికను కనుగొనండి."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}