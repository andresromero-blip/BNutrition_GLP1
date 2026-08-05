"use client";

import { Search, SlidersHorizontal } from "lucide-react";

export default function SearchAndFilters({
  query,
  onQueryChange,
  onOpenFilters,
  activeFilterCount,
}: {
  query: string;
  onQueryChange: (v: string) => void;
  onOpenFilters: () => void;
  activeFilterCount: number;
}) {
  return (
    <div className="max-w-[390px] md:max-w-3xl mx-auto px-6 flex flex-col md:flex-row md:justify-center gap-3 md:gap-[46px] pb-2">
      <div className="flex items-center gap-2 h-11 md:h-16 rounded-full border border-[#d0d5dd] shadow-sm bg-white pl-3 md:pl-10 pr-3 md:w-[355px]">
        <Search size={20} className="text-[#667085] shrink-0 md:w-[34px] md:h-[34px]" />
        <input
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Buscar..."
          className="flex-1 text-sm md:text-lg text-[#0f100f] placeholder:text-[rgba(15,16,15,0.3)] outline-none bg-transparent"
        />
      </div>

      <button
        onClick={onOpenFilters}
        className="h-11 md:h-16 rounded-full bg-bn-blue border border-bn-blue-border text-white flex items-center justify-center gap-2 md:gap-3 font-montserrat text-sm md:text-lg font-medium md:w-[355px]"
      >
        <SlidersHorizontal size={18} className="md:w-[26px] md:h-[26px]" />
        Filtros
        {activeFilterCount > 0 && (
          <span className="bg-white text-bn-blue rounded-full text-xs font-bold w-5 h-5 flex items-center justify-center">
            {activeFilterCount}
          </span>
        )}
      </button>
    </div>
  );
}
