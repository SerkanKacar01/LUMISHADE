import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonAction: () => void;
  backgroundImage: string;
  alt: string;
}

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const slides: HeroSlide[] = [
    {
      id: 1,
      title: "Transform your windows with premium ready-made solutions",
      subtitle: "From roller blinds to mosquito screens, designed for comfort and style",
      buttonText: "Shop Now",
      buttonAction: scrollToProducts,
      backgroundImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800",
      alt: "Modern living room with elegant window treatments"
    },
    {
      id: 2,
      title: "Affordable elegance for every home",
      subtitle: "Discover custom-made shades with luxury finishes – without the price tag",
      buttonText: "View Collection",
      buttonAction: scrollToProducts,
      backgroundImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800",
      alt: "Elegant home interior with custom window treatments"
    },
    {
      id: 3,
      title: "Tailored light control for every room",
      subtitle: "Explore blackout, light-filtering, and smart-controlled fabrics",
      buttonText: "Find Your Blind",
      buttonAction: scrollToProducts,
      backgroundImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800",
      alt: "Bedroom with blackout blinds for perfect light control"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="home" className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
            role="tabpanel"
            aria-hidden={index !== currentSlide}
            aria-label={`Slide ${index + 1} of ${slides.length}`}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
                    {slide.subtitle}
                  </p>
                  {slide.buttonText && (
                    <Button
                      onClick={slide.buttonAction}
                      className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl flex items-center gap-2 min-h-[48px]"
                      aria-label={`${slide.buttonText} - ${slide.title}`}
                    >
                      <ShoppingCart className="w-5 h-5" />
                      {slide.buttonText}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 ${
              index === currentSlide
                ? 'bg-white scale-110'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Screen reader announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {currentSlide + 1} of {slides.length}: {slides[currentSlide].title}
      </div>
    </section>
  );
}
