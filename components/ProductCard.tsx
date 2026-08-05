import Image from "next/image";
import type { Product } from "@/lib/products";

export default function ProductCard({
  product,
  variant,
  onVerFicha,
}: {
  product: Product;
  variant: "fibra" | "proteina";
  onVerFicha: (product: Product) => void;
}) {
  const badgeBg = variant === "fibra" ? "bg-bn-fibraBg" : "bg-bn-proteinaBg";

  return (
    <div className="bg-white shadow-[0px_1px_1px_rgba(16,24,40,0.05)] flex flex-col gap-2 h-[240px] items-center p-2 rounded-2xl w-full">
      <div className="relative h-[104px] w-full rounded-xl overflow-hidden bg-white">
        <Image
          src={product.image}
          alt={product.title.replace("\n", " ")}
          fill
          sizes="200px"
          className="object-contain"
        />
      </div>

      <div
        className={`${badgeBg} rounded-[11px] px-[10px] py-1 inline-flex items-start`}
      >
        <p className="font-nunito font-extrabold text-[11px] text-bn-olive whitespace-nowrap">
          {product.badge}
        </p>
      </div>

      <p className="font-work font-bold text-[15px] leading-[16px] text-bn-olive-light text-center whitespace-pre-line">
        {product.title}
      </p>

      <button
        onClick={() => onVerFicha(product)}
        className="bg-bn-olive rounded-full h-[30px] w-full flex items-center justify-center"
      >
        <span className="font-nunito font-bold text-xs text-white">
          Ver ficha
        </span>
      </button>
    </div>
  );
}
