import { useState } from "react";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");

  const handleClick = () => {
    if (taskName != "") {
      let newTask = [...tasks, { todo: taskName, completed: false }];
      setTasks(newTask);
      setTaskName("");
    }
  };

  const handleCheck = (index) => {
    let updatedTodo = [...tasks];
    updatedTodo[index].completed = !updatedTodo[index].completed;
    setTasks(updatedTodo);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter todo"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button onClick={handleClick}>Add Todo</button>
      </div>

      <div>
        {tasks.map((e, index) => (
          <ul key={index} style={{ listStyleType: "none" }}>
            <li>
              <input
                type="checkbox"
                checked={e.completed}
                onChange={() => handleCheck(index)}
              />
              <span
                style={{
                  textDecoration: e.completed ? "line-through" : "none",
                }}
              >
                {e.todo}
              </span>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default App;
