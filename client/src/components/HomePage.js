import React from "react";
import UserContext from "../context/UserContext";

const HomePage = props => (
  <div>
    <UserContext.Consumer>
      {value => (
        <>
          <h1>Home Page (protected)</h1>
          <h2>Welcome, {value.user && value.user.username}!</h2>
        </>
      )}
    </UserContext.Consumer>
  </div>
);

export default HomePage;
