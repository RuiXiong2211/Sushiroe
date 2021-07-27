import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const AdminContainer = styled.div`
  display: flex;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  height: 100vh;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const DeleteButton = styled(Button)`
  && {
    background-color: red;
    border-radius: 0px;
    color: white;
    &:hover{
        background-color: crimson;
    }
  }
`;

export const EditButton = styled(Button)`
  && {
    background-color: olive;
    border-radius: 0px;
    color: white;
    &:hover{
        background-color: #3A5311;
    }
  }
`;