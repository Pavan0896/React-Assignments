import { useContext, useState } from "react";
import TodoForm from "./TodoForm";
import "./App.css";
import { todoContext } from "./Context/todoContext";
import TodoList from "./TodoList";

function App() {
  const todo = useContext(todoContext);

  let task = todo.task;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task != "") {
      let newTodo = [...todo.todo, { task, completed: false }];
      todo.setTodo(newTodo);
      todo.setTask("");
    }
  };

  return (
    <>
      <div>
        <TodoForm form={todo} submit={handleSubmit} />
      </div>

      <div>
        <TodoList form={todo} />
      </div>
    </>
  );
}

export default App;
