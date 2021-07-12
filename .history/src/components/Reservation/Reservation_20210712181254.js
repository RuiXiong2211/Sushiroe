import React, { useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);

    for (let key in state) {
      if (state[key] === "") {
        setError(`*You must provide the ${key} details.`);
        return;
      }
    }
    setError("*We have received your reservation!");
    initialState = {
      name: "",
      email: "",
      phone: "",
      pax: "",
      date: "",
      time: "",
    };
    setState(initialState);
    console.log(state);
  };

  const handleInput = (e) => {
    const inputField = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState((prev) => ({ ...prev, [inputField]: value }));
  };

  const radioButtons = () => {
    let startTime = 12;
    for (let i = 0; i < 9; i++) {
      <label>
        <input
          type="radio"
          value={startTime}
          name="time"
          checked={state.time === "12:00"}
          onChange={handleInput}
        />
        {startTime + ":00"}
      </label>;
    }
  };

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
            <radioButtons />
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
