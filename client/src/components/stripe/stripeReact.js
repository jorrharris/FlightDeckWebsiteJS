import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import classnames from "classnames";
import logo from "../../img/LOGO4.png";
import { withRouter } from "react-router-dom";

class TakeMoney extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 5.0,
      displayAmount: 5.0,
      centsAmount: 500
    };
  }

  onClick = token => {
    const data = { ...token, amount: this.state.centsAmount };
    axios
      .post("/stripe/charge", data)
      .then(response => {
        const array = response.config.data.split(",");
        //"email":"abc@gmail.com"
        const newArray = array.filter(item => {
          return item.startsWith('"email"');
        });
        const newNewArray = newArray[0].split(":");
        const emailString = newNewArray[1].replace(/"/g, "");
        //post data to /api/send-mail
        const emailData = {
          name: "Unknown",
          email: emailString,
          subject: `Donation`,
          text: `You have recieved a Stripe donation of $${this.numberWithCommas(
            this.state.displayAmount.toFixed(2)
          )}`
        };

        axios
          .post("/api/send-mail", emailData)
          .then(response => {})
          .catch(err => {});

        this.props.history.push("/donation-success");
      })
      .catch(err => this.props.history.push("/donation-error"));
  };

  onClick2 = e => {
    if (this.state.amount === "" || this.state.displayAmount < 5.0) {
      return e.stopPropagation();
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (this.state.amount !== "") {
        this.setState(
          {
            displayAmount: parseFloat(this.state.amount)
          },
          () => {
            this.setState({
              centsAmount: this.state.displayAmount.toFixed(2) * 100
            });
          }
        );
      } else {
        this.setState(
          {
            displayAmount: 0
          },
          () => {
            this.setState({ centsAmount: 0 });
          }
        );
      }
    });
  };

  numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  render() {
    return (
      <div>
        <div className="form-group">
          <div className="form-group">
            <div
              className={classnames("alert alert-danger", {
                "d-none": this.state.displayAmount >= 5.0
              })}
            >
              The minimum donation is $5.00
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">$</span>
              </div>
              <input
                name="amount"
                type="number"
                min="5.00"
                max="100000.00"
                step="0.01"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
                value={this.state.amount}
                onChange={this.onChange}
                required
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  <i className="fab fa-stripe" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <h4>
          Amount: ${this.numberWithCommas(this.state.displayAmount.toFixed(2))}
        </h4>
        <StripeCheckout
          token={this.onClick}
          stripeKey="pk_test_TU20rSgeFY090v5qxXHOjCUt"
          image={logo}
          name="Flight Deck Music" // the pop-in header title
          description={`Amount: $${this.numberWithCommas(
            this.state.displayAmount.toFixed(2)
          )}`} // the pop-in header subtitle
        >
          <button
            type="button"
            onClick={this.onClick2}
            className={classnames("btn btn-primary", {
              disabled:
                this.state.amount === "" || this.state.displayAmount < 5.0
            })}
          >
            Donate
          </button>
        </StripeCheckout>
      </div>
    );
  }
}

export default withRouter(TakeMoney);
