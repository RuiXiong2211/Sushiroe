import React from 'react'
import { ProductSection } from '../../components'
import { productData } from '../../data/menu/Data.js'

const Menu = () => {
    return (
        <>
            <ProductSection heading="Donburis" data={productData}/>
        </>
    )
}

export default Menu
