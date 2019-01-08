import React, { Component } from "react";
import StripeReact from "../stripe/stripeReact";

class Donate extends Component {
  render() {
    return (
      <div className="text-center mt-5">
        <div className="card border-primary mb-3">
          <div className="card-header">
            <h1>Donate</h1>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-3" />
              <div className="col-lg-6">
                <p className="card-text text-left dark">
                  Flight Deck uses Stripe to collect donations. Stripe is a
                  software platform that goes through great lengths to ensure
                  your information is safe and secure. Even we don't even have
                  access to it!{" "}
                </p>
                <StripeReact />
              </div>
              <div className="col-3-lg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Donate;
