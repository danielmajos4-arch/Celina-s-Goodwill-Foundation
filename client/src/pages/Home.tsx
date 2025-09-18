import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StorySection from '@/components/StorySection';
import MissionSection from '@/components/MissionSection';
import PartnershipSection from '@/components/PartnershipSection';
import SocialMediaSection from '@/components/SocialMediaSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import NewsletterSignup from '@/components/NewsletterSignup';
import { ScrollProgressBar, AnimatedSection } from '@/components/ScrollAnimations';
import { QuickActions, BackToTop } from '@/components/InteractiveElements';
import { MessageCircle } from 'lucide-react';

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

  const handleGetHelp = () => {
    scrollToSection('contact');
  };

  const handleVolunteer = () => {
    scrollToSection('partnership');
  };

  const handleDonate = () => {
    scrollToSection('contact');
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
      
      {/* Newsletter Signup Section */}
      <AnimatedSection animation="fade-up" delay={400}>
        <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <NewsletterSignup />
          </div>
        </section>
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={200}>
        <SocialMediaSection />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={300}>
        <TestimonialsSection />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={400}>
        <ContactSection />
      </AnimatedSection>
      
      <Footer />
      
      {/* Interactive Elements */}
      <QuickActions 
        onGetHelp={handleGetHelp}
        onVolunteer={handleVolunteer}
        onDonate={handleDonate}
      />
      <BackToTop />
    </div>
  );
}