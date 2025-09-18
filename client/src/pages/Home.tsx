import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatisticsSection from '@/components/StatisticsSection';
import StorySection from '@/components/StorySection';
import MissionSection from '@/components/MissionSection';
import PartnershipSection from '@/components/PartnershipSection';
import SocialMediaSection from '@/components/SocialMediaSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    // Add smooth scrolling behavior to html element
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <StatisticsSection />
      <StorySection />
      <MissionSection />
      <PartnershipSection />
      <SocialMediaSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}