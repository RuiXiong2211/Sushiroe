import { React, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import ScrollToTop from "./components/ScrollToTop";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import Menu from "./pages/Menu/Menu";
import Reservation from "./pages/Reservation/ReservationPage";
import Admin from "./pages/AdminDashboard/Dashboard";
import { useStore } from "../services/reservations";

function App() {
  const getAllReservation = useStore((state) => state.getReservations);
  const reservations = useStore((state) => state.reservations);

  useEffect(() => {
    getAllReservation();
  }, [getAllReservation]);

  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Menu" exact component={Menu} />
        <Route path="/Reservation" render={(props) => <Reservation {...props} reservations={reservations} />} />
        <Route path="/Admin" exact component={Admin} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
