import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">SunShade & Co.</h3>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
              Premium ready-made window decorations - Quality solutions for modern homes.
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
                  Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-white transition-colors text-left min-h-[44px] flex items-center"
                >
                  About Us
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
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li><a href="#" className="hover:text-white transition-colors min-h-[44px] flex items-center">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors min-h-[44px] flex items-center">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors min-h-[44px] flex items-center">Returns Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors min-h-[44px] flex items-center">Warranty</a></li>
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
            &copy; 2025 SunShade & Co. All rights reserved. | <a href="#" className="hover:text-white">Privacy Policy</a> | <a href="#" className="hover:text-white">Terms & Conditions</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
