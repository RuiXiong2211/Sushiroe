import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 250,
  },
  {
    field: "name",
    headerName: "Name",
    width: 250,
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
  },
  {
    field: "phone",
    headerName: "Phone",
    type: "number",
    width: 150,
  },
  {
    field: "pax",
    type: "number",
    headerName: "Pax",
    width: 100,
  },
  {
    field: "date",
    type: "date",
    headerName: "Date",
    width: 100,
  },
  {
    field: "time",
    headerName: "Time",
    width: 100,
  },
];

export const ButtonContainer = styled.div`
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #150f0f;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`
export const AdminContainer = styled.div`
  display: flex;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  height: 90vh;
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
    padding: 5px;
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
    padding: 5px;
    margin: 10px;
    background-color: olive;
    border-radius: 10px;
    color: white;
    &:hover{
        background-color: #3A5311;
    }
  }
`;