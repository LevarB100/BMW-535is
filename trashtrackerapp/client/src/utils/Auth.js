import axios from "axios";
import { METHODS } from "http";

function Auth() {
  let loggedIn = false;

  function logIn(username, password, cb) {
    axios
      .post("/api/authenticate", {
        username: username,
        password: password
      })
      .then(res => {
        console.log(res);
        loggedIn = true;
        localStorage.setItem("token", res.data.token);
        cb(res.data);
      });
  }

  function logOut(cb) {
    localStorage.removeItem("token");
    loggedIn = false;
    cb();
  }

  function getToken() {
    return localStorage.getItem("token");
  }

  function isLoggedIn() {
    // terniary METHODS;
    return localStorage.getItem("token") ? true : false;
    // or
    // if (localStorage.getItem("token")) {
    //   return true;
    // } else {
    //   return false;
    // }
  }

  return {
    isLoggedIn,
    logIn,
    logOut,
    getToken
  };
}

export default Auth();
