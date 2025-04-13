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
        // Delay to ensure sections have rendered
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, [location]);

  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default LandingPage;
