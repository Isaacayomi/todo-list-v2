import { useEffect } from "react";
import Todo from "./Todo";

function TodoList({ task, onSetTask }) {
  useEffect(
    function () {
      localStorage.setItem("task", JSON.stringify(task));
    },
    [task]
  );

  return (
    <ul>
      {task.map((todo) => (
        <Todo todo={todo} key={todo.id} onSetTask={onSetTask} />
      ))}
    </ul>
  );
}
export default TodoList;
