import React, { useState } from "react";
import emailjs from "emailjs-com";
import axios from "axios";

import {
  Header,
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledError,
  StyledButton,
  StyledFieldset,
} from "./Reservation.elements";

const Reservation = () => {
  let initialState = {
    name: "",
    email: "",
    phone: "",
    pax: "",
    date: "",
    time: "",
  };

  const [state, setState] = useState(initialState);
  const [error, setError] = useState("");

  function sendConfirmationEmail() {
    let emailParams = {
      name: state.name,
      email: state.email,
      pax: state.pax,
      date: state.date,
      time: state.time,
    };
    emailjs
      .send(
        "service_zzhbm1s",
        "template_yot0ajf",
        emailParams,
        "user_Rb1siOwIIlMA7ruNlgeYh"
      )
      .then((response) => console.log(response.data))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let key in state) {
      if (state[key] === "") {
        setError(`*You must provide the ${key} details.`);
        return;
      }
    }
    setError("*We have received your reservation!");

    axios
      .post("http://localhost:4000/app/reservation", state)
      .then((response) => console.log(response.data));

    sendConfirmationEmail();

    initialState = {
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
      <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <Header>Reservation Form</Header>
          <label htmlFor="name"> Name </label>
          <StyledInput
            type="text"
            name="name"
            value={state.name}
            onChange={handleInput}
          />
          <label htmlFor="email"> Email </label>
          <StyledInput
            type="email"
            name="email"
            value={state.email}
            onChange={handleInput}
          />
          <label htmlFor="phone"> Phone Number </label>
          <StyledInput
            type="text"
            name="phone"
            value={state.phone}
            onChange={handleInput}
          />
          <label htmlFor="pax"> Pax </label>
          <StyledInput
            type="number"
            name="pax"
            min="0"
            max="5"
            value={state.pax}
            onChange={handleInput}
          />
          <label htmlFor="date"> Date </label>
          <StyledInput
            type="date"
            name="date"
            min="2021-07-12"
            value={state.date}
            onChange={handleInput}
          />
          <label htmlFor="time"> Time </label>
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
    </>
  );
};

export default Reservation;
