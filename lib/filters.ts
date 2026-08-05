export type MacroCategory = "fibra" | "proteina";

export interface Subcategory {
  id: string;
  label: string;
}

/**
 * Subcategory taxonomy per macro category, validated against real México SKUs
 * during the product research phase (see chat history / README for sourcing notes).
 *
 * Note: the "Con Proteína" list here is the corrected 3-item taxonomy
 * (Botanas / Pan blanco / Pan integral) — the Figma file had some Con Fibra
 * subcategories ("Multigrano y semillas", "Sin harinas refinadas") leaking into
 * the Con Proteína checklist from an earlier duplication; those aren't included
 * here since no real Proteína SKU is exclusively defined by them.
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
  ],
};

export const macroCategoryLabels: Record<MacroCategory, string> = {
  fibra: "Con Fibra",
  proteina: "Con Proteína",
};
