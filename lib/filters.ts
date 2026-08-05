export type MacroCategory = "fibra" | "proteina";

export interface Subcategory {
  id: string;
  label: string;
}

/**
 * Subcategory taxonomy per macro category — ported 1:1 from the Figma modal
 * frames (Modal Filtros Fibra Seleccionado / Modal Filtros Proteína Seleccionado).
 */
export const subcategoriesByCategory: Record<MacroCategory, Subcategory[]> = {
  fibra: [
    { id: "integral", label: "Integral / Granos enteros" },
    { id: "multigrano-y-semillas", label: "Multigrano y semillas" },
    { id: "masa-madre", label: "Masa madre" },
    { id: "sin-harinas-refinadas", label: "Sin harinas refinadas" },
    { id: "alto-en-fibra", label: "Alto en fibra" },
  ],
  proteina: [
    { id: "botanas", label: "Botanas" },
    { id: "pan-blanco", label: "Pan blanco" },
    { id: "pan-integral", label: "Pan integral" },
    { id: "multigrano-y-semillas", label: "Multigrano y semillas" },
    { id: "sin-harinas-refinadas", label: "Sin harinas refinadas" },
  ],
};

export const macroCategoryLabels: Record<MacroCategory, string> = {
  fibra: "Con Fibra",
  proteina: "Con Proteína",
};
