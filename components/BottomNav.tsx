"use client";

import { Home, Search, LayoutGrid, Heart, Menu } from "lucide-react";

const items = [
  { icon: Home, label: "Inicio" },
  { icon: Search, label: "Buscar" },
  { icon: LayoutGrid, label: "Categorías" },
  { icon: Heart, label: "Favoritos" },
  { icon: Menu, label: "Menú" },
];

export default function BottomNav() {
  return (
    <nav className="sticky bottom-0 z-30 bg-white border-t border-[#e9e9ea] rounded-t-[30px] shadow-[4px_0px_5px_rgba(201,207,237,0.6)]">
      <div className="max-w-[390px] mx-auto flex items-center justify-center gap-9 py-5">
        {items.map(({ icon: Icon, label }) => (
          <button
            key={label}
            aria-label={label}
            className="text-bn-olive-light hover:text-bn-olive"
          >
            <Icon size={26} strokeWidth={1.8} />
          </button>
        ))}
      </div>
    </nav>
  );
}
