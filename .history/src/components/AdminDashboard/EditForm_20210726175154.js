import React, { useState, useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import {
  Header,
  StyledForm,
  StyledInput,
  StyledError,
  StyledButton,
  StyledFieldset,
} from "../Reservation/Reservation.elements";
import { Background, ModalWrapper, CloseModalButton } from "./EditFormElements";
import { useStore, updateReservation } from "../../services/reservations";

export const EditForm = ({ showModal, setShowModal, selectedRow, reservations}) => {
  const reservationToEdit = reservations.filter(resv => resv.id === selectedRow[0])[0]
  //console.log(reservations)
  console.log(reservationToEdit)

  // let initialState = {
  //   name: "",
  //   email: "",
  //   phone: "",
  //   pax: "",
  //   date: "",
  //   time: "11:00",
  // };

  let initialState = {
    name: reservationToEdit ? reservationToEdit.name : "",
    email: reservationToEdit ? reservationToEdit.email : "",
    phone: reservationToEdit ? reservationToEdit.phone : "",
    pax: reservationToEdit ? reservationToEdit.pax : "",
    date: reservationToEdit ? reservationToEdit.date : "",
    time: reservationToEdit ? reservationToEdit.time : "",
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

  const [state, setState] = useState(initialState);
  const [error, setError] = useState("");
  const editReservation = useStore((state) => state.editReservation);

  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateX(0%)` : `translateX(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
      // let initialState = {
      //     name: "",
      //     email: "",
      //     phone: "",
      //     pax: "",
      //     date: "",
      //     time: "",
      //   };
      // setState(initialState)
    }
  };

  useEffect(() => {
    console.log(state);
  });

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let key in state) {
      if (state[key] === "") {
        setError(`*You must provide the ${key} details.`);
        return;
      }
    }
    setError("*We have updated your reservation!");

    // creates a put request to mongodb to store the new reservation.
    updateReservation(state);
    console.log(reservations);

    // edits the reservation in the store (local storage).
    editReservation(state);
    console.log(reservations);

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

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <StyledForm onSubmit={handleSubmit}>
                <CloseModalButton
                  aria-label="Close modal"
                  onClick={() => setShowModal((prev) => !prev)}
                />
                <Header>Reservation Form</Header>
                <label htmlFor="name"> Name </label>
                <StyledInput
                  type="text"
                  name="name"
                  maxLength="30"
                  value={state.name}
                  onChange={handleInput}
                />
                <label htmlFor="email"> Email </label>
                <StyledInput
                  type="email"
                  name="email"
                  maxLength="30"
                  value={state.email}
                  onChange={handleInput}
                />
                <label htmlFor="phone"> Phone Number </label>
                <StyledInput
                  type="text"
                  name="phone"
                  maxLength="8"
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
              {/* <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              /> */}
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
