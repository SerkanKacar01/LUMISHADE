import { useEffect, useRef, useState } from "react";
import { Package, Ruler, Palette, Users } from "lucide-react";

interface BenefitItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

export default function IconBenefitsStrip() {
  const [isVisible, setIsVisible] = useState(false);
  const stripRef = useRef<HTMLDivElement>(null);

  const benefits: BenefitItem[] = [
    {
      id: 1,
      icon: <Ruler className="w-8 h-8 text-primary" />,
      title: "Perfect op maat gemaakt",
      subtitle: "Naadloze pasvorm voor elk raamtype",
    },
    {
      id: 2,
      icon: <Package className="w-8 h-8 text-primary" />,
      title: "Vakkundig geleverd aan huis",
      subtitle: "Binnen 3 tot 4 weken bij jou thuis bezorgd",
    },
    {
      id: 3,
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Designer stoffen met zorg gekozen",
      subtitle: "Elegant, eigentijds en duurzaam",
    },
    {
      id: 4,
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Vertrouwd door duizenden klanten",
      subtitle: "Hoge klanttevredenheid en bewezen kwaliteit",
    },
  ];

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (stripRef.current) {
      observer.observe(stripRef.current);
    }

    return () => {
      if (stripRef.current) {
        observer.unobserve(stripRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={stripRef}
      className={`w-full bg-white py-8 sm:py-12 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-center items-center gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className={`flex flex-col items-center text-center group transition-all duration-500 ${
                isVisible ? "animate-fade-in-up" : ""
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Animated Icon Container */}
              <div className="mb-3 p-3 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-all duration-300 group-hover:scale-110">
                <div className="animate-pulse group-hover:animate-bounce">
                  {benefit.icon}
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-xs text-gray-600 max-w-[120px] leading-tight">
                {benefit.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Layout - Stacked Grid */}
        <div className="md:hidden grid grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className={`flex flex-col items-center text-center transition-all duration-500 ${
                isVisible ? "animate-fade-in-up" : ""
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Animated Icon Container */}
              <div className="mb-3 p-3 rounded-full bg-primary/5">
                <div className="animate-pulse">{benefit.icon}</div>
              </div>

              {/* Text Content */}
              <h3 className="text-sm font-bold text-gray-900 mb-1">
                {benefit.title}
              </h3>
              <p className="text-xs text-gray-600 leading-tight">
                {benefit.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
