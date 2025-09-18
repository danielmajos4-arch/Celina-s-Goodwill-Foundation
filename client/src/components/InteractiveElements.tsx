import { useState, useEffect } from 'react';
import { Share2, ChevronRight, Heart, Users, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface FloatingActionButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  variant?: 'primary' | 'secondary';
}

export function FloatingActionButton({ 
  onClick, 
  icon, 
  label, 
  variant = 'primary' 
}: FloatingActionButtonProps) {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button
        onClick={onClick}
        className={`group h-14 px-6 rounded-full shadow-lg transition-all duration-300 ${
          variant === 'primary'
            ? 'bg-gradient-to-r from-blue-600 to-green-600'
            : 'bg-gray-800'
        }`}
        data-testid="floating-action-button"
        aria-label={label}
      >
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 flex-shrink-0">
            {icon}
          </div>
          <span className="text-white font-medium">
            {label}
          </span>
        </div>
      </Button>
    </div>
  );
}



interface ShareButtonProps {
  url?: string;
  title?: string;
  description?: string;
}

export function ShareButton({ 
  url = window.location.href, 
  title = "Celina's Goodwill Foundation - Breaking Mental Health Stigma",
  description = "Join us in creating a world where seeking mental health support is a sign of strength."
}: ShareButtonProps) {
  const [showOptions, setShowOptions] = useState(false);

  const shareOptions = [
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      color: 'bg-blue-600'
    },
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      color: 'bg-blue-400'
    },
    {
      name: 'LinkedIn',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      color: 'bg-blue-800'
    },
    {
      name: 'WhatsApp',
      url: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`,
      color: 'bg-green-600'
    }
  ];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url
        });
      } catch (error) {
        console.log('Share failed:', error);
        setShowOptions(true);
      }
    } else {
      setShowOptions(!showOptions);
    }
  };

  const handleOptionClick = (shareUrl: string) => {
    window.open(shareUrl, '_blank', 'width=600,height=400');
    setShowOptions(false);
  };

  return (
    <div className="relative">
      <Button
        onClick={handleShare}
        variant="outline"
        className="group"
        data-testid="button-share"
      >
        <Share2 className="w-4 h-4 mr-2" />
        Share
        <ChevronRight className={`w-4 h-4 ml-2 transition-transform duration-200 ${
          showOptions ? 'rotate-90' : ''
        }`} />
      </Button>

      {showOptions && (
        <div className="absolute bottom-full mb-2 left-0 bg-white rounded-lg shadow-xl border p-2 space-y-2 min-w-32">
          {shareOptions.map((option) => (
            <button
              key={option.name}
              onClick={() => handleOptionClick(option.url)}
              className={`w-full text-left px-3 py-2 rounded text-white text-sm font-medium hover-elevate active-elevate-2 ${option.color}`}
              data-testid={`share-option-${option.name.toLowerCase()}`}
            >
              {option.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

interface BackToTopProps {
  threshold?: number;
}

export function BackToTop({ threshold = 300 }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ 
      top: 0, 
      behavior: prefersReducedMotion ? 'auto' : 'smooth' 
    });
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-6 right-24 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-green-600 shadow-lg transition-all duration-300 z-40"
      data-testid="button-back-to-top"
      aria-label="Scroll back to top of page"
    >
      <ChevronRight className="w-6 h-6 text-white transform -rotate-90" />
    </Button>
  );
}