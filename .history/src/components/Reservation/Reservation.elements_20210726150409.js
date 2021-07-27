import styled, {css} from 'styled-components'

const sharedStyles = css`
    background-color: #eee;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
`

export const Header = styled.h2`
    text-align: center;
`

export const StyledFormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    padding: 0 20px;
`

export const StyledForm = styled.form`
    display: flex;
    width: 100%;
    max-width: 700px;
    padding: 40px;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 20px rgba(0, 0, 0, 0.2);
`
export const StyledInput = styled.input`
    display: block;
    width: 100%;
    ${sharedStyles};
`

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
    
    &:hover{
        background-color: crimson;
    }
`

export const StyledError = styled.div`
    color: black;
    font-weight: 400;
    margin: 0 0 40px 40px;
`
export const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;
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