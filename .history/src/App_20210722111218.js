import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import ScrollToTop from "./components/ScrollToTop";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import Menu from "./pages/Menu/Menu";
import Reservation from "./pages/Reservation/ReservationPage";
import Admin from "./pages/AdminDashboard/Dashboard";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Menu" exact component={Menu} />
        <Route path="/Reservation" exact component={Reservation} />
        <Route path="/Admin" render={(props) => <Admin {...props} />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
