import React from "react";
import ReactDOM from "react-dom";

const fName = "Stuti";
const lName = "Megha";
const State = "Dehradun";

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <p>I am in {State}</p>
  </div>,
  document.getElementById("root")
);
