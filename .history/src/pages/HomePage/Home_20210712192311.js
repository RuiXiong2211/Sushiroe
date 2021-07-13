import React from "react";
import { InfoSection } from "../../components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { homeObjOne, homeObjTwo, homeObjThree } from "../../data/home/Data";
import { Link } from "react-scroll";

/* to utilise map fnction */

const Home = () => {
  return (
    <>
      <Link to="/1" smooth={true} />
      <Link to="/2" smooth={true} />
      <Link to="/3" smooth={true} />
      <Route path="/1">
        <InfoSection {...homeObjOne} />
      </Route>
      <Route path="/2">
        <InfoSection {...homeObjTwo} />
      </Route>
      <Route path="/3">
        <InfoSection {...homeObjThree} />
      </Route>
    </>
  );
};

export default Home;
