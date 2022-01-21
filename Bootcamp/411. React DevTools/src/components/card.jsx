import React from "react";
import Images from "./image"
import Details from "./details"
function Card(props) {
  return (
    <div>
    
      {/* <h1 className="heading">My Contacts</h1> */}
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Images img={props.img}/>
        </div>
        <div className="bottom">
         <Details detailsInfo={props.tel} />
         <Details detailsInfo={props.email} />
         
        </div>
      </div>
    </div>
  );
}

export default Card;
