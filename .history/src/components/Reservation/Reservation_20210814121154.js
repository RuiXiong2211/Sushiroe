import React, { useState, useEffect } from "react";
import { Faq } from "./Faq";
import MapContainer  from "./Location";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import {
  PageContainer,
  Header,
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledInputs,
  StyledError,
  StyledButton,
  StyledFieldset,
} from "./Reservation.elements";
import {
  createNewReservation,
  sendConfirmationEmail,
  useStore,
} from "../../services/reservations";

const Reservation = (reservations) => {
  let initialState = {
    id: "",
    name: "",
    email: "",
    phone: "",
    pax: "",
    date: "",
    time: "",
  };

  const [state, setState] = useState(initialState);
  const [error, setError] = useState("");
  const addReservation = useStore((state) => state.addReservation);
  //const getAllReservation = useStore((state) => state.getReservations);
  //const reservations = useStore((state) => state.reservations);

  // useEffect(() => {
  //   getAllReservation();
  // }, [getAllReservation]);

  useEffect(() => {
    console.log(reservations.reservations.reservations);
  }, [reservations]);

  let emailParams = {
    name: state.name,
    email: state.email,
    pax: state.pax,
    date: state.date,
    time: state.time,
  };

  async function getId() {
    const id = await createNewReservation(state);
    initialState.id = id;
    console.log(id);
    console.log(initialState.id);
    setState(initialState);
    addReservation(state);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let key in state) {
      if (key !== "id" && state[key] === "") {
        setError(`*You must provide the ${key} details.`);
        return;
      }
    }
    setError("*We have received your reservation!");

    // creates a post request to mongodb to store the new reservation and return reservation ID
    // createNewReservation(state).then(value => {
    //   initialState.id = value
    // })
    // console.log(initialState.id)
    // setState(initialState)
    // console.log(state)
    // adds a reservation to the store (local storage).
    // addReservation(state);

    getId();
    console.log(reservations.reservations.reservations);

    sendConfirmationEmail(emailParams);

    initialState = {
      id: "",
      name: "",
      email: "",
      phone: "",
      pax: "",
      date: "",
      time: "",
    };
    setState(initialState);
  };

  const handleInput = (e) => {
    const inputField = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState((prev) => ({ ...prev, [inputField]: value }));
  };

  const timeSlots = [
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];

  return (
    <>
      <PageContainer>
        <StyledFormWrapper>
          <StyledForm onSubmit={handleSubmit}>
            <Header>Reservation Form</Header>
            <StyledInputs>
              <StyledInput
                type="text"
                name="name"
                maxLength="30"
                value={state.name}
                onChange={handleInput}
                placeholder="Name"
              />
              <StyledInput
                type="email"
                name="email"
                maxLength="30"
                value={state.email}
                onChange={handleInput}
                placeholder="Email"
              />
              <StyledInput
                type="text"
                name="phone"
                maxLength="8"
                value={state.phone}
                onChange={handleInput}
                placeholder="Phone"
              />
              <StyledInput
                type="number"
                name="pax"
                min="1"
                max="5"
                value={state.pax}
                onChange={handleInput}
                placeholder="Pax"
              />
              <StyledInput
                type="date"
                name="date"
                min="2021-07-12"
                value={state.date}
                onChange={handleInput}
                placeholder="Date"
              />
            </StyledInputs>
            <StyledFieldset>
              {timeSlots.map((slot, index) => {
                return (
                  <label key={index}>
                    <input
                      type="radio"
                      value={slot}
                      name="time"
                      checked={state.time === slot}
                      onChange={handleInput}
                    />
                    {slot}
                  </label>
                );
              })}
            </StyledFieldset>
            {error && (
              <StyledError>
                <p>{error}</p>
              </StyledError>
            )}
            <StyledButton type="submit">Submit</StyledButton>
          </StyledForm>
        </StyledFormWrapper>
        <Faq />
        <MapContainer />
      </PageContainer>
    </>
  );
};

export default Reservation;
