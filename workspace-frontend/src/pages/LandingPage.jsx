import React from "react";
import Header from "../components/landingPage/Header";
import HeroSection from "../components/landingPage/HeroSection";
import FeaturesSection from "../components/landingPage/FeaturesSection";
import HowItWorksSection from "../components/landingPage/HowItWorksSection";
import ContactSection from "../components/landingPage/ContactSection";
import FAQSection from "../components/landingPage/FAQSection";
import Footer from "../components/landingPage/Footer";
const LandingPage = () => {
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
