import React from "react";
import { InfoSection } from "../../components";
import SmoothScroll from "../../components/SmoothScroll/SmoothScroll";
import { homeObjOne, homeObjTwo, homeObjThree } from "../../data/home/Data";

/* to utilise map fnction */

const Home = () => {
  return (
    <>
      <SmoothScroll>
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjThree} />
      </SmoothScroll>
    </>
  );
};

export default Home;
