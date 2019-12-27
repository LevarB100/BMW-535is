import React, { Component } from "react";
import { render } from "react-dom";

export default class Createdata extends Component {
  constructor(props) {
    super(props);

    this.onChangeWatercon = this.onChangeWatercon.bind(this);
    this.onChangeemissions = this.onChangeemissions.bind(this);
    this.onChangePlastics = this.onChangePlastics.bind(this);
    this.onChangePaper = this.onChangePaper.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      water_con: "",
      emission_con: "",
      plastic_con: "",
      paper_con: ""
    };
  }

  onChangeWatercon(e) {
    this.setState({
      water_con: e.target.value
    });
  }

  onChangeemissions(e) {
    this.setState({
      emission_con: e.target.value
    });
  }

  onChangePlastics(e) {
    this.setState({
      plastic_con: e.target.value
    });
  }

  onChangePaper(e) {
    this.setState({
      paper_con: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Water Conserve: ${this.state.water_con}`);
    console.log(`Emission Conserve: ${this.state.emission_con}`);
    console.log(`Plastic Conserve: ${this.state.plastic_con}`);
    console.log(`Paper Conserve: ${this.state.paper_con}`);

    this.setState({
      water_con: "",
      emission_con: "",
      plastic_con: "",
      paper_con: ""
    });
  }

  render() {
    return (
      <div style={{ MarginTop: 20 }}>
        <h3> Input Data Page </h3>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Water Conserve Amount</label>
            <input
              type="text"
              className="form-control"
              value={this.state.water_con}
              onChange={this.onChangeWatercon}
            />
          </div>
          <div className="form-group">
            <label>Bicycle Riding Distance</label>
            <input
              type="text"
              className="form-control"
              value={this.state.emission_con}
              onChange={this.onChangeemissions}
            />
          </div>
          <div className="form-group">
            <label>Plastic Recylcled Amount</label>
            <input
              type="text"
              className="form-control"
              value={this.state.plastic_con}
              onChange={this.onChangePlastics}
            />
          </div>
          <div className="form-group">
            <label>Paper Recycled Amount</label>
            <input
              type="text"
              className="form-control"
              value={this.state.paper_con}
              onChange={this.onChangePaper}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Data"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
