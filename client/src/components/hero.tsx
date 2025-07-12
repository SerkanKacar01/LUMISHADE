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
      <div className="max-w-7xl mx-auto mobile-tight px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-6 leading-tight">
              Transformeer uw ramen met premium{' '}
              <span className="text-primary">kant-en-klare oplossingen</span>
            </h2>
            <p className="text-sm sm:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-8 leading-relaxed">
              Ontdek onze uitgebreide collectie zonweringen, jaloezieën, raamdecoratie en veel meer. Professionele kwaliteit, perfect passend, thuisbezorgd.
            </p>
            <div className="flex flex-col gap-2 sm:gap-4 justify-center lg:justify-start mobile-stack">
              <Button 
                onClick={scrollToProducts}
                className="bg-primary hover:bg-primary/90 mobile-no-hover transition-all duration-300 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl flex items-center gap-2 justify-center min-h-[48px] mobile-button"
              >
                <ShoppingCart className="w-5 h-5" />
                SHOP NU 
              </Button>
              <Button 
                variant="outline"
                onClick={scrollToProducts}
                className="border-primary text-primary hover:bg-primary/10 mobile-no-hover transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-md hover:shadow-lg flex items-center gap-2 justify-center min-h-[48px] mobile-button"
              >
                <Eye className="w-5 h-5" />
                Zie producten lijn
              </Button>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern living room with elegant window treatments"
              className="rounded-2xl shadow-2xl w-full mobile-product-image max-h-[200px] sm:max-h-[400px] lg:max-h-none object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
