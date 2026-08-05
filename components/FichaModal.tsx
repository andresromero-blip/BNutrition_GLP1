"use client";

import Image from "next/image";
import { X } from "lucide-react";
import type { Product, NutrientKey } from "@/lib/products";

const nutrientLabels: Record<NutrientKey, string> = {
  energia: "Energía",
  proteina: "Proteína",
  fibra: "Fibra",
  azucares: "Azúcares",
};

const nutrientOrder: NutrientKey[] = ["energia", "proteina", "fibra", "azucares"];

export default function FichaModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-t-[24px] sm:rounded-[24px] w-full max-w-[342px] max-h-[90vh] overflow-y-auto flex flex-col gap-[18px] items-start pt-6 pb-7 px-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end w-full">
          <button onClick={onClose} aria-label="Cerrar">
            <X size={24} className="text-bn-olive-light" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-[229px] rounded-2xl overflow-hidden">
          <div className="relative w-[280px] h-[210px]">
            <Image
              src={product.image}
              alt={product.title.replace("\n", " ")}
              fill
              sizes="280px"
              className="object-contain"
            />
          </div>
        </div>

        <h2 className="font-work font-bold text-2xl text-bn-olive text-center w-full whitespace-pre-line">
          {product.title}
        </h2>

        <div className="flex items-center justify-center gap-2 w-full font-nunito text-sm">
          <span className="text-[#737373]">{product.servings}</span>
          <span className="text-[#b3b3b3]">•</span>
          <span className="text-[#737373]">{product.weight}</span>
        </div>

        <div className="w-full h-px bg-[#e5e5e5]" />

        <p className="font-nunito text-sm leading-relaxed text-[#595959] text-center w-full">
          {product.description}
        </p>

        <p className="font-nunito font-extrabold text-base text-bn-olive text-center w-full">
          Una porción de {product.nutrition.servingSize} aporta:
        </p>
        {!product.nutrition.verified && (
          <p className="-mt-3 font-nunito text-[11px] text-[#a3a3a3] text-center w-full">
            Valores de ejemplo, pendientes de confirmar con etiqueta real.
          </p>
        )}

        <div className="flex items-start justify-between w-full">
          {nutrientOrder.map((key) => {
            const n = product.nutrition.values[key];
            return (
              <div key={key} className="flex flex-col items-center gap-[6px]">
                <p className="font-nunito font-bold text-sm text-[#808080]">
                  {nutrientLabels[key]}
                </p>
                <div className="bg-bn-olive rounded-full w-16 h-16 flex flex-col items-center justify-center text-white">
                  <p className="font-nunito font-bold text-sm">{n.value}</p>
                  <p className="font-nunito text-xs">{n.unit}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
