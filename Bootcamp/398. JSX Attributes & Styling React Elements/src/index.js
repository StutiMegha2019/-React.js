// var React = require("react");
// var ReactDOM = require("react-dom");
import React from "react";
import ReactDOM from "react-dom";
const img = "https://picsum.photos/200";
ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="flase">
      My Favourite Foods
    </h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
    <img alt="Gray_image" src={img + "?grayscale"} />
    {/* use "?grayscale" for particular gray image  */}
    <img alt="random" src={img} /> {/* use random image  */}
    <img
      className="food-img"
      alt="jamon"
      src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
    />
    <img
      className="food-img"
      alt="food"
      src="https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240408?k=20&m=1155240408&s=612x612&w=0&h=Zvr3TwVQ-wlfBnvGrgJCtv-_P_LUcIK301rCygnirbk="
    />
    <img
      alt="food"
      className="food-img"
      src="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg"
    />
  </div>,
  document.getElementById("root")
);
