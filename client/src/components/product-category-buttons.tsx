import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function ProductCategoryButtons() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Buttons Container */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          {/* Rolgordijnen Button */}
          <Link href="/products/rolgordijnen">
            <Button
              size="lg"
              className="w-full md:w-auto px-7 py-3.5 bg-[#1E1E1E] hover:bg-[#333333] text-white font-semibold rounded-[10px] transition-all duration-200 ease-in-out hover:scale-105 hover:underline text-base min-w-[200px]"
            >
              Rolgordijnen
            </Button>
          </Link>

          {/* Duo-Rolgordijnen Button */}
          <Link href="/products/duo-rolgordijnen">
            <Button
              size="lg"
              className="w-full md:w-auto px-7 py-3.5 bg-[#1E1E1E] hover:bg-[#333333] text-white font-semibold rounded-[10px] transition-all duration-200 ease-in-out hover:scale-105 hover:underline text-base min-w-[200px]"
            >
              Duo-Rolgordijnen
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}