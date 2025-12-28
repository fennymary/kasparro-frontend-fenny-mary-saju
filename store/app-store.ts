import { create } from "zustand";
import { AppState } from "@/types";

export const useAppStore = create<AppState>((set) => ({
  selectedBrandId: "brand-001",
  selectedModuleId: "module-content",
  setSelectedBrand: (brandId: string) =>
    set({ selectedBrandId: brandId }),
  setSelectedModule: (moduleId: string) =>
    set({ selectedModuleId: moduleId }),
}));
