import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImage from '@/assets/celina-logo.webp';
import heroBackgroundImage from '@assets/clipboard-image-1758163915 (1)_1758164082768.webp';

export default function HeroSection() {
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackgroundImage})` }}
      />
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 flex justify-center">
          {/* Foundation Logo */}
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-2xl bg-white/95 p-2 motion-safe:animate-pulse">
            <img 
              src={logoImage} 
              alt="Celina's Goodwill Foundation Logo" 
              className="w-full h-full object-contain rounded-full"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Breaking Mental Health{' '}
          <span className="bg-gradient-to-r from-blue-400 via-green-400 to-pink-400 bg-clip-text text-transparent">
            Stigma
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Empowering communities through mental health awareness, support, and advocacy. 
          Join us in creating a world where seeking help is a sign of strength.
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <Button
            onClick={() => scrollToSection('partnership')}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all"
            data-testid="button-get-involved-hero"
          >
            Get Involved Today
          </Button>
          <Button
            onClick={() => scrollToSection('story')}
            variant="outline"
            size="lg"
            className="border-2 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm bg-white/50 transition-all"
            data-testid="button-our-story"
          >
            Our Story
          </Button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection('story')}
          className="motion-safe:animate-bounce hover:motion-safe:animate-none transition-all hover-elevate active-elevate-2"
          data-testid="button-scroll-down"
        >
          <ArrowDown className="w-8 h-8 mx-auto text-white/70" />
        </button>
      </div>
    </section>
  );
}