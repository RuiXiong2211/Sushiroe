import create from "zustand";
import {
    getReservations,
  } from "../../services/reservations";

const useStore = create((set) => ({
  reservations: [],
  getAllReservation: getReservations => {
      set({reservations: getReservations.data})
  },
  addReservation: (reservation) => {
    set((state) => ({ reservations: [...state.reservations, reservation] }))
  }
}));

export default useStore;
