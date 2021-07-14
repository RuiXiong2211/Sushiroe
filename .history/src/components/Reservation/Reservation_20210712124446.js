import React from 'react'
import {
    StyledFormWrapper,
    StyledForm,
    StyledInput,
    StyledError,
    StyledButton,
} from './Reservation.elements'

const Reservation = () => {
    return (
        <>
            <StyledFormWrapper>
                <StyledForm>
                    <h2>Reservation Form</h2>
                    <label htmlFor="name"></label>
                    <StyledInput type="text" name="name" />
                    <label htmlFor="email"></label>
                    <StyledInput type="email" name="email" />
                    <label htmlFor="phone"></label>
                    <StyledInput type="number" name="phone" />
                    <StyledError>
                        <p>error message here</p>
                    </StyledError>
                </StyledForm>
                <StyledButton type="submit">Submit</StyledButton>
            </StyledFormWrapper>
        </>
    )
}

export default Reservation