import { Link } from "wouter";

export default function MainNavigation() {
  return (
    <nav className="flex justify-center items-center gap-5 py-6">
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
    </nav>
  );
}