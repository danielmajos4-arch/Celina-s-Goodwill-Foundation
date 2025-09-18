import { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      element.scrollIntoView({ 
        behavior: prefersReducedMotion ? 'auto' : 'smooth' 
      });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-pink-500 rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Celina's Goodwill Foundation
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { name: 'Home', id: 'hero' },
              { name: 'About', id: 'story' },
              { name: 'Mission', id: 'mission' },
              { name: 'Impact', id: 'statistics' },
              { name: 'Partnership', id: 'partnership' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors font-medium"
                data-testid={`link-${item.name.toLowerCase()}`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('partnership')}
              className="bg-gradient-to-r from-blue-600 to-green-600"
              data-testid="button-get-involved"
            >
              Get Involved
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            data-testid="button-mobile-menu"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 py-4">
            <nav id="mobile-navigation" className="flex flex-col space-y-4" aria-label="Mobile navigation">
              {[
                { name: 'Home', id: 'hero' },
                { name: 'About', id: 'story' },
                { name: 'Mission', id: 'mission' },
                { name: 'Impact', id: 'statistics' },
                { name: 'Partnership', id: 'partnership' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                  data-testid={`mobile-link-${item.name.toLowerCase()}`}
                  aria-label={`Navigate to ${item.name} section`}
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('partnership')}
                className="mt-4 bg-gradient-to-r from-blue-600 to-green-600"
                data-testid="button-mobile-get-involved"
                aria-label="Navigate to partnership opportunities"
              >
                Get Involved
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}