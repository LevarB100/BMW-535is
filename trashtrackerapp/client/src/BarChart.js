// import React, { Component } from "react";
// import * as d3 from "d3";

// import BarChart from "./BarChart.js";

// class BarChart extends Component {
//   componentDidMount() {
//     this.drawChart();
//   }

//   drawChart() {
//     const data = [12, 5, 6, 6, 9, 10];

//     state = {
//       data: [12, 5, 6, 6, 9, 10],
//       width: 700,
//       height: 500,
//       id: "root"
//     };

//     const svg = d3
//       .select("body")
//       .append("svg")
//       .attr("width", w)
//       .attr("height", h)
//       .style("margin-left", 100);

//     svg
//       .selectAll("text")
//       .data(data)
//       .enter()
//       .append("rect")
//       .attr("x", (d, i) => i * 70)
//       .attr("y", (d, i) => h - 10 * d)
//       .attr("width", 65)
//       .attr("height", (d, i) => d * 10)
//       .attr("fill", "green");
//   }

//   render() {
//     return (
//       <div id={"#" + this.props.id}></div>

//       // <div className="App">
//       // <BarChart data={this.state.data} width={this.state.width} height={this.state.height} />
//       // </div>
//     );
//   }
// }

// export default BarChart;
