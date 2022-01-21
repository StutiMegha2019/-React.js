import React from "react";
import Login from "./login";

var isloggedin = false;

function App() {
  return (
    <div className="container">
      {isloggedin === true ? <h1>Hello</h1> : <Login />};
    </div>
  );
}

export default App;
