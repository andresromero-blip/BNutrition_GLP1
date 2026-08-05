export type NutrientKey = "energia" | "proteina" | "fibra" | "azucares";

export interface NutritionFacts {
  servingSize: string; // e.g. "100 g"
  values: Record<NutrientKey, { value: string; unit: string }>;
  /** true when these numbers come from a verified back-of-pack label; false = placeholder pending R&D/Legal confirmation */
  verified: boolean;
}

export interface Product {
  id: string;
  category: "fibra" | "proteina";
  /** Must match a subcategory id from lib/filters.ts so the filter modal can find it */
  subcategoryId: string;
  /** Badge text shown on the card (kept 1:1 with what's approved in Figma) */
  badge: string;
  title: string; // may contain \n for the two-line card title
  image: string; // path under /public
  servings: string; // e.g. "2 porciones"
  weight: string; // e.g. "200 g"
  description: string;
  nutrition: NutritionFacts;
}

const placeholderNote =
  "Dato de ejemplo — pendiente de confirmar con etiqueta real antes de publicar.";

export const products: Product[] = [
  // ---- Con Fibra ----
  {
    id: "pan-cero-cero-sin-harinas",
    category: "fibra",
    subcategoryId: "sin-harinas-refinadas",
    badge: "Sin harinas refinadas",
    title: "Pan Cero Cero\nSin Harinas",
    image: "/images/products/pan-cero-cero-sin-harinas.jpg",
    servings: "8 porciones",
    weight: "396 g",
    description:
      "Pan de caja sin harinas refinadas, 0% azúcares añadidos y 0% grasas trans. " +
      placeholderNote,
    nutrition: {
      servingSize: "40 g",
      verified: false,
      values: {
        energia: { value: "95", unit: "kcal" },
        proteina: { value: "3.5", unit: "g" },
        fibra: { value: "3.8", unit: "g" },
        azucares: { value: "0", unit: "g" },
      },
    },
  },
  {
    id: "pan-multigrano-linaza",
    category: "fibra",
    subcategoryId: "multigrano-y-semillas",
    badge: "Multigrano y semillas",
    title: "Pan Multigrano\nLinaza",
    image: "/images/products/pan-multigrano-linaza.jpg",
    servings: "10 porciones",
    weight: "610 g",
    description:
      "Mezcla de granos enteros y linaza para un extra de fibra y ácidos grasos omega-3. " +
      placeholderNote,
    nutrition: {
      servingSize: "45 g",
      verified: false,
      values: {
        energia: { value: "110", unit: "kcal" },
        proteina: { value: "4.2", unit: "g" },
        fibra: { value: "3.2", unit: "g" },
        azucares: { value: "1", unit: "g" },
      },
    },
  },
  {
    id: "masa-madre-12-granos",
    category: "fibra",
    subcategoryId: "masa-madre",
    badge: "Masa madre",
    title: "Masa Madre\n12 Granos",
    image: "/images/products/masa-madre-12-granos.jpg",
    servings: "12 porciones",
    weight: "680 g",
    description:
      "Fermentación lenta de masa madre con 12 granos enteros, sin conservadores artificiales. " +
      placeholderNote,
    nutrition: {
      servingSize: "45 g",
      verified: false,
      values: {
        energia: { value: "115", unit: "kcal" },
        proteina: { value: "4.5", unit: "g" },
        fibra: { value: "2.9", unit: "g" },
        azucares: { value: "1", unit: "g" },
      },
    },
  },
  {
    id: "pan-integral-ajonjoli",
    category: "fibra",
    subcategoryId: "integral",
    badge: "Integral",
    title: "Pan Integral\ncon Ajonjolí",
    image: "/images/products/pan-integral-ajonjoli.jpg",
    servings: "14 porciones",
    weight: "567 g",
    description:
      "100% trigo integral con semillas de ajonjolí, alto en fibra y grano entero. " +
      placeholderNote,
    nutrition: {
      servingSize: "40 g",
      verified: false,
      values: {
        energia: { value: "100", unit: "kcal" },
        proteina: { value: "4.0", unit: "g" },
        fibra: { value: "3.0", unit: "g" },
        azucares: { value: "1", unit: "g" },
      },
    },
  },
  {
    id: "paninis-oroweat",
    category: "fibra",
    subcategoryId: "alto-en-fibra",
    badge: "Alto en fibra",
    title: "Paninis\nOroweat",
    image: "/images/products/paninis-oroweat.jpg",
    servings: "9 porciones",
    weight: "450 g",
    description:
      "Pan tipo panini listo para dorar, alto en fibra, práctico para comidas rápidas. " +
      placeholderNote,
    nutrition: {
      servingSize: "50 g",
      verified: false,
      values: {
        energia: { value: "130", unit: "kcal" },
        proteina: { value: "5.0", unit: "g" },
        fibra: { value: "3.5", unit: "g" },
        azucares: { value: "1", unit: "g" },
      },
    },
  },
  {
    id: "cero-cero-thins",
    category: "fibra",
    subcategoryId: "integral",
    badge: "Integral",
    title: "Cero Cero\nThins",
    image: "/images/products/cero-cero-thins.jpg",
    servings: "6 porciones",
    weight: "255 g",
    description:
      "Sandwich thins 0% azúcares añadidos, porción controlada e ideal para armar tus comidas. " +
      placeholderNote,
    nutrition: {
      servingSize: "43 g",
      verified: false,
      values: {
        energia: { value: "90", unit: "kcal" },
        proteina: { value: "4.0", unit: "g" },
        fibra: { value: "2.5", unit: "g" },
        azucares: { value: "0", unit: "g" },
      },
    },
  },

  // ---- Con Proteína ----
  {
    id: "pan-integral-protein",
    category: "proteina",
    subcategoryId: "pan-integral",
    badge: "Pan integral",
    title: "Pan Integral\nProtein+",
    image: "/images/products/pan-integral-protein.jpg",
    servings: "8 porciones",
    weight: "350 g",
    description:
      "Pan integral con proteína añadida, pensado para complementar tu ingesta diaria de proteína. " +
      placeholderNote,
    nutrition: {
      servingSize: "44 g",
      verified: false,
      values: {
        energia: { value: "105", unit: "kcal" },
        proteina: { value: "10", unit: "g" },
        fibra: { value: "3.0", unit: "g" },
        azucares: { value: "1", unit: "g" },
      },
    },
  },
  {
    id: "cero-cero-multigrano",
    category: "proteina",
    subcategoryId: "pan-blanco",
    badge: "Multigrano y semillas",
    title: "Cero Cero\nMultigrano",
    image: "/images/products/cero-cero-multigrano.jpg",
    servings: "7 porciones",
    weight: "340 g",
    description:
      "Línea Cero Cero: 0% azúcares añadidos y 0% grasas trans, con multigrano y semillas. " +
      placeholderNote,
    nutrition: {
      servingSize: "40 g",
      verified: false,
      values: {
        energia: { value: "95", unit: "kcal" },
        proteina: { value: "3.8", unit: "g" },
        fibra: { value: "2.8", unit: "g" },
        azucares: { value: "0", unit: "g" },
      },
    },
  },
  {
    id: "cero-cero-sin-harinas-proteina",
    category: "proteina",
    subcategoryId: "pan-blanco",
    badge: "Sin harinas refinadas",
    title: "Cero Cero\nSin Harinas",
    image: "/images/products/pan-cero-cero-sin-harinas.jpg",
    servings: "8 porciones",
    weight: "396 g",
    description:
      "Pan de caja sin harinas refinadas, 0% azúcares añadidos y 0% grasas trans. " +
      placeholderNote,
    nutrition: {
      servingSize: "40 g",
      verified: false,
      values: {
        energia: { value: "95", unit: "kcal" },
        proteina: { value: "3.5", unit: "g" },
        fibra: { value: "3.8", unit: "g" },
        azucares: { value: "0", unit: "g" },
      },
    },
  },
  {
    id: "barra-natura-mora",
    category: "proteina",
    subcategoryId: "botanas",
    badge: "Botanas",
    title: "Barra\nNatura Mora",
    image: "/images/products/natura-mora.jpg",
    servings: "1 porción",
    weight: "45 g",
    description:
      "Barra hecha con manzana, amaranto, soya, coco y cacahuate — snack práctico con fibra y proteína.",
    nutrition: {
      // Real values from back-of-pack label (verified during this session)
      servingSize: "45 g (1 barra)",
      verified: true,
      values: {
        energia: { value: "145", unit: "kcal" },
        proteina: { value: "6.7", unit: "g" },
        fibra: { value: "10.4", unit: "g" },
        azucares: { value: "0", unit: "g" },
      },
    },
  },
  {
    id: "totopos-nopal",
    category: "proteina",
    subcategoryId: "botanas",
    badge: "Botanas",
    title: "Totopos\nNopal",
    image: "/images/products/totopos-nopal.jpg",
    servings: "2 porciones",
    weight: "200 g",
    description:
      "Totopos horneados con maíz nixtamalizado y nopal deshidratado. " + placeholderNote,
    nutrition: {
      servingSize: "100 g",
      verified: false,
      values: {
        energia: { value: "382", unit: "kcal" },
        proteina: { value: "7.0", unit: "g" },
        fibra: { value: "8.0", unit: "g" },
        azucares: { value: "0", unit: "g" },
      },
    },
  },
  {
    id: "totopos-ancestrales",
    category: "proteina",
    subcategoryId: "botanas",
    badge: "Botanas",
    title: "Totopos\nAncestrales",
    image: "/images/products/totopos-ancestrales.jpg",
    servings: "2 porciones",
    weight: "200 g",
    description:
      "Botana horneada con maíz nixtamalizado, amaranto y soya. Alta en fibra y con proteína vegetal, ideal para mantener la saciedad entre comidas.",
    nutrition: {
      // Real values from back-of-pack label (verified during this session)
      servingSize: "100 g",
      verified: true,
      values: {
        energia: { value: "367", unit: "kcal" },
        proteina: { value: "8.2", unit: "g" },
        fibra: { value: "10.9", unit: "g" },
        azucares: { value: "0", unit: "g" },
      },
    },
  },
];

export const getProductsByCategory = (category: "fibra" | "proteina") =>
  products.filter((p) => p.category === category);
