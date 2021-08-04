import React from "react";
import styled from "styled-components";
import { Footer, InfoSection } from "../../components";
import { homeObjOne, homeObjTwo, homeObjThree } from "../../data/home/Data";

/* to utilise map fnction */

const HomeContainer = styled.section`
  height: 100vh;
  width: 100%;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
`;

const Home = () => {
  return (
    <HomeContainer>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
