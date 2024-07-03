import { create } from "zustand";

const useStore = create((set) => ({
  modal: null,
  setModal: (value) => set({ modal: value }),
}));

export default useStore;
