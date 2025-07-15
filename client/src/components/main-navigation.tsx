import { Link } from "wouter";

export default function MainNavigation() {
  return (
    <nav className="flex flex-wrap justify-center items-center gap-3 py-6 my-6">
      {/* Active Products */}
      <Link
        to="/products/rolgordijnen"
        className="bg-[#D1B58C] text-white font-semibold rounded-lg px-6 py-3 transition-all duration-200 ease-in-out hover:bg-[#bfa172] hover:text-white"
      >
        Rolgordijnen
      </Link>
      <Link
        to="/products/duo-rolgordijnen"
        className="bg-[#D1B58C] text-white font-semibold rounded-lg px-6 py-3 transition-all duration-200 ease-in-out hover:bg-[#bfa172] hover:text-white"
      >
        Duo-Rolgordijnen
      </Link>
      
      {/* Upcoming Products */}
      <div className="flex flex-col items-center">
        <button
          disabled
          className="bg-[rgba(198,169,115,0.1)] border border-[#C6A973] text-[#C6A973] font-semibold rounded-[8px] px-5 py-2.5 text-[13px] transition-all duration-200 ease-in-out hover:bg-[rgba(198,169,115,0.2)] hover:scale-[1.03] cursor-not-allowed"
        >
          Vitrages
        </button>
        <span className="text-[#888888] text-[11px] mt-1">Binnenkort beschikbaar</span>
      </div>
      
      <div className="flex flex-col items-center">
        <button
          disabled
          className="bg-[rgba(198,169,115,0.1)] border border-[#C6A973] text-[#C6A973] font-semibold rounded-[8px] px-5 py-2.5 text-[13px] transition-all duration-200 ease-in-out hover:bg-[rgba(198,169,115,0.2)] hover:scale-[1.03] cursor-not-allowed"
        >
          Overgordijnen
        </button>
        <span className="text-[#888888] text-[11px] mt-1">Binnenkort beschikbaar</span>
      </div>
      
      <div className="flex flex-col items-center">
        <button
          disabled
          className="bg-[rgba(198,169,115,0.1)] border border-[#C6A973] text-[#C6A973] font-semibold rounded-[8px] px-5 py-2.5 text-[13px] transition-all duration-200 ease-in-out hover:bg-[rgba(198,169,115,0.2)] hover:scale-[1.03] cursor-not-allowed"
        >
          Inbetweens
        </button>
        <span className="text-[#888888] text-[11px] mt-1">Binnenkort beschikbaar</span>
      </div>
    </nav>
  );
}