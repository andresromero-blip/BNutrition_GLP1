import Image from "next/image";
import type { Product } from "@/lib/products";

export default function ProductCard({
  product,
  onVerFicha,
}: {
  product: Product;
  variant: "fibra" | "proteina";
  onVerFicha: (product: Product) => void;
}) {
  return (
    <div
      data-carousel-item
      className="snap-start shrink-0 bg-white shadow-[0px_1px_2px_rgba(16,24,40,0.05)] flex flex-col gap-[13px] md:gap-[26px] items-center p-2 md:p-[19px] rounded-[30px] md:rounded-[40px] w-[179px] md:w-[364px] h-[306px] md:h-[566px]"
    >
      <div className="relative h-[146px] md:h-[325px] w-full rounded-xl md:rounded-[26px] overflow-hidden bg-white">
        <Image
          src={product.image}
          alt={product.title.replace("\n", " ")}
          fill
          sizes="(min-width: 768px) 330px, 180px"
          className="object-contain"
        />
      </div>

      <div className="border border-bn-fibraBorder rounded-[11px] md:rounded-[19px] px-[10px] md:px-[23px] py-1 md:py-[9px] inline-flex items-start">
        <p className="font-nunito font-medium text-[12px] md:text-[19px] text-bn-olive whitespace-nowrap">
          {product.badge}
        </p>
      </div>

      <p className="font-work font-bold text-[18px] md:text-[32px] leading-[19px] md:leading-[34px] text-bn-olive-light text-center whitespace-pre-line">
        {product.title}
      </p>

      <button
        onClick={() => onVerFicha(product)}
        className="mt-auto bg-bn-olive rounded-full h-10 md:h-[51px] w-full flex items-center justify-center"
      >
        <span className="font-nunito font-bold text-sm md:text-base text-white">
          Ver ficha
        </span>
      </button>
    </div>
  );
}
