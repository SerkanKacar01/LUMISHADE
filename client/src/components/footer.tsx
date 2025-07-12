import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import bancontactLogo from '../assets/bancontact-logo.png';
import idealLogo from '../assets/ideal-logo.png';
import paypalLogo from '../assets/paypal-logo.png';
import klarnaLogo from '../assets/klarna-logo.png';
import mastercardLogo from '../assets/mastercard-logo.png';
import visaLogo from '../assets/visa-logo.png';

export default function Footer() {
  const [quickLinksOpen, setQuickLinksOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSection = (section: 'quickLinks' | 'legal') => {
    if (section === 'quickLinks') {
      setQuickLinksOpen(!quickLinksOpen);
    } else {
      setLegalOpen(!legalOpen);
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout - Hidden on mobile */}
        <div className="hidden sm:block py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">LUMISHADÉ</h3>
              <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                Premium kant-en-klare raamdecoraties - Kwaliteitsoplossingen voor ALLE woningen.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 hover:text-primary cursor-pointer transition-colors min-h-[44px] min-w-[44px] p-2" />
                <Instagram className="w-6 h-6 hover:text-primary cursor-pointer transition-colors min-h-[44px] min-w-[44px] p-2" />
                <Twitter className="w-6 h-6 hover:text-primary cursor-pointer transition-colors min-h-[44px] min-w-[44px] p-2" />
              </div>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="hover:text-white transition-colors text-left min-h-[44px] flex items-center"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('products')}
                    className="hover:text-white transition-colors text-left min-h-[44px] flex items-center"
                  >
                    Producten
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="hover:text-white transition-colors text-left min-h-[44px] flex items-center"
                  >
                    Over ons
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="hover:text-white transition-colors text-left min-h-[44px] flex items-center"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Juridisch</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="#" className="hover:text-white transition-colors min-h-[44px] flex items-center">Privacy beleid</a></li>
                <li><a href="#" className="hover:text-white transition-colors min-h-[44px] flex items-center">Algemene voorwaarden</a></li>
                <li><a href="#" className="hover:text-white transition-colors min-h-[44px] flex items-center">Retour beleid</a></li>
                <li><a href="#" className="hover:text-white transition-colors min-h-[44px] flex items-center">Garantie</a></li>
              </ul>
            </div>

            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400 text-sm sm:text-base">
                <p className="flex items-center min-h-[44px]"><Phone className="w-4 h-4 mr-2 flex-shrink-0" />+31 20 123 4567</p>
                <p className="flex items-center min-h-[44px]"><Mail className="w-4 h-4 mr-2 flex-shrink-0" />info@sunshadeandco.eu</p>
                <p className="flex items-start min-h-[44px]"><MapPin className="w-4 h-4 mr-2 flex-shrink-0 mt-1" />123 Window Street, Amsterdam, 1000 AB</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400">
            <p className="text-xs sm:text-sm leading-relaxed">
              &copy; 2025 LUMISHADÉ All rights reserved. | <a href="#" className="hover:text-white">Privacy beleid</a> | <a href="#" className="hover:text-white">Algemene voorwaarden</a>
            </p>
          </div>

          {/* Payment Methods Row - Desktop */}
          <div className="border-t border-gray-800 pt-3 pb-6 text-center">
            <div className="flex flex-wrap justify-center items-center gap-4">
              <img src={bancontactLogo} alt="Bancontact logo" className="h-6 opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-200" />
              <img src={idealLogo} alt="iDEAL logo" className="h-6 opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-200" />
              <img src={paypalLogo} alt="PayPal logo" className="h-6 opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-200" />
              <img src={klarnaLogo} alt="Klarna logo" className="h-6 opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-200" />
              <img src={mastercardLogo} alt="Mastercard logo" className="h-6 opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-200" />
              <img src={visaLogo} alt="VISA logo" className="h-6 opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-200" />
              <div className="h-6 w-12 bg-gray-600 rounded flex items-center justify-center opacity-80">
                <span className="text-xs text-white font-semibold">AMEX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Visible only on mobile */}
        <div className="sm:hidden py-6 space-y-3">
          {/* Company Logo & Slogan - Centered */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-2">LUMISHADÉ</h3>
            <p className="text-gray-400 text-sm px-2">
              Premium kant-en-klare raamdecoraties...
            </p>
          </div>

          {/* Contact Info - Compact 2 lines */}
          <div className="text-center space-y-1">
            <div className="flex justify-center items-center space-x-4 text-sm">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                <span>+31 20 123 4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                <span>info@sunshadeandco.eu</span>
              </div>
            </div>
            <div className="flex justify-center items-center text-sm">
              <MapPin className="w-4 h-4 mr-1" />
              <span>123 Window Street, Amsterdam</span>
            </div>
          </div>

          {/* Quick Links - Collapsible */}
          <div className="border-t border-gray-800 pt-3">
            <button
              onClick={() => toggleSection('quickLinks')}
              className="flex items-center justify-between w-full text-white font-medium py-2"
            >
              <span className="text-sm">Snelle koppelingen</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${quickLinksOpen ? 'rotate-180' : ''}`} />
            </button>
            {quickLinksOpen && (
              <div className="space-y-1 mt-2 pb-2">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="block w-full text-left text-gray-400 hover:text-white transition-colors text-sm py-1"
                >
                  • Home
                </button>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="block w-full text-left text-gray-400 hover:text-white transition-colors text-sm py-1"
                >
                  • Producten
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left text-gray-400 hover:text-white transition-colors text-sm py-1"
                >
                  • Over ons
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left text-gray-400 hover:text-white transition-colors text-sm py-1"
                >
                  • Contact
                </button>
              </div>
            )}
          </div>

          {/* Legal - Collapsible */}
          <div className="border-t border-gray-800 pt-3">
            <button
              onClick={() => toggleSection('legal')}
              className="flex items-center justify-between w-full text-white font-medium py-2"
            >
              <span className="text-sm">Juridisch</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${legalOpen ? 'rotate-180' : ''}`} />
            </button>
            {legalOpen && (
              <div className="space-y-1 mt-2 pb-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm py-1">
                  • Privacy beleid
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm py-1">
                  • Algemene voorwaarden
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm py-1">
                  • Retour beleid
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm py-1">
                  • Garantie
                </a>
              </div>
            )}
          </div>

          {/* Social Icons - Bottom */}
          <div className="border-t border-gray-800 pt-3">
            <div className="flex justify-center space-x-6">
              <Facebook className="w-6 h-6 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Copyright - Mobile */}
          <div className="border-t border-gray-800 pt-3 text-center">
            <p className="text-xs text-gray-400">
              &copy; 2025 LUMISHADÉ All rights reserved.
            </p>
          </div>

          {/* Payment Methods Row - Mobile */}
          <div className="border-t border-gray-800 pt-3 pb-3 text-center">
            <div className="flex flex-wrap justify-center items-center gap-3">
              <img src={bancontactLogo} alt="Bancontact logo" className="h-5 opacity-80" />
              <img src={idealLogo} alt="iDEAL logo" className="h-5 opacity-80" />
              <img src={paypalLogo} alt="PayPal logo" className="h-5 opacity-80" />
              <img src={klarnaLogo} alt="Klarna logo" className="h-5 opacity-80" />
              <img src={mastercardLogo} alt="Mastercard logo" className="h-5 opacity-80" />
              <img src={visaLogo} alt="VISA logo" className="h-5 opacity-80" />
              <div className="h-5 w-10 bg-gray-600 rounded flex items-center justify-center opacity-80">
                <span className="text-xs text-white font-semibold">AMEX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
