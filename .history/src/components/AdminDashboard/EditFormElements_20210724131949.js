import styled from 'styled-components'
import Button from "@material-ui/core/Button";

export const EditFormContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: pink;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const CloseButton = styled(Button)`
  && {
    background-color: black;
    border-radius: 0px;
    color: white;
    &:hover{
        background-color: #3A5311;
    }
  }
`;