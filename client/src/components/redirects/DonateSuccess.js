import React, { Component } from "react";
import { Link } from "react-router-dom";

class DonateSuccess extends Component {
  render() {
    return (
      <div className="text-center alert alert-success mt-5">
        <h1 className="mt-3">Donation Successfully Sent</h1>
        <p>
          Your donation has successfully been sent to Flight Deck. Thank you so
          much for supporting our cause!
        </p>
        <Link
          to="/"
          className="btn btn-lg round-btn btn-outline-secondary mr-3 mb-3 responsive-btn"
        >
          Return Home
        </Link>
      </div>
    );
  }
}

export default DonateSuccess;
