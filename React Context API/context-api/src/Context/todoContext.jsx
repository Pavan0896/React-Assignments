import React, { createContext, useState } from "react";

const todoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("");

  return (
    <todoContext.Provider value={{ task, setTask, todo, setTodo }}>
      {children}
    </todoContext.Provider>
  );
};

export { todoContext, TodoProvider };
