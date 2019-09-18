import React, { Component } from "react";

class CreateProject extends Component {
  state = {
    email: "",
    submitted: false
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: "", submitted: true });
  };

  render() {
    let { submitted, email } = this.state;
    return (
      <div>
        {submitted ? (
          <div className="chip thankyou form_wrapper">
            Thank you for your interest!
          </div>
        ) : (
          <form onSubmit={this.handleSubmit} className="form_wrapper">
            <div className="row">
              <div className="col s10">
                <input
                  id="email"
                  type="email"
                  className="email_input"
                  placeholder="Your email address"
                  onChange={this.handleChange}
                  value={email}
                />
              </div>
              <div className="col s">
                <button className="btn notify-btn">Notify Me</button>
              </div>
            </div>
          </form>
        )}
      </div>
    );
  }
}

export default CreateProject;
