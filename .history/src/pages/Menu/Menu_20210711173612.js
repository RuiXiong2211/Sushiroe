import React from 'react'
import { ProductSection } from '../../components'
import { productData, sushiData, drinksData } from '../../data/menu/Data'

const Menu = () => {
    return (
        <>
            <ProductSection heading="RICE BOWLS" data={productData}/>
            <ProductSection heading="SUSHI ROLLS" data={sushiData}/>
            <ProductSection heading="飲み物/DRINKS" data={drinksData}/>
        </>
    )
}

export default Menu
