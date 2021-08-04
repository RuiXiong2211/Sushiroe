import React from "react";
import styled from "styled-components";
import { InfoSection } from "../../components";
import { homeObjOne, homeObjTwo, homeObjThree } from "../../data/home/Data";

/* to utilise map fnction */

const HomeContainer = styled.div` 
  height: 100%;
  width: 100%;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
`;

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default Home;
