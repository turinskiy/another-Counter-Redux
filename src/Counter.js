import React, { useState } from "react";

const containerStyle = {
  display: "flex"
};
const buttonStyle = {
  fontSize: "1.5rem",
  width: "40px",
  height: "40px"
};

function Counter(props) {
  const [number, setNumber] = useState(0);

  const addOne = () => {
    setNumber((number) => number + 1);
  };
  const minusOne = () => {
    setNumber((number) => number + 1);
  };

  return (
    <div className="App">
      <header>
        <h1>{number}</h1>
        <div style={containerStyle}>
          <button onClick={addOne} type="button" style={buttonStyle}>
            -
          </button>
          <button onClick={minusOne} type="button" style={buttonStyle}>
            +
          </button>
        </div>
      </header>
    </div>
  );
}

export default Counter;
