import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/landing/HeroSection';
import AboutSection from '../components/landing/AboutSection';
import FeaturesSection from '../components/landing/FeaturesSection';
import HowItWorksSection from '../components/landing/HowItWorksSection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import CompensationPlanSection from '../components/landing/CompensationPlanSection';
import ProductsSection from '../components/landing/ProductsSection';
import FaqSection from '../components/landing/FaqSection';
import ContactSection from '../components/landing/ContactSection';
import JoinSection from '../components/landing/JoinSection';
import TeamSection from '../components/landing/TeamSection';
const LandingPage = () => {
  return <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ProductsSection />
        <CompensationPlanSection />
        <TestimonialsSection />
        <TeamSection />
        <FaqSection />
        <JoinSection />
        <ContactSection />
      </main>
      <Footer />
    </div>;
};
export default LandingPage;