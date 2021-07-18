import create from "zustand";

const useStore = create((set) => ({
  reservations: [],
  addReservation: (reservation) => {
    set((state) => ({ reservations: [...state.reservations, reservation] }))
    console.log(reservation)
  }
}));

export default useStore;
