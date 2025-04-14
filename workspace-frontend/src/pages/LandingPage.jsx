import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/landingPage/Header";
import HeroSection from "../components/landingPage/HeroSection";
import FeaturesSection from "../components/landingPage/FeaturesSection";
import HowItWorksSection from "../components/landingPage/HowItWorksSection";
import ContactSection from "../components/landingPage/ContactSection";
import FAQSection from "../components/landingPage/FAQSection";
import Footer from "../components/landingPage/Footer";

const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.state?.scrollTo;
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, [location]);

  return (
    <>
      <Header />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="how-it-works">
        <HowItWorksSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <FAQSection />
      <Footer />
    </>
  );
};

export default LandingPage;
