import logo from "./logo.svg";
import "./App.css";
import Counter from "./Components/Counter";
import ComplexCounter from "./Components/ComplexCounter";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <ComplexCounter></ComplexCounter>
    </div>
  );
}

export default App;
