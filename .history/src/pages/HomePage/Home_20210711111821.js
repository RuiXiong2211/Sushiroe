import React from 'react'
import { InfoSection } from '../../components'
import { homeObjOne, homeObjTwo, homeObjThree } from './Data'

/* to utilise map fnction */


const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
        </>
    )
}

export default Home
