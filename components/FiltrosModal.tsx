"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import {
  macroCategoryLabels,
  subcategoriesByCategory,
  type MacroCategory,
} from "@/lib/filters";
import type { AppliedFilters } from "@/lib/types";

export default function FiltrosModal({
  isOpen,
  onClose,
  applied,
  onApply,
}: {
  isOpen: boolean;
  onClose: () => void;
  applied: AppliedFilters;
  onApply: (filters: AppliedFilters) => void;
}) {
  const [category, setCategory] = useState<MacroCategory | null>(
    applied.category
  );
  const [subcategoryIds, setSubcategoryIds] = useState<string[]>(
    applied.subcategoryIds
  );

  // Reset local (pending) state to whatever is currently applied every time the modal opens
  useEffect(() => {
    if (isOpen) {
      setCategory(applied.category);
      setSubcategoryIds(applied.subcategoryIds);
    }
  }, [isOpen, applied]);

  if (!isOpen) return null;

  const toggleCategory = (c: MacroCategory) => {
    if (category === c) {
      setCategory(null);
      setSubcategoryIds([]);
    } else {
      setCategory(c);
      setSubcategoryIds([]);
    }
  };

  const toggleSubcategory = (id: string) => {
    setSubcategoryIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleApply = () => {
    onApply({ category, subcategoryIds });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-t-[30px] sm:rounded-[30px] w-full max-w-[342px] max-h-[90vh] overflow-y-auto flex flex-col gap-[23px] items-center pb-[30px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end w-full pr-[15px] pt-[10px]">
          <button onClick={onClose} aria-label="Cerrar">
            <X size={24} className="text-bn-olive-light" />
          </button>
        </div>

        <div className="w-[270px] flex flex-col items-start gap-4">
          <h2 className="font-work font-bold text-2xl text-bn-olive-light">
            Explora por interés:
          </h2>

          <div className="flex flex-col gap-2 w-full">
            <p className="font-nunito font-extrabold text-xs text-black/70">
              Elige el tema que mejor se adapte a ti
            </p>
            <div className="flex flex-wrap gap-[10px]">
              {(Object.keys(macroCategoryLabels) as MacroCategory[]).map(
                (c) => {
                  const active = category === c;
                  return (
                    <button
                      key={c}
                      onClick={() => toggleCategory(c)}
                      className={`h-9 px-[10px] rounded-[22px] border border-[#b5cca1] font-nunito font-extrabold text-sm text-bn-olive-dark w-[130px] ${
                        active ? "bg-bn-bg" : "bg-white"
                      }`}
                    >
                      {macroCategoryLabels[c]}
                    </button>
                  );
                }
              )}
            </div>
          </div>

          {category && (
            <div className="flex flex-col gap-[10px] w-full">
              <h3 className="font-work font-bold text-2xl text-bn-olive-light">
                categorías
              </h3>
              <div className="flex flex-col gap-[10px] w-full">
                {subcategoriesByCategory[category].map((sub) => {
                  const checked = subcategoryIds.includes(sub.id);
                  return (
                    <label
                      key={sub.id}
                      className="flex items-center gap-[5px] h-[30px] p-[5px] cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleSubcategory(sub.id)}
                        className="w-[18px] h-[18px] accent-bn-olive"
                      />
                      <span className="font-nunito font-semibold text-sm text-black/80">
                        {sub.label}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <div className="w-[278px]">
          <button
            onClick={handleApply}
            className="bg-bn-blue rounded-full h-11 w-full flex items-center justify-center"
          >
            <span className="font-montserrat font-semibold text-base text-white">
              Aplicar filtros
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
