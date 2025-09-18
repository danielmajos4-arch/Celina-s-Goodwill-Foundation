import { Heart, Facebook, PlayCircle, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
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
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Foundation Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-pink-500 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Celina's Goodwill Foundation</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Breaking mental health stigma through compassion, advocacy, and community support. 
                Honoring Celina Mbgogo Okwuokei's legacy by creating a world where seeking help is a sign of strength.
              </p>

              {/* Social Media Links */}
              <div className="flex space-x-4 mb-6">
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Facebook - Joyful Healing Hub"
                  data-testid="link-facebook-footer"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors"
                  aria-label="TikTok - @joyfulhealinghub"
                  data-testid="link-tiktok-footer"
                >
                  <PlayCircle className="w-5 h-5 text-white" />
                </a>
              </div>

              <p className="text-sm text-gray-400">
                <strong>Facebook:</strong> Joyful Healing Hub<br />
                <strong>TikTok:</strong> @joyfulhealinghub
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Our Story', id: 'story' },
                  { name: 'Mission & Vision', id: 'mission' },
                  { name: 'Our Impact', id: 'statistics' },
                  { name: 'Get Involved', id: 'partnership' },
                  { name: 'Testimonials', id: 'testimonials' },
                  { name: 'Contact Us', id: 'contact' }
                ].map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-300 hover:text-white transition-colors"
                      data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">info@celinasgoodwill.org</p>
                    <p className="text-gray-400 text-xs">partnerships@celinasgoodwill.org</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">+234 (0) 123 456 7890</p>
                    <p className="text-gray-400 text-xs">Mon-Fri, 9:00 AM - 5:00 PM WAT</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">123 Mental Health Avenue</p>
                    <p className="text-gray-400 text-xs">Victoria Island, Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Donation Notice */}
        <div className="border-t border-gray-700 py-8">
          <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-600/30 rounded-lg p-6 text-center">
            <h4 className="text-lg font-semibold text-yellow-300 mb-2">Donation Information</h4>
            <p className="text-gray-300 text-sm">
              <strong>Official donation account details coming soon.</strong> We are setting up secure, transparent donation channels. 
              Follow our social media for updates on how to financially support our mental health initiatives.
            </p>
          </div>
        </div>

        {/* Memorial Section */}
        <div className="border-t border-gray-700 py-8">
          <div className="text-center">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-4 opacity-30"></div>
            <p className="text-gray-400 text-lg italic mb-2">
              "In loving memory of Celina Mbgogo Okwuokei"
            </p>
            <p className="text-gray-500 text-sm">
              Your strength and courage continue to inspire our mission to break mental health stigma
            </p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mt-4 opacity-30"></div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Celina's Goodwill Foundation. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Breaking mental health stigma, one conversation at a time.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-xs text-gray-500 text-center">
                <p>Made with ❤️ for mental health advocacy</p>
              </div>
              
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 bg-transparent hover:bg-gray-800"
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