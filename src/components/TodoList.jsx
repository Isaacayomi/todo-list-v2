import Todo from "./Todo";

function TodoList({ task, onSetTask }) {
  return (
    <ul>
      {task.map((todo) => (
        <Todo todo={todo} key={todo.id} onSetTask={onSetTask} />
      ))}
    </ul>
  );
}
export default TodoList;
