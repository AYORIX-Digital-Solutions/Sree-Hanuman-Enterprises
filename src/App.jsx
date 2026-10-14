import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Products from "./sections/Products";
import WhyChooseUs from "./sections/WhyChooseUs";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import { LanguageProvider } from "./Context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}