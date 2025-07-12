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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SunShade & Co.</h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner for premium window solutions. Transform your space with our ready-made products.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="hover:text-white transition-colors"
                >
                  Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Care</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Installation Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center"><Phone className="w-4 h-4 mr-2" />+44 20 7123 4567</p>
              <p className="flex items-center"><Mail className="w-4 h-4 mr-2" />info@sunshadeandco.co.uk</p>
              <p className="flex items-center"><MapPin className="w-4 h-4 mr-2" />123 Window Street, London, EC1A 1BB</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SunShade & Co. All rights reserved. | <a href="#" className="hover:text-white">Privacy Policy</a> | <a href="#" className="hover:text-white">Terms of Service</a></p>
        </div>
      </div>
    </footer>
  );
}
