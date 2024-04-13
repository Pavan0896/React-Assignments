const TodoItem = ({ data, ele, index, setTodo }) => {
  const toggleHandle = (index) => {
    let updatedData = [...data];
    updatedData[index].completed = !updatedData[index].completed;
    setTodo(updatedData);
  };

  return (
    <div>
      <li
        key={index}
        onClick={() => toggleHandle(index)}
        style={{ cursor: "pointer" }}
      >
        <span
          style={{ textDecoration: ele.completed ? "line-through" : "none" }}
        >
          {ele.taskName}
        </span>
      </li>
    </div>
  );
};

export default TodoItem;
