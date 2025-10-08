import { create } from "zustand";

export const useFavoritesStore = create((set) => ({
    favorites: [],
    addFavorites: (id) => set((state) => ({ 
        favorites: [...state.favorites, { id, id: id}] 
    })),
    removeFavorites: (id) => set((state) => ({
        favorites: state.favorites.filter(favorites => favorites.id !== id),
    })),
}));