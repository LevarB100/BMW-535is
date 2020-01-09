import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import { func } from "prop-types";
import axios from "axios";
import Auth from "./utils/Auth";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Createdata from "./components/createdata.components";
import Editdata from "./components/editdata.components";
import MainPage from "./components/mainpage.components";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import UserContext from "./context/UserContext";
import SignUpPage from "./components/SignUpPage";

function Hellobootstrap() {
  // Because I have placed state &SetUser into a context provider command and sent the information to
  //  "Usercontext" file....Usercontext file automatically sends that user info that comes from the login
  // method through to SetUser and state.
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
  state = {
    currentID: "",
    user: null
  };

  setUser = user => {
    this.setState({ user });
  };

  setId = id => {
    console.log("id:", id);
    this.setState({ currentID: id });
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("/api/me", {
          headers: {
            Authorization: `Bearer ${Auth.getToken()}`
          }
        })
        .then(res => {
          console.log(res.data);
          this.setUser(res.data);
        });
    }
  }

  logUserOut = trackerLogout => {
    localStorage.removeItem("token");
    window.location.replace("/login");
  };

  render() {
    const { user } = this.state;
    const setUser = this.setUser;
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">
              Trash Tracker App
            </a>

            <ul className="navbar-nav mr-auto">
              <Link to="/" className="nav-link">
                [Main Page]
              </Link>
              <Link to="/">Home</Link> | <Link to="/login">Login</Link>
              <Link to="/create" className="nav-link">
                [Create Challenge]
              </Link>
              <Link to={`/update/${this.state.currentID}`} className="nav-link">
                [Update Challenge]
              </Link>
              <Link to="/edit/:id" className="nav-link">
                [Your Results!]
              </Link>
            </ul>
            <button onClick={this.logUserOut} id="logout">
              Logout
            </button>
          </nav>
          {/* <Hellobootstrap />
          <Route
            path="/"
            exact
            render={routeProps => (
              <LoginPage {...routeProps} setId={this.setId} />
            )} */}
          {/* // using the provider idea: context provider to wrap routes */}
          <UserContext.Provider
            value={{
              user: user,
              setUser: setUser,
              currentID: this.state.currentID,
              setId: this.setId
            }}
          >
            {" "}
            <ProtectedRoute exact path="/update/:id" component={Editdata} />
            <ProtectedRoute exact path="/create" component={Createdata} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <ProtectedRoute exact path="/" component={MainPage} />
          </UserContext.Provider>
        </div>
      </Router>
    );
  }
}
export default App;
