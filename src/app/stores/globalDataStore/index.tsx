
import { create } from "zustand";

export const useGlobalDataStore = create((set) => ({
    selectedTabIdx: 0,
    setSelectedTabIdx: (idx: number) => set({ selectedTabIdx: idx }),
}))