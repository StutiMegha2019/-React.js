import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");
  const [isMousedOver, setMouseOver] = useState(false);

  function handleChange(event) {
    setName(event.target.value);
  }
  function handleClick(event) {
    setHeading(name);

    event.preventDefault();
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What is your name?"
          value={name}
        />
        <button
          type="submit"
          style={{ backgroundColor: isMousedOver ? "black" : "white" }}
          onClick={handleClick}
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
