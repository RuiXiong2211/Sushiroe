import axios from 'axios'
import emailjs from "emailjs-com";

const baseUrl = 'http://localhost:4000/app/reservation'

export const createNewReservation = reservation => {
    axios
      .post(baseUrl, reservation)
      .then((response) => console.log(response.data));
}

export const sendConfirmationEmail = emailParams => {
    emailjs
      .send(
        "service_zzhbm1s",
        "template_yot0ajf",
        emailParams,
        "user_Rb1siOwIIlMA7ruNlgeYh"
      )
  }

  export const getReservations = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
  }