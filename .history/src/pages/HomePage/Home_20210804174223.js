import { React, useRef, useEffect } from "react";
import { InfoSection } from "../../components";
import { homeObjOne, homeObjTwo, homeObjThree } from "../../data/home/Data";
import useScrollSnap from "react-use-scroll-snap";

/* to utilise map fnction */

const Home = () => {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 100, delay: 10 });
  return (
    <div ref={scrollRef}>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </div>
  );
};

export default Home;
