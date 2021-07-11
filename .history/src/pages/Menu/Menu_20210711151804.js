import React from 'react'
import ProductSection from '../../components'
import { data } from '../../data/Menu/Data'

const Menu = () => {
    return (
        <>
            <ProductSection heading="Donburis" data={data}/>
        </>
    )
}

export default Menu
