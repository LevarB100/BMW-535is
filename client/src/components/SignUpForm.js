import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserContext from "../context/UserContext";
// import Auth from "../utils/Auth";
import axios from "axios";

class SignUpForm extends Component {
  static contextType = UserContext;

  state = {
    username: "",
    password: ""
  };

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitHandler = e => {
    e.preventDefault();
    const { username, password } = this.state;
    if (username && password) {
      axios.post("/api/signup", this.state).then(response => {
        if (response.error) {
          console.log(response.error);
        } else {
          this.props.history.push("/login");
        }
      });
      //   Auth.logIn(username, password, response => {
      //     //execute setUser from context
      //     this.context.setUser(response);
      //     this.props.history.push("/");
      //   });
    }
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.changeHandler}
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.changeHandler}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default withRouter(SignUpForm);
