import TodoItem from "./TodoItem";

const TodoList = ({ data, setTodo }) => {
  return (
    <div>
      {data.map((e, index) => (
        <TodoItem data={data} ele={e} index={index} setTodo={setTodo} />
      ))}
    </div>
  );
};

export default TodoList;
