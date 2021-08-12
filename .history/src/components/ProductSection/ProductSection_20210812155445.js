import { React, useEffect  } from 'react'
import {
    ProductsContainer,
    ProductWrapper,
    ProductsHeading,
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductPrice,
} from './ProductSection.elements.js'
import Aos from "aos";
import "aos/dist/aos.css";

const ProductSection = ({heading, data}) => {

    useEffect(() => {
        Aos.init({ duration: 2000});
      }, []);

    return (
        <>
            <ProductsContainer data-aos="fade-right">
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>
                {data.map((product, index) => {
                    return (
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                            </ProductInfo>
                        </ProductCard>
                    )
                })}
            </ProductWrapper>
        </ProductsContainer>
        </>
    )
}

export default ProductSection
