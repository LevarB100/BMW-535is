import React, { Component } from "react";
import { render } from "react-dom";

export default class Createdata extends Component {
  constructor(props) {
    super(props);

    this.state = {
      water_con: "",
      emission_con: "",
      plastic_con: "",
      paper_con: ""
    };
  }

  onChangeWatercon(e) {
    this.setstate({
      water_con: e.target.value
    });
  }

  onChangeemissions(e) {
    this.setstate({
      emission_con: e.target.value
    });
  }

  onChangePlastcs(e) {
    this.setstate({
      plastic_con: e.target.value
    });
  }

  onChangePaper(e) {
    this.setstate({
      paper_con: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    this.setState({
      water_con: "",
      emission_con: "",
      plastic_con: "",
      paper_con: ""
    });
  }

  render() {
    return (
      <div>
        <p>Welcome to the Createdata Page MFer!</p>
      </div>
    );
  }
}
