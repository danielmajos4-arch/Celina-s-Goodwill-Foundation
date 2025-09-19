import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StorySection from '@/components/StorySection';
import MissionSection from '@/components/MissionSection';
import PartnershipSection from '@/components/PartnershipSection';

import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { ScrollProgressBar, AnimatedSection } from '@/components/ScrollAnimations';
import { BackToTop } from '@/components/InteractiveElements';

export default function Home() {
  useEffect(() => {
    // Check for reduced motion preference before enabling smooth scrolling
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (!mediaQuery.matches) {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      element.scrollIntoView({ 
        behavior: prefersReducedMotion ? 'auto' : 'smooth' 
      });
    }
  };


  return (
    <div className="min-h-screen bg-white">
      <ScrollProgressBar />
      <Header />
      
      <HeroSection />
      
      <AnimatedSection animation="fade-up" delay={300}>
        <StorySection />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={200}>
        <MissionSection />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={300}>
        <PartnershipSection />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={400}>
        <ContactSection />
      </AnimatedSection>
      
      <Footer />
      
      {/* Interactive Elements */}
      <BackToTop />
    </div>
  );
}