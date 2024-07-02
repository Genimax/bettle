import { create } from "zustand";

const useStore = create((set) => ({
  TONAddress: null,
  setTONAddress: (value) => set({ TONAddress: value }),
}));

export default useStore;
