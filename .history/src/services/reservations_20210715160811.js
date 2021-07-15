import axios from 'axios'
const baseUrl = 'http://localhost:4000/app/reservation'

export const createNewReservation  = reservation => {
    axios
      .post(baseUrl, reservation)
      .then((response) => console.log(response.data));
}
