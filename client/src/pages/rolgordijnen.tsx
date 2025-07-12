import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductGrid from "@/components/product-grid";
import ProductDetailModal from "@/components/product-detail-modal";
import CartModal from "@/components/cart-modal";
import CheckoutModal from "@/components/checkout-modal";
import { getProductsByCategoryAndFabricType } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Sun, Moon } from "lucide-react";
import { Link } from "wouter";

export default function RolgordijnenPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const lichtdoorlatendeProducts = getProductsByCategoryAndFabricType('rolgordijnen', 'lichtdoorlatend');
  const verduisterendeProducts = getProductsByCategoryAndFabricType('rolgordijnen', 'verduisterend');

  const handleProductClick = (productId: string) => {
    setSelectedProductId(productId);
    setIsProductDetailOpen(true);
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <>
      <Header onCartClick={handleCartClick} />
      
      <main className="min-h-screen bg-gray-50">
        {/* Page Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center gap-4 mb-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Terug naar home
                </Button>
              </Link>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Rolgordijnen
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Ontdek onze collectie van hoogwaardige rolgordijnen. Van klassieke designs tot verduisterende oplossingen - 
              we hebben de perfecte rolgordijn voor elke ruimte. Alle maten direct leverbaar.
            </p>
          </div>
        </div>

        {/* Products Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Lichtdoorlatende Rolgordijnen Section */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Sun className="h-6 w-6 text-amber-600" />
                <h2 className="text-2xl font-semibold text-gray-900">
                  Lichtdoorlatende Rolgordijnen
                </h2>
                <Badge variant="outline" className="text-amber-700 border-amber-300">
                  Lichtdoorlatend
                </Badge>
              </div>
              <p className="text-gray-600 mb-8 max-w-3xl">
                Perfecte balans tussen privacy en natuurlijk licht. Onze lichtdoorlatende rolgordijnen 
                filteren het licht en bieden een aangename sfeer in elke ruimte.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {lichtdoorlatendeProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => handleProductClick(product.id)}
                  >
                    <div className="aspect-w-16 aspect-h-12 overflow-hidden rounded-t-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {product.name}
                        </h3>
                        <Badge variant="secondary" className="text-xs bg-amber-100 text-amber-800">
                          Lichtdoorlatend
                        </Badge>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">
                        {product.shortDescription}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">
                          €{product.price.toFixed(2)}
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {product.sizes.slice(0, 2).map((size) => (
                            <span
                              key={size}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                            >
                              {size}
                            </span>
                          ))}
                          {product.sizes.length > 2 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                              +{product.sizes.length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Verduisterende Rolgordijnen Section */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Moon className="h-6 w-6 text-slate-700" />
                <h2 className="text-2xl font-semibold text-gray-900">
                  Verduisterende Rolgordijnen
                </h2>
                <Badge variant="outline" className="text-slate-700 border-slate-300">
                  100% Verduisterend
                </Badge>
              </div>
              <p className="text-gray-600 mb-8 max-w-3xl">
                Volledige lichtblokkering voor optimale privacy en perfecte nachtrust. 
                Ideaal voor slaapkamers, kinderkamers en thuisbioscopen.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {verduisterendeProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => handleProductClick(product.id)}
                  >
                    <div className="aspect-w-16 aspect-h-12 overflow-hidden rounded-t-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {product.name}
                        </h3>
                        <Badge variant="secondary" className="text-xs bg-slate-100 text-slate-800">
                          Verduisterend
                        </Badge>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">
                        {product.shortDescription}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">
                          €{product.price.toFixed(2)}
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {product.sizes.slice(0, 2).map((size) => (
                            <span
                              key={size}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                            >
                              {size}
                            </span>
                          ))}
                          {product.sizes.length > 2 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                              +{product.sizes.length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Waarom Kiezen voor Onze Rolgordijnen?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Onze rolgordijnen combineren functionaliteit met stijl en worden geleverd met alles wat je nodig hebt voor een perfecte installatie.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Kindveilige Bediening
                </h3>
                <p className="text-gray-600">
                  Alle rolgordijnen zijn voorzien van kindveilige bedieningsmechanismen voor maximale veiligheid.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Eenvoudige Installatie
                </h3>
                <p className="text-gray-600">
                  Inclusief alle benodigde bevestigingsmaterialen en duidelijke installatiehandleiding.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Duurzame Materialen
                </h3>
                <p className="text-gray-600">
                  Gemaakt van hoogwaardige, duurzame materialen die jarenlang meegaan.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Beste Prijs-Kwaliteit
                </h3>
                <p className="text-gray-600">
                  Uitstekende kwaliteit tegen scherpe prijzen, direct leverbaar uit voorraad.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Modals */}
      <ProductDetailModal
        isOpen={isProductDetailOpen}
        onClose={() => setIsProductDetailOpen(false)}
        productId={selectedProductId}
      />

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleCheckout}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </>
  );
}