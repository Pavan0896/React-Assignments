import React from "react";

const TodoForm = ({ form, submit }) => {
  return (
    <div>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Enter Todo"
          value={form.task}
          onChange={(e) => form.setTask(e.target.value)}
        />
        <input type="submit" value={"Add"}/>
      </form>
    </div>
  );
};

export default TodoForm;
