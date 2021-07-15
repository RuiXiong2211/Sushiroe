import React from 'react'
import { InfoSection } from '../../components'
import { homeObjOne, homeObjTwo, homeObjThree } from '../../data/home/Data'
import { Link } from 'react-scroll'

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
