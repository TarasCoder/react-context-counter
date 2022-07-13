import { useContext } from "react";
import { CountContext, CountProvider } from "./contexts/CountContext";
import "./App.css";

function App() {
  const { count, setCount } = useContext(CountContext);

  const handleClick = (ev) => {
    let operation = ev.target.name;
    if (operation === "increment") {
      setCount(count + 1);
    }
    if (operation === "decrement") {
      setCount(count - 1);
    }
  };

  return (
      <div className="App">
        <h1>COUNTER</h1>
        <h2 className="count">{count}</h2>
        <button name="decrement" onClick={handleClick}>
          -
        </button>
        <button name="increment" onClick={handleClick}>
          +
        </button>
      </div>
  );
}

export default App;
