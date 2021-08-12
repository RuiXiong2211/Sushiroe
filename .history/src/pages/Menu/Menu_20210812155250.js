import { React, useEffect } from "react";
import { ImageSlider, ProductSection } from "../../components";
import {
  sliderData,
  productData,
  sushiData,
  drinksData,
} from "../../data/menu/Data";
import Aos from "aos";
import "aos/dist/aos.css";

const Menu = () => {

  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []);

  return (
    <>
      <ImageSlider images={sliderData} />
      <ProductSection heading="RICE BOWLS/海鮮丼" data={productData} data-aos="fade-right"/>
      <ProductSection heading="SUSHI/お寿司" data={sushiData} data-aos="flip-right"/>
      <ProductSection heading="飲み物/DRINKS" data={drinksData} data-aos="flip-left" />
    </>
  );
};

export default Menu;
