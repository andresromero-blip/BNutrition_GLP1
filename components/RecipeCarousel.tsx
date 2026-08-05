import { UtensilsCrossed } from "lucide-react";
import Carousel from "./Carousel";

// La sección "Conoce recetas" del Figma repite la misma receta de ejemplo
// ("Sandwich de pera y requesón") varias veces en el carrusel — se replica
// igual aquí, sin inventar recetas nuevas. No hay fotografía real de receta
// disponible en las carpetas conectadas (solo renders de empaque de
// producto), así que se usa un placeholder visual en vez de una imagen real.
const recipe = {
  title: "Sandwich de pera\ny requesón",
  description: "Crujientes, picantes y llenas\nde sabor.",
  time: "8 min",
  tags: "Desayuno • Cena • Integral",
};

function RecipeCard() {
  return (
    <div
      data-carousel-item
      className="snap-start shrink-0 bg-white rounded-[39px] w-[299px] md:w-[462px] h-[453px] md:h-[700px] overflow-hidden flex flex-col"
    >
      <div className="h-[271px] md:h-[418px] w-full bg-bn-bg flex items-center justify-center shrink-0">
        <UtensilsCrossed size={48} className="text-bn-olive-light/40" />
      </div>
      <div className="flex flex-col items-center gap-2 md:gap-3 pt-4">
        <span className="bg-[#e3f2fd] rounded-full px-3 py-1 text-xs md:text-sm font-nunito font-bold text-[#263238]">
          {recipe.time}
        </span>
        <span className="font-nunito font-bold text-xs md:text-sm text-[#263238]">
          {recipe.tags}
        </span>
      </div>
      <div className="flex flex-col items-center text-center gap-2 px-6 mt-4">
        <p className="font-work font-bold text-[22px] md:text-[32px] leading-[24px] md:leading-[34px] text-bn-blue whitespace-pre-line">
          {recipe.title}
        </p>
        <p className="font-nunito font-semibold text-base md:text-lg text-[#263238] whitespace-pre-line">
          {recipe.description}
        </p>
      </div>
      <button className="mt-auto mx-6 mb-6 bg-bn-blue rounded-full h-11 md:h-16 flex items-center justify-center">
        <span className="font-nunito font-bold text-sm md:text-base text-white">
          Ver receta
        </span>
      </button>
    </div>
  );
}

export default function RecipeCarousel() {
  return (
    <section className="bg-bn-bg py-10 md:py-20 overflow-hidden">
      <div className="max-w-[390px] md:max-w-6xl mx-auto px-6 flex flex-col items-center text-center gap-6 md:gap-10">
        <p className="font-work text-bn-blue leading-[48px] md:leading-[82px]">
          <span className="font-normal text-2xl md:text-[50px] uppercase block">
            Conoce
          </span>
          <span className="font-bold text-[50px] md:text-[84px] uppercase block">
            Recetas
          </span>
        </p>

        <div className="w-full">
          <Carousel arrowColor="text-bn-blue">
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
