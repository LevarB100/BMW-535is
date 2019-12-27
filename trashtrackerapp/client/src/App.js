import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import { func } from "prop-types";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Createdata from "./components/createdata.components";
import Editdata from "./components/editdata.components";
import MainPage from "./components/mainpage.components";

function Hellobootstrap() {
  return (
    <>
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">TrashTracker.com</h1>
          <p className="lead">The home of the competitive enviromentalist!</p>
          <hr className="my-4" />
        </div>
      </div>
    </>
  );
}

// function Mybutton() {
//   return;
// }

class App extends React.Component {
  componentDidMount() {
    axios.get("/api/test").then(res => console.log(res.data));
  }
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">
              Trash Tracker App
            </a>

            {/* <Link to="/Create" className="navbar-brand">
              Create Challenge
            </Link> */}
            {/* <div className="collapse nav-collapse"> */}
            <ul className="navbar-nav mr-auto">
              {/* <li className="navbar-item"> */}
              <Link to="/" className="nav-link">
                [Main Page]
              </Link>
              {/* </li> */}
              {/* <li className="navbar-item"> */}
              <Link to="/create" className="nav-link">
                [Create Challenge]
              </Link>
              {/* </li> */}
              <Link to="/edit/:id" className="nav-link">
                [Your Results!]
              </Link>
            </ul>
            {/* </div> */}
          </nav>
          <Hellobootstrap />
          <Route path="/" exact component={MainPage} />
          <Route path="/edit/:id" component={Editdata} />
          <Route path="/create" component={Createdata} />
        </div>
      </Router>
    );
  }
}
export default App;
