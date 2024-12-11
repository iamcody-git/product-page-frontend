import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "Please fill in all fields" };
    }

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (!res.ok) {
        return { success: false, message: `Error: ${res.statusText}` };
      }

      const data = await res.json();
      set((state) => ({ products: [...state.products, data] }));

      return { success: true, message: "Product created successfully" };
    } catch (error) {
      console.error("Error creating product:", error);
      return {
        success: false,
        message: "An error occurred while creating the product.",
      };
    }
  },
}));
