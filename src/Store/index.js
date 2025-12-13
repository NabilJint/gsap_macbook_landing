import { create } from "zustand";

const useMackBookStore = create((set) => ({
  color: "#2e2c2e",
  setColor: (color) => set({ color }),

  scale: 0.08,

  texture: "/videos/feature-1.mp4",
  setTexture: (texture) => set({ texture }),
  setScale: (scale) => set({ scale }),

  reset: () =>
    set({ color: "#2e2c2e", scale: 0.08, texture: "/videos/feature-1.mp4" }),
}));

export default useMackBookStore;
