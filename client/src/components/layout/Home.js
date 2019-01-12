import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/LOGO3.png";

class Home extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <img
                  src={logo}
                  width="150"
                  height="150"
                  className="d-inline-block align-top"
                  alt=""
                />
                <h1 className="display-3 mb-4" style={{ color: "white" }}>
                  Flight Deck
                </h1>
                <p className="lead">
                  {" "}
                  Flight Deck is an alternative rock band based out of Los
                  Angeles, California.
                </p>
                <Link
                  to="/music"
                  className="btn btn-lg round-btn btn-outline-secondary mr-3 responsive-btn"
                >
                  Music
                </Link>
                <a
                  href="http://flightdeckmerch.bigcartel.com"
                  className="btn btn-lg btn-outline-secondary round-btn ml-3 responsive-btn"
                >
                  Merch
                </a>
                <br />
                <a
                  href="https://www.instagram.com/flightdeckofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram frontIcon" />
                </a>
                <a
                  href="https://twitter.com/Flightdeckbnd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter frontIcon" />
                </a>
                <a
                  href="https://www.facebook.com/flightdeckofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook frontIcon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
