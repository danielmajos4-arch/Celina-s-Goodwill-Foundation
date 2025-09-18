import { useState, useEffect } from 'react';
import { Menu, X, Heart, Home, Info, Target, TrendingUp, Handshake, MessageCircle } from 'lucide-react';
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

  const navigationItems = [
    { name: 'Home', id: 'hero', icon: Home },
    { name: 'About', id: 'story', icon: Info },
    { name: 'Mission', id: 'mission', icon: Target },
    { name: 'Partnership', id: 'partnership', icon: Handshake },
    { name: 'Contact', id: 'contact', icon: MessageCircle }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <nav
        className={`max-w-4xl mx-auto transition-all duration-500 ease-out smooth-appear glassmorphic ${
          isScrolled
            ? 'bg-white/70 dark:bg-gray-900/70 shadow-2xl'
            : 'bg-white/50 dark:bg-gray-900/50 shadow-lg'
        } rounded-2xl`}
      >
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-foreground hidden sm:block">
              Celina's Goodwill
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-white/30 dark:hover:bg-gray-800/30 rounded-xl transition-all duration-300 hover-elevate nav-hover-effect focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
                data-testid={`link-${item.name.toLowerCase()}`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('partnership')}
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 shadow-lg text-white px-6 py-2 rounded-xl font-medium transition-all duration-200"
              data-testid="button-get-involved"
            >
              Work with us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-xl hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-200 hover-elevate active-elevate-2"
            data-testid="button-mobile-menu"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="mt-2 lg:hidden smooth-appear">
          <div className="max-w-4xl mx-auto glassmorphic bg-white/80 dark:bg-gray-900/80 rounded-2xl p-4">
            <nav id="mobile-navigation" className="flex flex-col space-y-3" aria-label="Mobile navigation">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-3 px-4 py-3 text-left text-foreground/80 hover:text-foreground font-medium hover:bg-white/30 dark:hover:bg-gray-800/30 rounded-xl transition-all duration-300 hover-elevate active-elevate-2 nav-hover-effect focus:outline-none focus:ring-2 focus:ring-primary/50"
                  data-testid={`mobile-link-${item.name.toLowerCase()}`}
                  aria-label={`Navigate to ${item.name} section`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('partnership')}
                className="mt-2 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 shadow-lg text-white rounded-xl font-medium transition-all duration-300"
                data-testid="button-mobile-get-involved"
                aria-label="Navigate to partnership opportunities"
              >
                Work with us
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}