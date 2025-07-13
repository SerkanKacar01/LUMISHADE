import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface ProductGridProps {
  onProductClick?: (productId: string) => void;
}

export default function ProductGrid({ onProductClick }: ProductGridProps) {
  const categories = [
    {
      id: "rolgordijnen",
      label: "Rolgordijnen",
      link: "/products/rolgordijnen",
    },
    {
      id: "duo-rolgordijnen",
      label: "Duo-Rolgordijnen",
      link: "/products/duo-rolgordijnen",
    },
  ];

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

        {/* Product Category Navigation */}
        <div className="mb-8 sm:mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Selecteer een productcategorie
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Blader door onze meest gekozen categorieën
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              {categories.map((category) => (
                <Link key={category.id} href={category.link} className="flex-1">
                  <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 border border-gray-100 hover:border-primary/20 transform hover:-translate-y-1 cursor-pointer">
                    <div className="text-center">
                      <h4 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {category.label}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 mt-1 group-hover:text-gray-800 transition-colors duration-300">
                        {category.id === "rolgordijnen"
                          ? "Klassieke tot Design rolgordijnen voor elke ruimte"
                          : "Voor een verfijnd spel van licht en schaduw"}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
