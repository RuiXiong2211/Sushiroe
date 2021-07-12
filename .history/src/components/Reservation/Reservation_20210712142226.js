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
        pax: '',
        date: '',
        timeslot:''
    }

    const [state, setState] = useState(initialState)
    const [error, setError] = useState('')
    
    const handleSubmit = e => {
        e.preventDefault()
        console.log(state)

        for (let key in state) {
            if (state[key] === '') {
                setError(`*You must provide the ${key} details.`)
                return
            }
        }
        setError('')
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
                    <StyledInput type="text" name="phone" value={state.phone} onChange={handleInput}/>
                    <label htmlFor="pax"> Pax </label>
                    <StyledInput type="pax" name="pax" value={state.pax} onChange={handleInput}/>
                    <label htmlFor="date"> Date </label>
                    <StyledInput type="date" name="date" value={state.date} onChange={handleInput}/>
                    <label htmlFor="time"> Time </label>
                    <StyledInput type="time" name="time" value={state.time} onChange={handleInput}/>
                    {error && (
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
