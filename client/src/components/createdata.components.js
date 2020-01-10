import React, { Component } from "react";
import { render } from "react-dom";
import axios from "axios";

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

    // Below is the variable (newttracker) containing the values from user form.
    const newttracker = {
      name: Math.random().toString(),
      water_con: this.state.water_con,
      emission_con: this.state.emission_con,
      plastic_con: this.state.plastic_con,
      paper_con: this.state.paper_con
    };
    // axios call making a "axios post request" to the back end containing new metrics to be ADDED to the database
    axios
      .post("/ttracker/add", newttracker, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      })
      .then(res => console.log(res.data));

    this.setState({
      water_con: "",
      emission_con: "",
      plastic_con: "",
      paper_con: ""
    }); 
  }

  //let buttonU = document.getElementById("#update")

  // Clickme() {
  //   // alert(document.getElementById("ttId").value);
  //   axios
  //     .get("/ttracker/" + document.getElementById("ttId").value)
  //     .then(response => {
  //       console.log(response.data);

  //       this.state.water_con = response.data.water_con;
  //       this.state.emission_con = response.data.emission_con;
  //       this.state.plastic_con = response.data.plastic_con;
  //       this.state.paper_con = response.data.paper_con;

  //       // this.props.setId(response.data[0]._id);
  //       // this.setState({ ttracker: response.data });
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // }

  // button.onClick(funcion(trackerToUpdateId) {
  //get old data
  getCurrentData(id) {
    axios
      .get("/ttracker/" + id)
      .then(response => {
        console.log(response.data);
        // this.props.setId(response.data[0]._id);
        // this.setState({ ttracker: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  //get new data

  //add them together

  //create a new updatedTrackerobj

  //use axios send new obj to localhost:4000/ttracker/update/id

  // })

  render() {
    return (
      <div style={{ MarginTop: 20 }}>
        {/* <h3> Input Data Page </h3>
        <label>Lookup ID</label>
        <input type="text" id="ttId" className="form-control" /> */}

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Water Conserve Amount in Liters </label>
            <input
              type="text"
              className="form-control"
              value={this.state.water_con}
              onChange={this.onChangeWatercon}
            />
          </div>
          <div className="form-group">
            <label>Bicycle Riding Distance in Miles</label>
            <input
              type="text"
              className="form-control"
              value={this.state.emission_con}
              onChange={this.onChangeemissions}
            />
          </div>
          <div className="form-group">
            <label>
              Plastic Recylcled Amount (Number of Water Bottles Recycled)
            </label>
            <input
              type="text"
              className="form-control"
              value={this.state.plastic_con}
              onChange={this.onChangePlastics}
            />
          </div>
          <div className="form-group">
            <label>Paper Recycled Amount in Pounds</label>
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
