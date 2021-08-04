import React from "react";
import { Link } from "react-router-dom";
import Typical from "react-typical";
import {
  InfoSec,
  InfoRow,
  TextWrapper,
  InfoColumn,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  FloatAnimation,
} from "./InfoSection.elements";
import { Container, Button } from "../../globalStyles";

const InfoSection = ({
  lightBg,
  imgStart,
  lightTopLine,
  topLine,
  lightText,
  headline,
  lightTextDesc,
  description,
  buttonLabel,
  primary,
  start,
  img,
  alt,
  hasButton,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>
                  <Typical loop={Infinity} steps={[`${headline}`, 500]}/>
                </Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                {hasButton ? (
                  <Link to="/Reservation">
                    <FloatAnimation>
                      <Button big fontBig primary={primary}>
                        {buttonLabel}
                      </Button>
                    </FloatAnimation>
                  </Link>
                ) : null}
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
