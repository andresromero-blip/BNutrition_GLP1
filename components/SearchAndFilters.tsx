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
    <div className="max-w-[390px] mx-auto px-6 flex flex-col gap-3 pb-2">
      <div className="flex items-center gap-2 h-11 rounded-full border border-[#d0d5dd] shadow-sm bg-white pl-3 pr-3">
        <Search size={20} className="text-[#667085] shrink-0" />
        <input
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Buscar..."
          className="flex-1 text-sm text-[#0f100f] placeholder:text-[rgba(15,16,15,0.3)] outline-none bg-transparent"
        />
      </div>

      <button
        onClick={onOpenFilters}
        className="h-11 rounded-full bg-bn-blue border border-bn-blue-border text-white flex items-center justify-center gap-2 font-montserrat text-sm font-medium"
      >
        <SlidersHorizontal size={18} />
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
