import React, { Component } from "react";
import { Link } from "react-router-dom";

class DonateError extends Component {
  render() {
    return (
      <div className="text-center alert alert-danger mt-5">
        <h1 className="mt-3">Error</h1>
        <p>
          I'm sorry, there was an error while trying to send your donation.
          Please check your information and try again later.
        </p>
        <Link
          to="/"
          className="btn btn-lg round-btn btn-outline-secondary mr-3 mb-3 responsive-btn"
        >
          Return Home
        </Link>
        <Link
          to="/donate"
          className="btn btn-lg round-btn btn-outline-secondary mr-3 mb-3 responsive-btn"
        >
          Try Again
        </Link>
      </div>
    );
  }
}

export default DonateError;
