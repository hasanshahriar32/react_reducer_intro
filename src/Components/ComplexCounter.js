import React, { useReducer } from "react";
import { Link } from "react-router-dom";

const initialState = {
  counter: 0,
  counter2: 5,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.value };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
    case "reset":
      return { ...state, counter: initialState.counter };
    case "increment2":
      return { ...state, counter2: state.counter2 + action.value };
    case "decrement2":
      return { ...state, counter2: state.counter2 - 1 };
    case "reset2":
      return { ...state, counter2: initialState.counter2 };
    default:
      return state;
  }
};

const ComplexCounter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Complex Counter</h1>
      <h4>first counter</h4>
      <div>count: {count.counter}</div>
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: "increment",
            value: 1,
          })
        }
      >
        increment by 1
      </button>
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: "increment",
            value: 5,
          })
        }
      >
        increment by 5
      </button>
      <br />
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: "decrement",
          })
        }
      >
        decrement
      </button>
      <br />
      <br />
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: "reset",
          })
        }
      >
        reset
      </button>
      <br />
      <br />
      <br />
      <br />
      <h4>second counter</h4>
      <div>count: {count.counter2}</div>
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: "increment2",
            value: 1,
          })
        }
      >
        increment2 by 1
      </button>
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: "increment2",
            value: 5,
          })
        }
      >
        increment2 by 5
      </button>
      <br />
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: "decrement2",
          })
        }
      >
        decrement2
      </button>
      <br />
      <br />
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: "reset2",
          })
        }
      >
        reset
      </button>

      <br />
      <br />
      <br />
      <br />
      <br />
      <Link to="/advanced">Advanced</Link>
    </div>
  );
};

export default ComplexCounter;
