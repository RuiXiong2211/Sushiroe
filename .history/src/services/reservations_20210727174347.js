import axios from "axios";
import emailjs from "emailjs-com";
import create from "zustand";

const baseUrl = "http://localhost:4000/app/reservation";

export const useStore = create((set) => ({
  reservations: [],
  getReservations: async () => {
    const response = await axios.get(baseUrl);
    set({ reservations: await response.data });
  },
  addReservation: (reservation) => {
    set((state) => ({
      reservations: [...state.reservations, reservation],
    }));
  },
  removeReservation: (id) => {
    set((state) => ({
      reservations: state.reservations.filter(
        (reservation) => id !== reservation.id
      ),
    }));
  },
  editReservation: (id, updatedReservation) => {
    const reservationID = id[0]
    console.log(updatedReservation)
    set((state) => ({
      reservations: state.reservations.map((reservation) =>
        reservationID === reservation.id ? updatedReservation : reservation
      ),
    }));
  },
}));

export const createNewReservation = (reservation) => {
  axios
    .post(baseUrl, reservation)
    .then((response) => console.log(response.data));
};

export const updateReservation = (id, reservation) => {
  axios
    .patch(`${baseUrl}/${id}`, reservation)
    //.then((response) => console.log(response.data));
};

export const sendConfirmationEmail = (emailParams) => {
  emailjs.send(
    "service_zzhbm1s",
    "template_yot0ajf",
    emailParams,
    "user_Rb1siOwIIlMA7ruNlgeYh"
  );
};

export const getReservations = async () => {
  const request = await axios.get(baseUrl);
  return request;
};

export const deleteReservation = async (id) => {
  await axios.delete(`${baseUrl}/${id}`);
};

getReservations().then((reservation) =>
  useStore.setState((state) => ({
    ...state,
    reservation,
  }))
);
