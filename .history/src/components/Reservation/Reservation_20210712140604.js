import React, { useState } from 'react'
import {
    Header,
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
        e.preventDefault()
    }

    const handleInput = e => {
        const inputField = e.currentTarget.name;
        const value = e.currentTarget.value;

        setState(prev => ({ ...prev, [inputField]: value}))
    }

    return (
        <>
            <StyledFormWrapper>
                <StyledForm onSubmit={handleSubmit}>
                    <Header>Reservation Form</Header>
                    <label htmlFor="name"> Name </label>
                    <StyledInput type="text" name="name" value={state.name} onChange={handleInput}/>
                    <label htmlFor="email"> Email </label>
                    <StyledInput type="email" name="email" value={state.email} onChange={handleInput}/>
                    <label htmlFor="phone"> Phone Number </label>
                    <StyledInput type="number" name="phone" value={state.phone} onChange={handleInput}/>
                    {error && (
                    <StyledError>
                        <p>{error}</p>
                    </StyledError>
                    )}
                    <StyledButton type="submit">Submit</StyledButton>
                </StyledForm>
            </StyledFormWrapper>
        </>
    )
}

export default Reservation
