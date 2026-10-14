import { useEffect, useState } from "react";
import { useLanguage } from "./../Context/LanguageContext";
import "./../styles/Navbar.css";

const navLinks = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "products", href: "#products" },
  { key: "whyChooseUs", href: "#why-choose-us" },
  { key: "contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const sections = navLinks
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          );

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.2, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-active", menuOpen);

    return () => {
      document.body.classList.remove("mobile-menu-active");
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <nav className="navbar" aria-label="Main navigation">
          <a
            className="brand"
            href="#home"
            aria-label="Sree Hanuman Enterprises home"
            onClick={closeMenu}
          >
            <img
              className="brand-logo"
              src="/images/sree-hanuman-logo.jpeg"
              alt=""
            />

            <span className="brand-name">
              <strong>SREE HANUMAN</strong>
              <small>ENTERPRISES · ECO LEAF PLATES</small>
            </span>
          </a>

         <div
  className={`language-toggle-premium ${
    language === "te" ? "language-toggle-telugu" : ""
  }`}
  role="group"
  aria-label="Choose website language"
>
  <span className="language-toggle-thumb" aria-hidden="true" />

  <button
    type="button"
    className="language-toggle-option"
    onClick={() => {
      if (language !== "en") toggleLanguage();
    }}
    aria-pressed={language === "en"}
  >
    EN
  </button>

  <button
    type="button"
    className="language-toggle-option"
    onClick={() => {
      if (language !== "te") toggleLanguage();
    }}
    aria-pressed={language === "te"}
  >
    తెలుగు
  </button>
</div>

          <button
            className={`menu-toggle ${menuOpen ? "menu-toggle-open" : ""}`}
            type="button"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          {menuOpen && (
            <button
              className="menu-backdrop"
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
            />
          )}

          <div
            id="primary-navigation"
            className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}
          >
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={
                  activeSection === link.href.slice(1)
                    ? "nav-link active"
                    : "nav-link"
                }
                style={{ "--link-index": index }}
                aria-current={
                  activeSection === link.href.slice(1)
                    ? "location"
                    : undefined
                }
                onClick={closeMenu}
              >
                {t(link.key)}
              </a>
            ))}

            <a
              className="nav-cta"
              href="https://wa.me/919533191510"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              <svg
                viewBox="0 0 24 24"
                width="19"
                height="19"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M20 11.5a8.2 8.2 0 0 1-12.1 7.2L4 20l1.3-3.8A8.2 8.2 0 1 1 20 11.5Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 8.5c.5 2 2 3.5 4 4l1-1 2 1c-.2 1.5-1.5 2-2.5 1.7-3-.8-5.5-3.3-6.3-6.3C7 7 7.5 5.8 9 5.5l1 2-1 1Z"
                  fill="currentColor"
                />
              </svg>

              <span>{t("enquire")}</span>
              <span className="cta-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </nav>
      </header>

      <a
        className="mobile-whatsapp"
        href="https://wa.me/919533191510"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("enquire")}
      >
        <svg
          viewBox="0 0 24 24"
          width="23"
          height="23"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M20 11.5a8.2 8.2 0 0 1-12.1 7.2L4 20l1.3-3.8A8.2 8.2 0 1 1 20 11.5Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 8.5c.5 2 2 3.5 4 4l1-1 2 1c-.2 1.5-1.5 2-2.5 1.7-3-.8-5.5-3.3-6.3-6.3C7 7 7.5 5.8 9 5.5l1 2-1 1Z"
            fill="currentColor"
          />
        </svg>
        <span>{t("enquire")}</span>
      </a>
    </>
  );
}