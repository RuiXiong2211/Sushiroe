import React, {useEffect, useRef} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { useStore } from "../services/reservations";
import ScrollToTop from "./components/ScrollToTop";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import Menu from "./pages/Menu/Menu";
import Reservation from "./pages/Reservation/ReservationPage";
import Admin from "./pages/AdminDashboard/Dashboard";

function App() {

  const getAllReservation = useStore((state) => state.getReservations);
  const reservations = useStore((state) => state.reservations);
  const reservationsRef = useRef(useStore.getState().reservations);

  useEffect(() => {
    getAllReservation();
    return useStore.subscribe(
      (reservations) => (reservationsRef.current = reservations),
      (state) => state.reservations
    );
  }, [getAllReservation]);

  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Menu" exact component={Menu} />
        <Route path="/Reservation" render={() => <Reservation reservations={reservations}/>} />
        <Route path="/Admin" render={() => <Admin reservations={reservations}/>} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
