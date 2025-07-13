import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

interface ProductGridProps {
  onProductClick?: (productId: string) => void;
}

export default function ProductGrid({ onProductClick }: ProductGridProps) {
  const categories = [
    { 
      id: 'rolgordijnen', 
      label: 'Rolgordijnen',
      icon: '🪟',
      link: '/rolgordijnen/lichtdoorlatend'
    },
    { 
      id: 'duo-rolgordijnen', 
      label: 'Duo-Rolgordijnen',
      icon: '🎚️',
      link: '/duo-rolgordijnen'
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Product Range</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully curated selection of window treatments, designed for modern homes and offices.
          </p>
        </div>

        {/* Product Category Navigation */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Select Product Category
          </h3>
          <div className="max-w-2xl mx-auto space-y-4">
            {categories.map((category) => (
              <Link key={category.id} href={category.link}>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-white py-4 sm:py-6 text-lg sm:text-xl font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 min-h-[44px] sm:min-h-[56px] flex items-center justify-center gap-3"
                >
                  <span className="text-2xl">{category.icon}</span>
                  {category.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
