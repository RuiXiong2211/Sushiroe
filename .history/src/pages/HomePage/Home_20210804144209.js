import React from "react";
import styled from "styled-components";
import { InfoSection } from "../../components";
import { homeObjOne, homeObjTwo, homeObjThree } from "../../data/home/Data";

/* to utilise map fnction */

const HomeContainer = styled.div`
  height: 100%;
  width: 100%;
  scroll-snap-type: y mandatory;
  overflow: scroll;
`;

const Home = () => {
  return (
    <HomeContainer>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </HomeContainer>
  );
};

export default Home;
