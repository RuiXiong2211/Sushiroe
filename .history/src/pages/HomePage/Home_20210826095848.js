import { React, useRef } from "react";
import { InfoSection } from "../../components";
import { homeObjOne, homeObjTwo, homeObjThree } from "../../data/home/Data";
import useScrollSnap from "react-use-scroll-snap";

/* to utilise map fnction */

const Home = () => {
  /*scroll snapping between pages disabled for now, to use wrap Infosections
  around a div and set ref as {scrollRef}.
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 50, delay: 10 });
  */

  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default Home;
