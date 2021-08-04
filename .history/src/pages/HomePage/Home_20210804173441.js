import { React, useRef, useEffect } from "react";
import { InfoSection } from "../../components";
import { homeObjOne, homeObjTwo, homeObjThree } from "../../data/home/Data";
import ScrollSnap from "scroll-snap";

/* to utilise map fnction */

const Home = () => {

  function callback() {
    console.log("snapped");
  }
  const container = useRef(null);
  function bindScrollSnap() {
    const element = container.current;
    const snapElement = new ScrollSnap(element, {
      snapDestinationY: "100%",
    });
    snapElement.bind(callback)
  }

  useEffect(()=> {
    bindScrollSnap()
  }, [])

  return (
    <div id="container" ref={container}>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </div>
  );
};

export default Home;
