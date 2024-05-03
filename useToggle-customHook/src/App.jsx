import "./App.css";
import useToggleItems from "./ToggleItems";

function App() {
  const items = ["A", "B", "C"];
  const [state, toggleState] = useToggleItems(items, 1);

  return (
    <>
      <div>
        <p>Current state: {state}</p>
        <button onClick={toggleState}>Toggle State</button>
      </div>
    </>
  );
}

export default App;
