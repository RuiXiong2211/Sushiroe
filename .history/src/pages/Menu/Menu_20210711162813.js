import React from 'react'
import { ProductSection } from '../../components'
import { productData } from '../../data/menu/Data'

const Menu = () => {
    return (
        <>
            <ProductSection heading="DONBURI" data={productData}/>
        </>
    )
}

export default Menu
