import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskName) {
      let newTodo = [...todo, { taskName, completed: false }];
      setTodo(newTodo);
      setTaskName("");
    }
  };

  return (
    <>
      <TodoForm
        taskName={taskName}
        setTaskName={setTaskName}
        submit={handleSubmit}
      />
      <div>
        <TodoList data={todo} setTodo={setTodo} />
      </div>
    </>
  );
}

export default App;
