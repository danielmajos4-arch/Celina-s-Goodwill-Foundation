import { Heart, ArrowUp } from 'lucide-react';
import { SiFacebook, SiTiktok } from 'react-icons/si';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="text-center">
            {/* Foundation Logo and Name */}
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-pink-500 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Celina's Goodwill Foundation</h3>
            </div>
            
            {/* Short Description */}
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Breaking mental health stigma through compassion and community support.
            </p>

            {/* Social Media Links */}
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="#"
                className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors group"
                aria-label="Facebook - Joyful Healing Hub"
                data-testid="link-facebook-footer"
              >
                <SiFacebook className="w-6 h-6 text-white" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-black hover:bg-gray-900 border-2 border-white rounded-full flex items-center justify-center transition-colors group"
                aria-label="TikTok - @joyfulhealinghub"
                data-testid="link-tiktok-footer"
              >
                <SiTiktok className="w-6 h-6 text-white" />
              </a>
            </div>

            {/* Social Media Handles */}
            <div className="flex justify-center space-x-8 text-sm text-gray-400 mb-8">
              <p><strong>Facebook:</strong> Joyful Healing Hub</p>
              <p><strong>TikTok:</strong> @joyfulhealinghub</p>
            </div>

            {/* Memorial Line */}
            <p className="text-gray-400 italic mb-6">
              In loving memory of Celina Mbgogo Okwuokei
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Celina's Goodwill Foundation. All rights reserved.
            </p>
              
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 bg-transparent hover:bg-gray-800"
              data-testid="button-scroll-to-top"
            >
              <ArrowUp className="w-4 h-4 mr-1" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}