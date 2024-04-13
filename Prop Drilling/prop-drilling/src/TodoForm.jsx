import React from "react";

const TodoForm = ({taskName,setTaskName, submit }) => {
  return (
    <div>
      <form onSubmit={submit}>
        <input type="text" value={taskName} onInput={(e) => setTaskName(e.target.value)} />
        <input type="submit" />
      </form>
      
    </div>
  );
};

export default TodoForm;
