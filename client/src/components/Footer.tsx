import { Heart, ArrowUp } from 'lucide-react';
import { SiFacebook, SiTiktok, SiX, SiInstagram } from 'react-icons/si';
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
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Side - Foundation Info */}
            <div className="lg:col-span-5">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-pink-500 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Celina's Goodwill Foundation</h3>
              </div>
              
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Breaking mental health stigma through compassion, advocacy, and community support across Nigeria and beyond.
              </p>
            </div>

            {/* Right Side - Link Columns */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {/* Quick Links */}
                <div>
                  <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                  <ul className="space-y-4">
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
                        Mission & Vision
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
                    <li>
                      <button
                        onClick={() => scrollToSection('contact')}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                        data-testid="footer-link-contact"
                      >
                        Contact
                      </button>
                    </li>
                  </ul>
                </div>

                {/* About */}
                <div>
                  <h4 className="text-white font-semibold mb-6">About</h4>
                  <ul className="space-y-4">
                    <li>
                      <button
                        onClick={() => scrollToSection('story')}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                        data-testid="footer-link-about-story"
                      >
                        About us
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection('mission')}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                        data-testid="footer-link-about-mission"
                      >
                        Our Mission
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection('partnership')}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                        data-testid="footer-link-about-impact"
                      >
                        Our Impact
                      </button>
                    </li>
                    <li>
                      <span className="text-gray-400 text-sm">
                        Community
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Support */}
                <div>
                  <h4 className="text-white font-semibold mb-6">Support</h4>
                  <ul className="space-y-4">
                    <li>
                      <button
                        onClick={() => scrollToSection('contact')}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                        data-testid="footer-link-support-contact"
                      >
                        Contact us
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
                    <li>
                      <button
                        onClick={() => scrollToSection('partnership')}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                        data-testid="footer-link-support-partnership"
                      >
                        Partnership
                      </button>
                    </li>
                    <li>
                      <span className="text-gray-400 text-sm">
                        Resources
                      </span>
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
                  href="#"
                  className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Facebook - Joyful Healing Hub"
                  data-testid="link-facebook-footer"
                >
                  <SiFacebook className="w-4 h-4 text-white" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 bg-gray-800 hover:bg-black border border-gray-600 hover:border-white rounded-lg flex items-center justify-center transition-colors"
                  aria-label="TikTok - @joyfulhealinghub"
                  data-testid="link-tiktok-footer"
                >
                  <SiTiktok className="w-4 h-4 text-white" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 bg-gray-800 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                  data-testid="link-twitter-footer"
                >
                  <SiX className="w-4 h-4 text-white" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                  data-testid="link-instagram-footer"
                >
                  <SiInstagram className="w-4 h-4 text-white" />
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