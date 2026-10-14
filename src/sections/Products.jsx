import { useLanguage } from "./../Context/LanguageContext";
import "./../styles/Products.css";

const products = [
  {
    number: "01",
    name: "Eco Leaf Plates",
    nameTe: "పర్యావరణహిత ఆకు ప్లేట్లు",
    description:
      "Natural-looking leaf plates for everyday serving and special occasions.",
    descriptionTe:
      "రోజువారీ భోజనాలు మరియు ప్రత్యేక సందర్భాలకు సహజమైన రూపంతో కూడిన ఆకు ప్లేట్లు.",
    image: "/images/leaf-plates-main.jpeg",
    tag: "EVERYDAY SERVING",
    tagTe: "రోజువారీ వినియోగం",
  },
  {
    number: "02",
    name: "Stacked Leaf Plates",
    nameTe: "పేర్చిన ఆకు ప్లేట్లు",
    description:
      "A convenient option for gatherings, functions, and serving needs.",
    descriptionTe:
      "సమావేశాలు, వేడుకలు మరియు వడ్డింపు అవసరాలకు అనువైన ఎంపిక.",
    image: "/images/leaf-plate-stack.jpeg",
    tag: "GATHERINGS & EVENTS",
    tagTe: "సమావేశాలు & వేడుకలు",
  },
  {
    number: "03",
    name: "Bulk Leaf Plates",
    nameTe: "బల్క్ ఆకు ప్లేట్లు",
    description:
      "Planning a larger requirement? Contact us to discuss your quantity needs.",
    descriptionTe:
      "ఎక్కువ పరిమాణంలో కావాలా? మీకు అవసరమైన పరిమాణం గురించి చర్చించడానికి మమ్మల్ని సంప్రదించండి.",
    image: "/images/leaf-plates-bulk.jpeg",
    tag: "BULK ENQUIRIES",
    tagTe: "బల్క్ ఆర్డర్లు",
  },
];

const getWhatsAppLink = (message) => {
  return `https://wa.me/919533191510?text=${encodeURIComponent(message)}`;
};

export default function Products() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <section className="products-section" id="products">
      <div className="products-container">
        <div className="products-heading">
          <div>
            <span className="products-eyebrow">
              <span className="products-eyebrow-line" />
              {isEnglish ? "OUR COLLECTION" : "మా ఉత్పత్తుల సేకరణ"}
            </span>

            <h2>
              {isEnglish ? (
                <>
                  Thoughtful Products,
                  <br />
                  <span>Natural Appeal.</span>
                </>
              ) : (
                <>
                  సహజమైన ఉత్పత్తులు,
                  <br />
                  <span>ప్రకృతి అందం.</span>
                </>
              )}
            </h2>
          </div>

          <p className="products-intro">
            {isEnglish
              ? "Explore our eco leaf plate collection for everyday serving, celebrations, and larger requirements."
              : "రోజువారీ వడ్డింపు, వేడుకలు మరియు ఎక్కువ పరిమాణంలో అవసరాల కోసం మా పర్యావరణహిత ఆకు ప్లేట్ల సేకరణను పరిశీలించండి."}
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <article className="product-card" key={product.number}>
              <div className="product-image-wrap">
                <span className="product-number">{product.number}</span>

                <img
                  src={product.image}
                  alt={isEnglish ? product.name : product.nameTe}
                  className="product-image"
                  loading="lazy"
                />

                <span className="product-tag">
                  {isEnglish ? product.tag : product.tagTe}
                </span>
              </div>

              <div className="product-card-content">
                <h3>{isEnglish ? product.name : product.nameTe}</h3>

                <p>
                  {isEnglish
                    ? product.description
                    : product.descriptionTe}
                </p>

                <a
                  href={getWhatsAppLink(
                    isEnglish
                      ? `Hello, I would like to enquire about ${product.name}. Please share the available options and details.`
                      : `నమస్కారం, ${product.nameTe} గురించి వివరాలు తెలుసుకోవాలనుకుంటున్నాను. అందుబాటులో ఉన్న రకాలు మరియు వివరాలు తెలియజేయండి.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-enquiry-link"
                >
                  {isEnglish
                    ? "Enquire on WhatsApp"
                    : "వాట్సాప్‌లో విచారించండి"}{" "}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="products-bottom">
          <p>
            {isEnglish
              ? "Looking for larger quantities?"
              : "ఎక్కువ పరిమాణంలో కావాలా?"}
          </p>

          <a
            href={getWhatsAppLink(
              isEnglish
                ? "Hello, I would like to enquire about bulk eco leaf plate orders. Please share the available options and details."
                : "నమస్కారం, ఎక్కువ పరిమాణంలో పర్యావరణహిత ఆకు ప్లేట్ల ఆర్డర్ల గురించి తెలుసుకోవాలనుకుంటున్నాను. అందుబాటులో ఉన్న రకాలు మరియు వివరాలు తెలియజేయండి."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="products-cta"
          >
            {isEnglish
              ? "Discuss Your Requirements"
              : "మీ అవసరాల గురించి మాట్లాడండి"}{" "}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}