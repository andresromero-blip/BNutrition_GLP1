"use client";

import { useMemo, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SearchAndFilters from "@/components/SearchAndFilters";
import ProductSection from "@/components/ProductSection";
import FiltrosModal from "@/components/FiltrosModal";
import FichaModal from "@/components/FichaModal";
import BottomNav from "@/components/BottomNav";
import RecipeCarousel from "@/components/RecipeCarousel";
import Footer from "@/components/Footer";
import { getProductsByCategory, type Product } from "@/lib/products";
import type { AppliedFilters } from "@/lib/types";

const emptyFilters: AppliedFilters = { category: null, subcategoryIds: [] };

export default function Home() {
  const [query, setQuery] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [applied, setApplied] = useState<AppliedFilters>(emptyFilters);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const matchesQuery = (p: Product) =>
    query.trim().length === 0 ||
    p.title.toLowerCase().replace("\n", " ").includes(query.toLowerCase()) ||
    p.badge.toLowerCase().includes(query.toLowerCase());

  const matchesSubcategory = (p: Product) =>
    applied.subcategoryIds.length === 0 ||
    applied.subcategoryIds.includes(p.subcategoryId);

  const fibraProducts = useMemo(() => {
    if (applied.category === "proteina") return [];
    return getProductsByCategory("fibra").filter(
      (p) => matchesQuery(p) && matchesSubcategory(p)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [applied, query]);

  const proteinaProducts = useMemo(() => {
    if (applied.category === "fibra") return [];
    return getProductsByCategory("proteina").filter(
      (p) => matchesQuery(p) && matchesSubcategory(p)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [applied, query]);

  const activeFilterCount =
    (applied.category ? 1 : 0) + applied.subcategoryIds.length;

  return (
    <main className="bg-white pt-[64px] pb-[80px] md:pt-0 md:pb-0">
      <Header />
      <Hero />
      <div className="max-w-[390px] md:max-w-3xl mx-auto sticky top-[64px] md:top-[81px] z-20 bg-white pt-2 pb-4">
        <SearchAndFilters
          query={query}
          onQueryChange={setQuery}
          onOpenFilters={() => setFiltersOpen(true)}
          activeFilterCount={activeFilterCount}
        />
      </div>

      {/* Orden 1:1 con Figma: Con fibra aparece antes que Con proteína en ambos frames */}
      <ProductSection
        variant="fibra"
        titleSuffix="FIBRA"
        tagLabel="Con fibra"
        description="Aportan saciedad y ayudan a tu digestión: dos aliados clave durante tu tratamiento GLP-1."
        products={fibraProducts}
        onVerFicha={setSelectedProduct}
      />

      <ProductSection
        variant="proteina"
        titleSuffix="PROTEÍNA"
        tagLabel="Con proteína"
        description="Aprende cómo la ciencia de los alimentos mejora tu salud y bienestar diariamente."
        products={proteinaProducts}
        onVerFicha={setSelectedProduct}
      />

      <RecipeCarousel />

      <Footer />
      <BottomNav />

      <FiltrosModal
        isOpen={filtersOpen}
        onClose={() => setFiltersOpen(false)}
        applied={applied}
        onApply={setApplied}
      />
      <FichaModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </main>
  );
}
