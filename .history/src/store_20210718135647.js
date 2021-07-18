import create from "zustand";

const useStore = create((set) => ({
  reservations: [],
  addReservation: (reservation) => {
    set((state) => ({ reservations: [...state.reservations, reservation] }))
    console.log(JSON.stringify(reservation))
  }
}));

export default useStore;
