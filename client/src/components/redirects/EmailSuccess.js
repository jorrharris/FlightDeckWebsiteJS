import React, { Component } from "react";
import { Link } from "react-router-dom";

class EmailSuccess extends Component {
  render() {
    return (
      <div className="text-center alert alert-success mt-5">
        <h1 className="mt-3">Email Successfully Sent</h1>
        <p>
          Your email has been sent to Flight Deck. We will try our best to get
          back in touch with you as soon as we can. Thank you for contacting us!
        </p>
        <Link
          to="/"
          className="btn btn-lg round-btn btn-outline-secondary mr-3 mb-3 responsive-btn"
        >
          Return Home
        </Link>
        <Link
          to="/contact"
          className="btn btn-lg round-btn btn-outline-secondary mr-3 mb-3 responsive-btn"
        >
          Send Another Email
        </Link>
      </div>
    );
  }
}

export default EmailSuccess;
