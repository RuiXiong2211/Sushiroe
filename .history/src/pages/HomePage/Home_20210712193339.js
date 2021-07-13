import React from 'react'
import { InfoSection } from '../../components'
import { homeObjOne, homeObjTwo, homeObjThree } from '../../data/home/Data'
import { Link } from 'react-scroll'

/* to utilise map fnction */


const Home = () => {
    return (
        <>  
            <Link to={homeObjOne} smooth={true} />
            <Link to={homeObjTwo} smooth={true} />
            <Link to={homeObjThree} smooth={true} />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
        </>
    )
}

export default Home
