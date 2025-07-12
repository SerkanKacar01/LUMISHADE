import { Button } from '@/components/ui/button';
import { ShoppingCart, Eye } from 'lucide-react';

export default function Hero() {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-r from-primary/10 to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Transform Your Windows with Premium{' '}
              <span className="text-primary">Ready-Made Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Discover our extensive collection of sunshades, blinds, and window decorations. 
              Professional quality, perfect fit, delivered to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToProducts}
                className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Shop Now
              </Button>
              <Button 
                variant="outline"
                onClick={scrollToProducts}
                className="border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <Eye className="w-5 h-5" />
                View Catalogue
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern living room with elegant window treatments"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
