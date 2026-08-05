import type { Product } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function ProductSection({
  variant,
  title,
  description,
  tagLabel,
  products,
  onVerFicha,
}: {
  variant: "fibra" | "proteina";
  title: string;
  description: string;
  tagLabel: string;
  products: Product[];
  onVerFicha: (product: Product) => void;
}) {
  const sectionBg = variant === "fibra" ? "bg-bn-fibraBg" : "bg-bn-bg";
  const tagBg = variant === "fibra" ? "bg-bn-fibraBg" : "bg-bn-proteinaBg";
  const tagBorder = "border-bn-fibraBorder";
  const ctaBg = "bg-bn-cta-green";

  return (
    <section className={`${sectionBg} py-10`}>
      <div className="max-w-[390px] mx-auto px-6 flex flex-col items-center text-center">
        <div
          className={`${tagBg} border-2 ${tagBorder} rounded-[22px] px-3 py-1 h-[30px] flex items-center justify-center mb-6`}
        >
          <span className="font-nunito font-extrabold text-xs text-bn-olive-light">
            {tagLabel}
          </span>
        </div>

        <h2 className="font-work font-medium text-bn-olive-light leading-[1.1]">
          <span className="block text-xl">PRODUCTOS</span>
          <span className="block text-4xl font-bold mt-1">{title}</span>
        </h2>
        <p className="font-nunito text-[17px] leading-relaxed tracking-[0.3px] text-[#4e5d62] mt-3 mb-8">
          {description}
        </p>

        {products.length === 0 ? (
          <p className="font-nunito text-sm text-[#7a8a72] py-8">
            No hay productos que coincidan con los filtros seleccionados.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-x-[18px] gap-y-[25px] w-full">
            {products.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                variant={variant}
                onVerFicha={onVerFicha}
              />
            ))}
          </div>
        )}

        <button
          className={`${ctaBg} rounded-full h-10 w-[225px] flex items-center justify-center mt-8`}
        >
          <span className="font-nunito font-bold text-base text-white">
            Ver todos los productos
          </span>
        </button>
      </div>
    </section>
  );
}
