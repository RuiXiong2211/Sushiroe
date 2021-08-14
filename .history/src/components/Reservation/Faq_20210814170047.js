import React, { useState } from "react";
import { Data } from "../../data/Reservations/data.js";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

const AccordionSection = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 500px;
  max-height: 500px; */
  flex-flow: column nowrap;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
  flex-direction: row;
  border-radius: 10px;
  max-width: 420px;
  justify-content: center;
  background-color: white;
`;

const Container = styled.div`
  position: relative;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
  min-width: 400px;
  max-width: 400px;
  background: #fff;
  color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 1rem;
    font-size: 1rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  padding: 0 10px 0 10px;
  max-width: 400px;
  background: #fff;
  color: #000000;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #f7665a;
  border-top: 2px solid #f7665a;
  p {
    font-size: 1rem;
  }
`;

export const Faq = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: "#F7665A", size: "25px" }}>
      <AccordionSection>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};
