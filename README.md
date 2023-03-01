[https://www.youtube.com/watch?v=BNB-Q5yI-\_o&list=PLHiZ4m8vCp9M6HVQv7a36cp8LKzyHIePr&index=23](https://www.youtube.com/watch?v=BNB-Q5yI-_o&list=PLHiZ4m8vCp9M6HVQv7a36cp8LKzyHIePr&index=23)

[Array.prototype.reduce() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

- useState() is created based on useReducer()
- any of one can be used instead of another

# Fundamental structure

1. declare button
2. create reducer function

```powershell
const [count, dispatch] = useReducer(reducer, initialState);
```

1. initialState and reducer function

```powershell
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
```

1. dispatch button function

```powershell
<div>
      <div>count: {count}</div>
      <button type="button" onClick={() => dispatch("increment")}>
        increment
      </button>
      <button type="button" onClick={() => dispatch("decrement")}>
        decrement
      </button>
    </div>

```

# Complex structure

benefit:

- by making action a object (not direct value), we can set various properties and values
-

```powershell
switch (action.type) {
    case "increment":
      return { counter: state.counter + action.value };
    default:
      return state;
  }

```

-

```powershell
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
```

-

### For multiple counter

style 1

multiple action, single reducer function

```jsx
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
```

style 2

single set of action, multiple useReducer function

```jsx
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
```

# Above complex structure with useContext (Global State)

create a new counterContext.js file

```jsx
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
```

go at index.js and surround index.js with counterContext.js file

```
<React.StrictMode>
    <CounterContext>
      <App />
    </CounterContext>
  </React.StrictMode>
```

### Now, update counterContext and create a Global reducer counter

now we can use global counter function from any component

- create a globalContest.js function

```jsx
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
```

you can visit the live site here of following code

[https://react-reducer-intro.vercel.app/global](https://react-reducer-intro.vercel.app/global)

# Data fetch (useState vs useReducer)
