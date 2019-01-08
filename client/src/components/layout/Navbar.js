import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/LOGO3.png";
import classnames from "classnames";

class Navbar extends Component {
  render() {
    const pathname = window.location.pathname;

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Flight Deck
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={classnames("nav-link", {
                  active: pathname === "/"
                })}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/music" className="nav-link">
                Music
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="http://flightdeckmerch.bigcartel.com"
                className="nav-link"
              >
                Merch
              </a>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/donate" className="nav-link">
                Donate
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav followButton">
            <li className="nav-item followButton">
              <iframe
                title="follow"
                src="https://open.spotify.com/follow/1/?uri=spotify:artist:5ADZ1KqGgl7gP0lQAhbVKN&size=basic&theme=dark"
                height="27"
                width="150"
                scrolling="no"
                frameBorder="0"
                allowtransparency="true"
              />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
