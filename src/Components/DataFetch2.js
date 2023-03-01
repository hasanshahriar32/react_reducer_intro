import React from "react";

const initialState = {
  loading: true,
  error: "",
  post: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "Something went wrong!",
      };
    default:
      return state;
  }
};

const DataFetch2 = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const random = Math.floor(Math.random() * 100) + 1;

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + random + "")
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "FETCH_SUCCESS", payload: json });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);
  return (
    <div>
      <h1>DataFetch2 using useReducer</h1>
      <div>
        {state.loading ? "loading" : state.post.title}
        {state.post.body}
        {state.error ? state.error : null}
      </div>
    </div>
  );
};

export default DataFetch2;
