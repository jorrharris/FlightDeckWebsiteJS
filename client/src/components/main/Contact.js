import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      text: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    //post data to /api/send-mail
    const emailData = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      text: this.state.text
    };

    axios
      .post("/api/send-mail", emailData)
      .then(response => this.props.history.push("/email-success"))
      .catch(err => this.props.history.push("/email-error"));
  };

  render() {
    return (
      <div>
        <div className="card border-primary mt-3">
          <div className="card-header">
            <h4 className="text-center mt-3">Contact The Band</h4>
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group contact">
                <label className="col-form-label" htmlFor="inputDefault">
                  Full Name:
                </label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  id="inputDefault"
                  value={this.state.name}
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="form-group contact">
                <label htmlFor="exampleInputEmail1">Email Address:</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.onChange}
                  required
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group contact">
                <label className="col-form-label" htmlFor="inputDefault">
                  Subject:
                </label>
                <input
                  name="subject"
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  id="inputDefault"
                  value={this.state.subject}
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="form-group contact">
                <label htmlFor="exampleTextarea">Message:</label>
                <textarea
                  name="text"
                  className="form-control"
                  id="exampleTextarea"
                  rows="3"
                  value={this.state.text}
                  onChange={this.onChange}
                  placeholder="Message"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Contact);
