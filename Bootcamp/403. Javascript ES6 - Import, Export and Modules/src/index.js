import React from "react";
import ReactDOM from "react-dom";
import pi, { doublepi, triplepi } from "./math.js";

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublepi()}</li>
    <li>{triplepi()}</li>
  </ul>,
  document.getElementById("root")
);

/////////////////////Another way to import and export ////////////

// import React from "react";
// import ReactDOM from "react-dom";
// import * as pi from "./math";
// ReactDOM.render(

//   <ul>
//   <li>{pi.default}</li>
//   <li>{pi.doublepi()}</li>
//   <li>{pi.triplepi()}</li>
// </ul>,
//   document.getElementById("root")
// );
