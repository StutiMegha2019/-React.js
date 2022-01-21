import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Fruits"
      img="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      tel="+123 456 789"
      email="b@fruits.com"
    />
    <Card
      name="Vegetables"
      img="https://media.istockphoto.com/photos/variety-of-fresh-organic-vegetables-and-fruits-in-the-garden-picture-id1280856062?b=1&k=20&m=1280856062&s=170667a&w=0&h=wQu-c2ZjzeCBkAGEj69xpF611lx1i_xim48vOCj_Dw0="
      tel="+7387384587"
      email="stuti@vegetables.com"
    />
  </div>,
  document.getElementById("root")
);
