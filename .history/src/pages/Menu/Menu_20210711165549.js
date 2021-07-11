import React from 'react'
import { ProductSection } from '../../components'
import { productData, sushiData } from '../../data/menu/Data'

const Menu = () => {
    return (
        <>
            <ProductSection heading="RICE BOWLS" data={productData}/>
            <ProductSection heading="SUSHI ROLLS" data={sushiData}/>
        </>
    )
}

export default Menu
