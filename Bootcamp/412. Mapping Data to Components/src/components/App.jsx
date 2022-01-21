import React from "react";
import Card from "./card";
import contacts from "../contact";
import Images from "./image";

function createCard(contact){
  return ( <Card 
  id={contact.id}
  key={contact.id}
  name ={contact.name} 
  img={contact.img}
  tel={contact.tel}
  email={contact.email}
  />
  ); 
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Images img="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__340.jpg"/>
    { contacts.map(createCard)}
      {/* <Card
        name={contacts[0].name}
        img={contacts[0].img}
        tel={contacts[0].tel}
        email={contacts[0].email}
      />
       <Card
          name={contacts[1].name}
        img={contacts[1].img}
        tel={contacts[1].tel}
        email={contacts[1].email}
      />
      <Card
          name={contacts[2].name}
        img={contacts[2].img}
        tel={contacts[2].tel}
        email={contacts[2].email}
      /> */}
    </div>
  );
}
export default App;
