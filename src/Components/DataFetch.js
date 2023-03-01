import React from "react";
import { Link } from "react-router-dom";

const DataFetch = () => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const [post, setPost] = React.useState({});

  const random = Math.floor(Math.random() * 100) + 1;
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + random + "")
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setPost(json);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setError("Something went wrong!");
      });
  }, []);
  return (
    <div>
      <hr />
      <Link to="/global">back</Link>
      <br />
      <hr />
      <br />
      <h1>Data Fetch using useState</h1>

      <h3>{loading ? "Loading..." : post.title}</h3>
      {post.body}
      {error ? error : null}
      <br />
      {/* create button to fetch new data */}
      <button type="button" onClick={() => window.location.reload()}>
        Fetch new data
      </button>
      <br />
    </div>
  );
};

export default DataFetch;
