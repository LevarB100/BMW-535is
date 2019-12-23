import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { func } from "prop-types";
import "./trial.js";

function Greeting() {
  return <h1>If you agree this guy talks to fast then!!!!!</h1>;
}

function Mybutton() {
  return <button>click me!</button>;
}

function trial() {
  return (
    <div>
      <Greeting />
      <Mybutton />
    </div>
  );
}

export default trial;
