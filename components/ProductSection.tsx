import type { Product } from "@/lib/products";
import ProductCard from "./ProductCard";
import Carousel from "./Carousel";

export default function ProductSection({
  variant,
  titleSuffix,
  description,
  tagLabel,
  products,
  onVerFicha,
}: {
  variant: "fibra" | "proteina";
  /** e.g. "PROTEÍNA" or "FIBRA" — rendered after a light-weight "CON" */
  titleSuffix: string;
  description: string;
  tagLabel: string;
  products: Product[];
  onVerFicha: (product: Product) => void;
}) {
  const sectionBg = variant === "fibra" ? "bg-bn-fibraBg" : "bg-bn-bg";
  const tagBg = variant === "fibra" ? "bg-bn-fibraBg" : "bg-bn-proteinaBg";

  return (
    <section className={`${sectionBg} py-10 md:py-20`}>
      <div className="max-w-[390px] md:max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        <h2 className="font-work font-bold text-bn-olive-light text-[36px] md:text-[74px] leading-[42px] md:leading-[64px]">
          <span className="font-light">CON</span> {titleSuffix}
        </h2>
        <p className="font-nunito text-[18px] md:text-[28px] leading-relaxed tracking-[0.3px] text-[#4e5d62] mt-3 md:mt-6 max-w-[330px] md:max-w-3xl">
          {description}
        </p>

        <div
          className={`${tagBg} border-2 border-bn-fibraBorder rounded-[22px] px-3 py-1 h-[30px] md:h-[45px] md:px-5 flex items-center justify-center mt-6 mb-6 md:mb-10`}
        >
          <span className="font-nunito font-extrabold text-xs md:text-base text-bn-olive-light">
            {tagLabel}
          </span>
        </div>

        {products.length === 0 ? (
          <p className="font-nunito text-sm text-[#7a8a72] py-8">
            No hay productos que coincidan con los filtros seleccionados.
          </p>
        ) : (
          <div className="w-full -mx-6 md:mx-0">
            <Carousel>
              {products.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  variant={variant}
                  onVerFicha={onVerFicha}
                />
              ))}
            </Carousel>
          </div>
        )}
      </div>
    </section>
  );
}
