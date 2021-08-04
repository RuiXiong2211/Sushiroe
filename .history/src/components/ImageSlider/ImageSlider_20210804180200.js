import React, { useState, useEffect } from "react";
import {
  Wrapper,
  Slide,
  SlideContent,
  IndicatorWrapper,
  Dot,
} from "./ImageSlider.elements";

const ImageSlider = ({
  images = [],
  autoPlay = true,
  autoPlayTime = 5000,
  children,
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide(slideIndex = currentSlide + 1) {
    const newSlideIndex = slideIndex >= images.length ? 0 : slideIndex;

    setCurrentSlide(newSlideIndex);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, autoPlayTime);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <Wrapper {...props}>
      {images.map((imageUrl, index) => (
        <>
          <Slide
            key={index}
            style={{
              backgroundImage: `url(${imageUrl.img})`,
              marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,
            }}
          >
            <SlideContent>
              <h1> {imageUrl.header} </h1>
              <p>{imageUrl.desc}</p>
            </SlideContent>
          </Slide>
        </>
      ))}
      <Indicator
        currentSlide={currentSlide}
        amountSlides={images.length}
        nextSlide={nextSlide}
      />
    </Wrapper>
  );
};

const Indicator = ({ currentSlide, amountSlides, nextSlide }) => {
  return (
    <IndicatorWrapper>
      {Array(amountSlides)
        .fill(1)
        .map((_, i) => (
          <Dot
            key={i}
            isActive={currentSlide === i}
            onClick={() => nextSlide(i)}
          />
        ))}
    </IndicatorWrapper>
  );
};

export default ImageSlider;
