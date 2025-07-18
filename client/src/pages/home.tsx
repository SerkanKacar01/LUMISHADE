import Header from "@/components/header";
import MainNavigation from "@/components/main-navigation";
import Hero from "@/components/hero";

import IconBenefitsStrip from "@/components/ui/icon-benefits-strip";
import CategorySection from "@/components/category-section";
import ProductGrid from "@/components/product-grid";
import WhyChooseUs from "@/components/why-choose-us";
import Footer from "@/components/footer";
import ProductDetailModal from "@/components/product-detail-modal";
import CartModal from "@/components/cart-modal";
import CheckoutModal from "@/components/checkout-modal";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <MainNavigation />
      <Hero />
      <IconBenefitsStrip />
      <CategorySection />
      <ProductGrid />
      <WhyChooseUs />
      <Footer />
      <ProductDetailModal />
      <CartModal />
      <CheckoutModal />
    </div>
  );
}
