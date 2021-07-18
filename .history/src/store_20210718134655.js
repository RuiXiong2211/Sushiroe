import create from "zustand";

export const useStore = create((set) => ({
  reservations: [],
  addReservation: (reservation) => 
  set((state) => ({reservations: [...state.reservations, reservation]}))
}))
