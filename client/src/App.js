import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

//components
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Footer from "./components/layout/Footer";
import Music from "./components/main/Music";
import Contact from "./components/main/Contact";
import EmailSuccess from "./components/redirects/EmailSuccess";
import EmailError from "./components/redirects/EmailError";
import Donate from "./components/main/Donate";
import DonateSuccess from "./components/redirects/DonateSuccess";
import DonateError from "./components/redirects/DonateError";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <div className="container">
            <Route exact path="/music" component={Music} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/email-success" component={EmailSuccess} />
            <Route exact path="/email-error" component={EmailError} />
            <Route exact path="/donation-success" component={DonateSuccess} />
            <Route exact path="/donation-error" component={DonateError} />
            <Route exact path="/donate" component={Donate} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
