[https://www.youtube.com/watch?v=BNB-Q5yI-\_o&list=PLHiZ4m8vCp9M6HVQv7a36cp8LKzyHIePr&index=23](https://www.youtube.com/watch?v=BNB-Q5yI-_o&list=PLHiZ4m8vCp9M6HVQv7a36cp8LKzyHIePr&index=23)

[Array.prototype.reduce() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

- useState() is created based on useReducer()
- any of one can be used instead of another

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/31b9b54d-78ee-4307-84ec-f6e71e3a968f/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6f1030d5-f39a-471d-bd21-89ca860f2387/Untitled.png)

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

# Above complex structure at a different way
