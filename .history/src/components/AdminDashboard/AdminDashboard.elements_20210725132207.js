import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const ButtonContainer = styled.div`
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #150f0f;
`
export const AdminContainer = styled.div`
  display: flex;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  height: 100vh;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const DeleteButton = styled(Button)`
  && {
    margin: 10px;
    background-color: red;
    border-radius: 10px;
    color: white;
    &:hover{
        background-color: crimson;
    }
  }
`;

export const EditButton = styled(Button)`
  && {
    margin: 10px;
    background-color: olive;
    border-radius: 10px;
    color: white;
    &:hover{
        background-color: #3A5311;
    }
  }
`;