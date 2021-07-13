import React from 'react'
import { InfoSection } from '../../components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { homeObjOne, homeObjTwo, homeObjThree } from '../../data/home/Data'
import { Link } from 'react-scroll'

/* to utilise map fnction */


const Home = () => {
    return (
        <>  
            <Link to='/' smooth={true} />
            <Link to='/' smooth={true} />
            <Link to='/' smooth={true} />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
        </>
    )
}

export default Home
