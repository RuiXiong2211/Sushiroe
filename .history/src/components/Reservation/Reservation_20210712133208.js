import React, { useState } from 'react'
import {
    StyledFormWrapper,
    StyledForm,
    StyledInput,
    StyledError,
    StyledButton,
} from './Reservation.elements'

const Reservation = () => {

    const initialState = {
        name: '',
        email: '',
        phone: '',
    }

    const [state, setState] = useState(initialState)
    const [error, setError] = useState('')
    
    const handleSubmit = e => {

    }

    const handleInput = e => {

    }

    return (
        <>
            <StyledFormWrapper>
                <StyledForm onSubmit={handleSubmit}>
                    <h2>Reservation Form</h2>
                    <label htmlFor="name"> Name </label>
                    <StyledInput type="text" name="name" />
                    <label htmlFor="email"> Email </label>
                    <StyledInput type="email" name="email" />
                    <label htmlFor="phone"> Phone Number </label>
                    <StyledInput type="number" name="phone" />
                    <StyledError>
                        <p>error message here</p>
                    </StyledError>
                    <StyledButton type="submit">Submit</StyledButton>
                </StyledForm>
            </StyledFormWrapper>
        </>
    )
}

export default Reservation
