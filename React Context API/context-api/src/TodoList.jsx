import React, { useState } from "react";

const TodoList = ({ form }) => {
  const data = form.todo;

  const handleToggle = (index) => {
    let updatedData = [...data];
    updatedData[index].completed = !updatedData[index].completed;
    form.setTodo(updatedData);
  };

  return (
    <div>
      {data.map((e, index) => (
        <li
          key={index}
          onClick={() => handleToggle(index)}
          style={{ cursor: "pointer" }}
        >
          <span
            style={{ textDecoration: e.completed ? "line-through" : "none" }}
          >
            {e.task}
          </span>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
