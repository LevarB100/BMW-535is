import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import UserContext from "../context/UserContext";
import conversions from "../functions/conversions";
import { Bar } from "react-chartjs-2";

//variable holding the metrics that go intothe table
const Ttrack = props => (
  <tr>
    <td>{props.ttrack1.water_con}</td>
    <td>{props.ttrack1.emission_con}</td>
    <td>{props.ttrack1.plastic_con}</td>
    <td>{props.ttrack1.paper_con}</td>
  </tr>
);

function calculatePlasticTotals(ttrackerArray) {
  console.log("hit");
  let total = 0;
  for (let i = 0; i < ttrackerArray.length; i++) {
    total += ttrackerArray[i].plastic_con;
    console.log(ttrackerArray[i]);
  }
  return total;
}

export default class ttracker1List extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    // Initial state of the main page. Empty array because it gets it's data from the db
    this.state = { ttracker: [] };
  }

  componentDidMount() {
    axios
      .get("/ttracker", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      })
      .then(response => {
        console.log("got all of the values from db");
        console.log(response.data);
        this.context.setId(response.data[0]._id);
        const totalPlastics = calculatePlasticTotals(response.data);
        this.setState({
          ...this.state,
          ttracker: response.data,
          plasticTotals: totalPlastics
          // emissionTotals: calculateEmissionTotals(response.data)
        });
        // console.log(response.data[0]);
        // console.log(conversions.savedFish(300));
      })

      .catch(function(error) {
        console.log(error);
      });
  }

  data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

  render() {
    return (
      <div>
        <h3>Consevation Tracker</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Water</th>
              <th>Emissions</th>
              <th>Plastic</th>
              <th>Paper</th>
            </tr>
          </thead>
          <tbody>
            {this.state.ttracker.map(function(currentTtrack, i) {
              return <Ttrack ttrack1={currentTtrack} key={i} />;
            })}
          </tbody>
        </table>
        <div>
          <ul>
            <li>Total Plastic Recycled{this.state.plasticTotals}</li>
          </ul>
          <Bar
            data={this.data}
            width={100}
            height={50}
            options={{
              maintainAspectRatio: false
            }}
          />
        </div>
      </div>
    );
  }
}
