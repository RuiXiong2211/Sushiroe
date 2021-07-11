import React from 'react'
import { ProductSection } from '../../components'
import { productData, sushiData, drinksData } from '../../data/menu/Data'

const Menu = () => {
    return (
        <>
            <ProductSection heading="RICE BOWLS/海鮮丼" data={productData}/>
            <ProductSection heading="SUSHI/お寿司" data={sushiData}/>
            <ProductSection heading="飲み物/DRINKS" data={drinksData}/>
        </>
    )
}

export default Menu
