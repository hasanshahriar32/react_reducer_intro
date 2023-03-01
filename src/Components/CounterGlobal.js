import React from "react";
import { Link } from "react-router-dom";
import { ComputeContext } from "../CounterContext/CounterContext";

const CounterGlobal = () => {
  const countContext = React.useContext(ComputeContext);

  return (
    <div>
      <hr />
      <Link to="/advanced">back</Link>
      <br />
      <hr />
      <br />
      <div>count: {countContext.countState}</div>
      <button
        type="button"
        onClick={() => countContext.countDispatch("increment")}
      >
        increment
      </button>
      <button
        type="button"
        onClick={() => countContext.countDispatch("decrement")}
      >
        decrement
      </button>
      <br />
      <hr />
    </div>
  );
};

export default CounterGlobal;
