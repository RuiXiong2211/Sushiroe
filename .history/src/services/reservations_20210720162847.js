import axios from "axios";
import emailjs from "emailjs-com";
import create from "zustand";

const baseUrl = "http://localhost:4000/app/reservation";

export const useStore = create((set) => ({
  reservations: [],
  getReservations: () => {
    const response = axios.get(baseUrl);
    set({ reservations: response.data });
  },
  addReservation: (reservation) => {
    set((state) => ({ reservations: [...state.reservations, reservation] }));
  },
  removeReservation: (id) => {
    set((state) => ({
      reservations: state.reservations.filter(
        (reservation) => id !== reservation._id
      ),
    }));
  },
  setRev: (reservation) => {
    set((state) => ({reservations: [reservation]}))
  }
}));

export const createNewReservation = (reservation) => {
  axios
    .post(baseUrl, reservation)
    .then((response) => console.log(response.data));
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
  return request.then((response) => {
    console.log(response.data);
  });
};

export const deleteReservation = async (id) => {
  await axios.delete(`${baseUrl}/${id}`);
};
