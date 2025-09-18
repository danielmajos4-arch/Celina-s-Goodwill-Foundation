import { ArrowDown, Users, Heart, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50" />
      
      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-600/10 to-transparent rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-green-600/10 to-transparent rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-pink-600/5 to-transparent rounded-full blur-lg" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-8 h-8 border-2 border-blue-200 rotate-45 motion-safe:animate-pulse" />
        <div className="absolute bottom-1/3 left-1/5 w-6 h-6 border-2 border-green-200 rounded-full motion-safe:animate-bounce" />
        <div className="absolute top-2/3 right-1/3 w-4 h-8 bg-pink-200 rotate-12" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 flex justify-center space-x-4">
          {/* Symbolic icons representing mental health support */}
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center motion-safe:animate-pulse">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center motion-safe:animate-pulse motion-safe:delay-100">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-pink-700 rounded-full flex items-center justify-center motion-safe:animate-pulse motion-safe:delay-200">
            <Users className="w-6 h-6 text-white" />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          Breaking Mental Health{' '}
          <span className="bg-gradient-to-r from-blue-600 via-green-600 to-pink-600 bg-clip-text text-transparent">
            Stigma
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
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
          onClick={() => scrollToSection('statistics')}
          className="motion-safe:animate-bounce hover:motion-safe:animate-none transition-all hover:text-primary"
          data-testid="button-scroll-down"
        >
          <ArrowDown className="w-8 h-8 mx-auto text-muted-foreground hover:text-primary" />
        </button>
      </div>
    </section>
  );
}