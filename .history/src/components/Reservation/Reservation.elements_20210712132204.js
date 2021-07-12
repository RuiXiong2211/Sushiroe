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

export const StyledFormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 20px 20px;
`

export const StyledForm = styled.form`
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
`

export const StyledFieldSet = styled.fieldset`
`

export const StyledError = styled.div`
`
