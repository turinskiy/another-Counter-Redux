import React from "react";
import { connect } from "react-redux";
import { ADD_ONE, MINUS_ONE } from "./redux/actions";

const containerStyle = {
  display: "flex",
  justifyContent: "center"
};
const buttonStyle = {
  fontSize: "1.5rem",
  width: "40px",
  height: "40px"
};
const mapStateToProps = (state) => ({
  number: state.number
});

function Counter(props) {
  const addOne = () => {
    props.dispatch({ type: ADD_ONE });
  };
  const minusOne = () => {
    props.dispatch({ type: MINUS_ONE });
  };

  return (
    <div className="App">
      <header>
        <h1>{props.number}</h1>
        <div style={containerStyle}>
          <button onClick={minusOne} type="button" style={buttonStyle}>
            -
          </button>
          <button onClick={addOne} type="button" style={buttonStyle}>
            +
          </button>
        </div>
      </header>
    </div>
  );
}

// export default Counter;
export default connect(mapStateToProps)(Counter);
