import { React, useRef, useEffect } from "react";
import { InfoSection } from "../../components";
import { homeObjOne, homeObjTwo, homeObjThree } from "../../data/home/Data";
import ScrollSnap from "scroll-snap";

/* to utilise map fnction */

const Home = () => {

  function callback() {
    console.log("snapped");
  }
  const container = useRef();
  function bindScrollSnap() {
    const element = this.container.current;
    const snapElement = new ScrollSnap(element, {
      snapDestinationY: "90%",
    });
    snapElement.bind(callback)
  }

  useEffect(()=> {
    bindScrollSnap()
  }, [])

  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default Home;
