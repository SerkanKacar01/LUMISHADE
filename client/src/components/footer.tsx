import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { useState } from 'react';

// Payment method icons as SVG components
const BancontactIcon = () => (
  <svg width="40" height="24" viewBox="0 0 40 24" className="h-6 text-gray-400 opacity-80 hover:opacity-100 transition-opacity">
    <rect width="40" height="24" rx="4" fill="currentColor"/>
    <path d="M8 8h6v2H8V8zm0 3h8v2H8v-2zm0 3h6v2H8v-2z" fill="white"/>
    <path d="M18 8h14v8H18V8z" fill="white"/>
    <path d="M20 10h10v1H20v-1zm0 2h8v1h-8v-1zm0 2h6v1h-6v-1z" fill="currentColor"/>
  </svg>
);

const IdealIcon = () => (
  <svg width="40" height="24" viewBox="0 0 40 24" className="h-6 text-gray-400 opacity-80 hover:opacity-100 transition-opacity">
    <rect width="40" height="24" rx="4" fill="currentColor"/>
    <path d="M6 8h2v8H6V8zm4 0h2v8h-2V8zm4 2h2v4h-2v-4zm4-2h2v8h-2V8zm4 1h2v6h-2V9zm4 0h2v6h-2V9zm4-1h2v8h-2V8z" fill="white"/>
  </svg>
);

const PaypalIcon = () => (
  <svg width="40" height="24" viewBox="0 0 40 24" className="h-6 text-gray-400 opacity-80 hover:opacity-100 transition-opacity">
    <rect width="40" height="24" rx="4" fill="currentColor"/>
    <path d="M8 8c0-1.1.9-2 2-2h8c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4l-1 4h-3l2-8c0-.6-.4-1-1-1h-1l-2 9h-3l3-10zm8 4h4c.6 0 1-.4 1-1s-.4-1-1-1h-4v2z" fill="white"/>
  </svg>
);

const KlarnaIcon = () => (
  <svg width="40" height="24" viewBox="0 0 40 24" className="h-6 text-gray-400 opacity-80 hover:opacity-100 transition-opacity">
    <rect width="40" height="24" rx="4" fill="currentColor"/>
    <path d="M8 8h2v8H8V8zm4 0h2v3h-2V8zm0 5h2v3h-2v-3zm4-2h2l2-3h2l-2.5 3.5L22 16h-2l-2-3h-2v3h-2V8h2v3zm8-3h2v8h-2V8zm4 0h6v2h-4v1h3v2h-3v1h4v2h-6V8z" fill="white"/>
  </svg>
);

const MastercardIcon = () => (
  <svg width="40" height="24" viewBox="0 0 40 24" className="h-6 text-gray-400 opacity-80 hover:opacity-100 transition-opacity">
    <rect width="40" height="24" rx="4" fill="currentColor"/>
    <circle cx="16" cy="12" r="6" fill="white" opacity="0.8"/>
    <circle cx="24" cy="12" r="6" fill="white"/>
    <path d="M20 7.5c1.1 1.2 1.8 2.8 1.8 4.5s-.7 3.3-1.8 4.5c-1.1-1.2-1.8-2.8-1.8-4.5s.7-3.3 1.8-4.5z" fill="currentColor"/>
  </svg>
);

const VisaIcon = () => (
  <svg width="40" height="24" viewBox="0 0 40 24" className="h-6 text-gray-400 opacity-80 hover:opacity-100 transition-opacity">
    <rect width="40" height="24" rx="4" fill="currentColor"/>
    <path d="M8 8h3l2 8h-2.5l-.3-1.5H7.7L7.4 16H5l2.5-8zm.8 5h1.4l-.7-3.5L8.8 13z" fill="white"/>
    <path d="M13 8h2v8h-2V8z" fill="white"/>
    <path d="M16 10c0-.8.6-1.5 1.4-1.5s1.6.3 1.6.3V10s-.8-.5-1.3-.5c-.3 0-.7.2-.7.5 0 .8 2 .8 2 2.5 0 1.2-1 2-2 2s-2-.5-2-.5V13s1 .5 1.5.5c.4 0 .5-.3.5-.5 0-.8-2-.8-2-2.5z" fill="white"/>
    <path d="M22 8h2l2 8h-2l-.2-1h-1.6l-.2 1h-2l2-8zm1 2l-.5 3h1l-.5-3z" fill="white"/>
  </svg>
);

const AmexIcon = () => (
  <svg width="40" height="24" viewBox="0 0 40 24" className="h-6 text-gray-400 opacity-80 hover:opacity-100 transition-opacity">
    <rect width="40" height="24" rx="4" fill="currentColor"/>
    <path d="M6 8h4l1 2 1-2h4v2h-3v1h2v1h-2v1h3v2h-4l-1-2-1 2H6V8zm2 2v4h1l1-1.5L11 14h1v-4h-1l-1 1.5L9 10H8z" fill="white"/>
    <path d="M16 8h8v2h-6v1h5v1h-5v1h6v2h-8V8z" fill="white"/>
    <path d="M26 8h2l2 3 2-3h2v8h-2v-4l-2 2-2-2v4h-2V8z" fill="white"/>
  </svg>
);

// Mobile versions (smaller)
const BancontactIconMobile = () => (
  <svg width="40" height="24" viewBox="0 0 40 24" className="h-5 text-gray-400 opacity-80">
    <rect width="40" height="24" rx="4" fill="currentColor"/>
    <path d="M8 8h6v2H8V8zm0 3h8v2H8v-2zm0 3h6v2H8v-2z" fill="white"/>
    <path d="M18 8h14v8H18V8z" fill="white"/>
    <path d="M20 10h10v1H20v-1zm0 2h8v1h-8v-1zm0 2h6v1h-6v-1z" fill="currentColor"/>
  </svg>
);

const IdealIconMobile = () => (
  <svg width="40" height="24" viewBox="0 0 40 24" className="h-5 text-gray-400 opacity-80">
    <rect width="40" height="24" rx="4" fill="currentColor"/>
    <path d="M6 8h2v8H6V8zm4 0h2v8h-2V8zm4 2h2v4h-2v-4zm4-2h2v8h-2V8zm4 1h2v6h-2V9zm4 0h2v6h-2V9zm4-1h2v8h-2V8z" fill="white"/>
  </svg>
);

const PaypalIconMobile = () => (
  <svg width="40" height="24" viewBox="0 0 40 24" className="h-5 text-gray-400 opacity-80">
    <rect width="40" height="24" rx="4" fill="currentColor"/>
    <path d="M8 8c0-1.1.9-2 2-2h8c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4l-1 4h-3l2-8c0-.6-.4-1-1-1h-1l-2 9h-3l3-10zm8 4h4c.6 0 1-.4 1-1s-.4-1-1-1h-4v2z" fill="white"/>
  </svg>
);

const KlarnaIconMobile = () => (
  <svg width="40" height="24" viewBox="0 0 40 24" className="h-5 text-gray-400 opacity-80">
    <rect width="40" height="24" rx="4" fill="currentColor"/>
    <path d="M8 8h2v8H8V8zm4 0h2v3h-2V8zm0 5h2v3h-2v-3zm4-2h2l2-3h2l-2.5 3.5L22 16h-2l-2-3h-2v3h-2V8h2v3zm8-3h2v8h-2V8zm4 0h6v2h-4v1h3v2h-3v1h4v2h-6V8z" fill="white"/>
  </svg>
);

const MastercardIconMobile = () => (
  <svg width="40" height="24" viewBox="0 0 40 24" className="h-5 text-gray-400 opacity-80">
    <rect width="40" height="24" rx="4" fill="currentColor"/>
    <circle cx="16" cy="12" r="6" fill="white" opacity="0.8"/>
    <circle cx="24" cy="12" r="6" fill="white"/>
    <path d="M20 7.5c1.1 1.2 1.8 2.8 1.8 4.5s-.7 3.3-1.8 4.5c-1.1-1.2-1.8-2.8-1.8-4.5s.7-3.3 1.8-4.5z" fill="currentColor"/>
  </svg>
);

const VisaIconMobile = () => (
  <svg width="40" height="24" viewBox="0 0 40 24" className="h-5 text-gray-400 opacity-80">
    <rect width="40" height="24" rx="4" fill="currentColor"/>
    <path d="M8 8h3l2 8h-2.5l-.3-1.5H7.7L7.4 16H5l2.5-8zm.8 5h1.4l-.7-3.5L8.8 13z" fill="white"/>
    <path d="M13 8h2v8h-2V8z" fill="white"/>
    <path d="M16 10c0-.8.6-1.5 1.4-1.5s1.6.3 1.6.3V10s-.8-.5-1.3-.5c-.3 0-.7.2-.7.5 0 .8 2 .8 2 2.5 0 1.2-1 2-2 2s-2-.5-2-.5V13s1 .5 1.5.5c.4 0 .5-.3.5-.5 0-.8-2-.8-2-2.5z" fill="white"/>
    <path d="M22 8h2l2 8h-2l-.2-1h-1.6l-.2 1h-2l2-8zm1 2l-.5 3h1l-.5-3z" fill="white"/>
  </svg>
);

const AmexIconMobile = () => (
  <svg width="40" height="24" viewBox="0 0 40 24" className="h-5 text-gray-400 opacity-80">
    <rect width="40" height="24" rx="4" fill="currentColor"/>
    <path d="M6 8h4l1 2 1-2h4v2h-3v1h2v1h-2v1h3v2h-4l-1-2-1 2H6V8zm2 2v4h1l1-1.5L11 14h1v-4h-1l-1 1.5L9 10H8z" fill="white"/>
    <path d="M16 8h8v2h-6v1h5v1h-5v1h6v2h-8V8z" fill="white"/>
    <path d="M26 8h2l2 3 2-3h2v8h-2v-4l-2 2-2-2v4h-2V8z" fill="white"/>
  </svg>
);

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
              <BancontactIcon />
              <IdealIcon />
              <PaypalIcon />
              <KlarnaIcon />
              <MastercardIcon />
              <VisaIcon />
              <AmexIcon />
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
              <BancontactIconMobile />
              <IdealIconMobile />
              <PaypalIconMobile />
              <KlarnaIconMobile />
              <MastercardIconMobile />
              <VisaIconMobile />
              <AmexIconMobile />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
