import styled, { css } from "styled-components";
import bgImg from "../../images/formbg.jpg";

const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 20px 20px 10px;
  padding: 20px;
  box-sizing: border-box;
`;

export const Header = styled.h2`
  text-align: center;
  font-weight: bold;
`;

export const PageContainer = styled.div`
  display: flex;

  //justify-content: center;
  //align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px;
  background-image: url(${bgImg});
  background-size: fill;
`;
export const StyledFormWrapper = styled.div`
  display: flex;
  //justify-content: center;
  //align-items: center;
  flex-direction: column;
  padding: 20px;
  position: relative;
`;

export const StyledForm = styled.form`
  margin: auto;
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  //box-shadow: 0px 0px 20px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  display: block;

  @media screen and (max-width: 768px) {
    padding: 40px;
  }
`;

export const StyledInputs = styled.div`
  justify-content: center;
  display: inline-flexbox;
  text-align: center;
`;
export const StyledInput = styled.input`
  width: 40%;
  ${sharedStyles};
`;

export const StyledButton = styled.button`
  display: block;
  background-color: #f7797d;
  color: #fff;
  font-size: 1.2rem;
  border: 0;
  border-radius: 10px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
  text-align: center;
  margin: 0 auto;

  &:hover {
    background-color: crimson;
  }
`;

export const StyledError = styled.div`
  color: black;
  font-weight: 400;
  margin: 0 0 40px 40px;
`;
export const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;
  text-align: center;
  legend {
    padding: 0 10px;
  }
  label {
    padding-right: 20px;
  }
  input {
    margin-right: 10px;
  }
`;

export const FaqContainer = styled.div`
  width: 100%;
  background-color: pink;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
  padding: 20px;
  text-align: center;
  position: relative;
`;
