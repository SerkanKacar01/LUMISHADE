/**
 * Standard description component for all Rolgordijnen products
 * (excluding Duo-Rolgordijnen)
 * 
 * This component displays the standard information about what's included
 * with all roller blind orders. It should be used on:
 * 
 * ✅ INCLUDED:
 * - All /rolgordijnen/... product pages (individual products)
 * - All /rolgordijnen/... category listing pages  
 * - Any future rolgordijnen product pages
 * 
 * ❌ EXCLUDED:
 * - /duo-rolgordijnen/... pages (these have different specifications)
 * - Other product categories (vitrages, overgordijnen, etc.)
 * 
 * Usage in new rolgordijnen product pages:
 * 1. Import: import StandardRollerDescription from "@/components/ui/standard-roller-description";
 * 2. Add after operating side selection: <StandardRollerDescription />
 */
export default function StandardRollerDescription() {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
      <p className="text-blue-800 font-medium">
        🔹 Standaard inbegrepen: Voorzien van een elegante ovale cassette, 
        🔹 hoogwaardige stof, 🔹 kunststof kettingbediening (links of rechts), 
        🔹 Aluminium onderlat (ovaal vorm & eenzijdig bedekt) en 🔹 volledig montagemateriaal.
      </p>
    </div>
  );
}