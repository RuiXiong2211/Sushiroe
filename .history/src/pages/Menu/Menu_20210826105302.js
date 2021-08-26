import { React } from "react";
import { ImageSlider, ProductSection } from "../../components";
import {
  img
  sliderData,
  productData,
  sushiData,
  drinksData,
} from "../../data/menu/Data";
import SimpleImageSlider from "react-simple-image-slider";

const Menu = () => {

  return (
    <>
      <ImageSlider images={sliderData} />
      <ProductSection heading="RICE BOWLS/海鮮丼" data={productData} />
      <ProductSection heading="SUSHI/お寿司" data={sushiData}  />
      <ProductSection heading="飲み物/DRINKS" data={drinksData} />
    </>
  );
};

export default Menu;
