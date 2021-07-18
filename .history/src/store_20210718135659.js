import create from "zustand";

const useStore = create((set) => ({
  reservations: [],
  addReservation: (reservation) => {
    set((state) => ({ reservations: [...state.reservations, reservation] }))
    console.log("hello" + JSON.stringify(reservation))
  }
}));

export default useStore;
