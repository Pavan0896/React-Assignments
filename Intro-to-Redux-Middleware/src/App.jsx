import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useRef } from "react";
import { addActions, submitActions } from "./Store/actions";

function App() {
  const data = useSelector((store) => store.task);
  const dispatch = useDispatch();
  const tasks = useRef([]);
  const handleClick = () => {
    let newTasks = [...tasks.current, { data }];
    tasks.current = newTasks;
    dispatch(submitActions());
  };

  return (
    <>
      <h1>Introduction to Redux Middleware in React</h1>
      <div>
        <input
          type="text"
          value={data}
          onChange={(e) => dispatch(addActions(e.target.value))}
        />
      </div>
      <button onClick={handleClick}>Add</button>
      {tasks.current.length > 0 ? (
        tasks.current.map((e, i) => <li key={i}>{e.data}</li>)
      ) : (
        <div>No data</div>
      )}
    </>
  );
}

export default App;
