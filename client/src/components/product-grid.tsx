interface ProductGridProps {
  onProductClick?: (productId: string) => void;
}

export default function ProductGrid({ onProductClick }: ProductGridProps) {

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ons Productaanbod
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kies uit onze zorgvuldig geselecteerde collectie raamdecoratie,
            perfect afgestemd op moderne woningen en werkruimtes
          </p>
        </div>


      </div>
    </section>
  );
}
