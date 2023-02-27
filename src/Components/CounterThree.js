import React, { useReducer } from "react";
import { Link } from "react-router-dom";

const initialState = 0;
const initialState1 = 5;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const CounterThree = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState1);
  return (
    <div>
      <hr />
      <Link to="/">back</Link>
      <br />
      <hr />
      <br />
      <div>count: {count}</div>
      <button type="button" onClick={() => dispatch("increment")}>
        increment
      </button>
      <button type="button" onClick={() => dispatch("decrement")}>
        decrement
      </button>
      <br />
      <hr />
      <div>count: {count2}</div>
      <button type="button" onClick={() => dispatch2("increment")}>
        increment
      </button>
      <button type="button" onClick={() => dispatch2("decrement")}>
        decrement
      </button>
      <br />
      <hr />
      <Link to="/global">Global Counter</Link>
      <br />
      <hr />
      <br />
    </div>
  );
};

export default CounterThree;
