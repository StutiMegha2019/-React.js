import React, { useState } from "react";

function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");

  const [isMousedOver, setMouseOver] = useState(false);

  function updateFName(event) {
    const firstName = event.target.value;
    setFName(firstName);
  }
  function updateLName(event) {
    const lastName = event.target.value;
    setLName(lastName);
  }

  function updateEmail(event) {
    const EMail = event.target.value;
    setEmail(EMail);
  }
  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <p>{email}</p>
      <form>
        <input
          onChange={updateFName}
          type="text"
          placeholder="What is your name?"
          value={fName}
        />
        <input
          onChange={updateLName}
          type="text"
          placeholder="What is your name?"
          value={lName}
        />
        <input
          onChange={updateEmail}
          type="email"
          placeholder="Email"
          value={email}
        />
        <button
          type="submit"
          style={{ backgroundColor: isMousedOver ? "black" : "white" }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
