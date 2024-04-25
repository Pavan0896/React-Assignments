import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(1);
  const mapStateToProps = useSelector((store) => store);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(count + 1);
    if (name != "") {
      dispatch({ type: "ADD", payload: name, count: count });
      setName("");
    }
  };

  return (
    <>
      <h1>Todo Application using React-Redux</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter todo"
          value={name}
          onInput={(e) => setName(e.target.value)}
        />
        <input type="submit" value="Add" />
      </form>

      {mapStateToProps.map((e, i) => (
        <li key={e.id}>
          <input
            type="checkbox"
            checked={e.status}
            onChange={() => dispatch({ type: "STATUS", id: i })}
          />
          <span style={{ textDecoration: e.status ? "line-through" : "none" }}>
            {e.title}
          </span>
          <button onClick={() => dispatch({ type: "DELETE", id: i })}>
            Delete
          </button>
        </li>
      ))}
    </>
  );
}

export default App;
