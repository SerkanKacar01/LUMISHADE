import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { products, getProductsByCategory } from '@/data/products';
import { formatPrice } from '@/lib/utils';

interface ProductGridProps {
  onProductClick?: (productId: string) => void;
}

export default function ProductGrid({ onProductClick }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const filteredProducts = getProductsByCategory(selectedCategory);

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'blinds', label: 'Blinds' },
    { id: 'sunshades', label: 'Sunshades' },
    { id: 'curtains', label: 'Curtains' },
    { id: 'screens', label: 'Screens' }
  ];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <section id="products" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto mobile-tight px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Product Range</h2>
          <p className="text-sm sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully curated selection of window treatments, designed for modern homes and offices.
          </p>
        </div>

        {/* Product Filter */}
        <div className="flex flex-wrap justify-center mobile-grid-tight gap-2 sm:gap-4 mb-6 sm:mb-12 px-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-3 sm:px-6 py-2 text-sm sm:text-base rounded-full font-medium min-h-[44px] mobile-no-hover ${
                selectedCategory === category.id
                  ? 'bg-primary text-white hover:bg-primary/90'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mobile-grid-tight gap-3 sm:gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden mobile-no-hover hover:shadow-xl transition-shadow mobile-product-card">
              <div className="aspect-[4/3] relative">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover mobile-product-image"
                />
              </div>
              <CardContent className="p-3 sm:p-6">
                <h3 className="font-semibold text-base sm:text-lg mb-2 leading-tight mobile-product-title">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3 sm:mb-4 line-clamp-2 mobile-product-description">{product.shortDescription}</p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-2">
                  <span className="text-lg sm:text-2xl font-bold text-primary mobile-product-price">{formatPrice(product.price)}</span>
                  <Button 
                    onClick={() => onProductClick?.(product.id)}
                    className="bg-primary hover:bg-primary/90 mobile-no-hover text-white w-full sm:w-auto min-h-[44px] text-sm sm:text-base mobile-button"
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
