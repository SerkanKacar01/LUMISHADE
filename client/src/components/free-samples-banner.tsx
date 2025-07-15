import { useState } from "react";
import { X } from "lucide-react";

export default function FreeSamplesBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="w-full bg-[#FDF7F1] py-2.5 sticky top-0 z-50 border-b border-[#F0E6D6]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <p className="text-center text-[#1E1E1E] font-semibold text-sm sm:text-base pr-8">
          🎨 Free fabric samples – Discover the perfect color & fabric from home
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#1E1E1E] hover:text-[#8B7355] transition-colors duration-200"
          aria-label="Close banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}