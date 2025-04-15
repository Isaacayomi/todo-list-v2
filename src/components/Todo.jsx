function Todo({ todo, onSetTask }) {
  function handleChecked(id) {
    onSetTask((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function handleDeleteItem(id) {
    onSetTask((tasks) => tasks.filter((task) => task.id !== id));
  }

  return (
    <li
      className="todo-item"
      style={
        todo.completed
          ? {
              textDecoration: "line-through",
              color: "var(--checked)",
            }
          : {}
      }
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleChecked(todo.id)}
      />
      <span style={todo.completed ? { color: "var(--checked)" } : {}}>
        {todo.title}
      </span>
      <img
        src="./images/icon-cross.svg"
        alt="icon-cross"
        onClick={() => handleDeleteItem(todo.id)}
      />
    </li>
  );
}
export default Todo;
