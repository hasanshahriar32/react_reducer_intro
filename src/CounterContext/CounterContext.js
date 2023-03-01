import React, { useReducer } from "react";

export const ComputeContext = React.createContext();

const initialState = 0;
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

const CounterContext = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const countInfo = {
    countState: count,
    countDispatch: dispatch,
  };
  return (
    <div>
      <ComputeContext.Provider value={countInfo}>
        {children}
      </ComputeContext.Provider>
    </div>
  );
};

export default CounterContext;
