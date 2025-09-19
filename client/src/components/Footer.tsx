import { ArrowUp } from 'lucide-react';
import { SiFacebook, SiTiktok } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import logoImage from '@assets/celina-logo-footer.webp';

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
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
            {/* Left Side - Foundation Info */}
            <div className="lg:col-span-5">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 p-1">
                  <img 
                    src={logoImage} 
                    alt="Celina's Goodwill Foundation Logo" 
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Celina's Goodwill Foundation</h3>
              </div>
              
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-md">
                Breaking mental health stigma through compassion and community support.
              </p>
            </div>

            {/* Right Side - Link Columns */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                {/* Quick Links */}
                <div>
                  <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-3">
                    <li>
                      <button
                        onClick={() => scrollToSection('story')}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                        data-testid="footer-link-story"
                      >
                        Our Story
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection('mission')}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                        data-testid="footer-link-mission"
                      >
                        Mission
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection('partnership')}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                        data-testid="footer-link-partnership"
                      >
                        Get Involved
                      </button>
                    </li>
                  </ul>
                </div>

                {/* Support */}
                <div>
                  <h4 className="text-white font-semibold mb-4">Support</h4>
                  <ul className="space-y-3">
                    <li>
                      <button
                        onClick={() => scrollToSection('contact')}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                        data-testid="footer-link-support-contact"
                      >
                        Contact Us
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection('partnership')}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                        data-testid="footer-link-support-help"
                      >
                        Get Help
                      </button>
                    </li>
                  </ul>
                </div>

                {/* Contact Info */}
                <div>
                  <h4 className="text-white font-semibold mb-6">Contact Info</h4>
                  <ul className="space-y-4">
                    <li>
                      <a 
                        href="mailto:celinasgoodwillfoundation@gmail.com"
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                        data-testid="footer-email"
                      >
                        celinasgoodwillfoundation@gmail.com
                      </a>
                    </li>
                    <li>
                      <a 
                        href="tel:+2349110221031"
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                        data-testid="footer-phone"
                      >
                        +234 911 022 1031
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Memorial Line */}
        <div className="border-t border-gray-800 py-8">
          <div className="text-center">
            <p className="text-gray-500 italic">
              In loving memory of Celina Mbgogo Okwuokei
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Left - Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">
                Copyright © {currentYear} Celina's Goodwill Foundation. All rights reserved.
              </p>
            </div>

            {/* Right - Social Icons + Back to Top */}
            <div className="flex items-center space-x-4">
              {/* Social Media Icons */}
              <div className="flex space-x-3">
                <a
                  href="https://web.facebook.com/joyful.healing.hub.301278"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Facebook - Joyful Healing Hub"
                  data-testid="link-facebook-footer"
                >
                  <SiFacebook className="w-4 h-4 text-white" />
                </a>
                <a
                  href="https://www.tiktok.com/@joyfulhealinghub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 hover:bg-black border border-gray-600 hover:border-white rounded-lg flex items-center justify-center transition-colors"
                  aria-label="TikTok - @joyfulhealinghub"
                  data-testid="link-tiktok-footer"
                >
                  <SiTiktok className="w-4 h-4 text-white" />
                </a>
              </div>

              {/* Back to Top Button */}
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 bg-transparent hover:bg-gray-800 ml-4"
                data-testid="button-scroll-to-top"
              >
                <ArrowUp className="w-4 h-4 mr-1" />
                Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}