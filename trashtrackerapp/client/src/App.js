import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { func } from "prop-types";
import axios from "axios";

function Hellobootstrap() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
      </div>
    </div>
  );
}

function Mybutton() {
  return <button>click me!</button>;
}

class App extends React.Component {
  componentDidMount() {
    axios.get("/api/test").then(res => console.log(res.data));
  }
  render() {
    return (
      <div>
        <Hellobootstrap />
        <Mybutton />
      </div>
    );
  }
}
export default App;
