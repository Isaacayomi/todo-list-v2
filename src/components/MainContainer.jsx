import { useState } from "react";
import TodoList from "./TodoList";
import Footer from "./Footer";

function MainContainer({ inputTask, onSetInput, task, onSetTask }) {
  const [sortBy, setSortBy] = useState("All");

  // Filtering Logic
  const filteredTask = task.filter((task) => {
    if (sortBy === "All") return true;
    if (sortBy === "Active") return !task.completed;
    if (sortBy === "Completed") return task.completed;
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputTask) return;
    const id = crypto.randomUUID();
    const newTask = { id: id, title: inputTask, completed: false };
    console.log(newTask);
    onSetTask((tasks) => [...tasks, newTask]);
    onSetInput("");
  }
  return (
    <main>
      <div className="input-field">
        <div className="oval-copy"></div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Create a new todo..."
            className="input-todo"
            value={inputTask}
            onChange={(e) => onSetInput(e.target.value)}
          />
        </form>
      </div>
      <div className="todo-list-container">
        <TodoList task={filteredTask} onSetTask={onSetTask} />
        <Footer
          task={task}
          onSetTask={onSetTask}
          sortBy={sortBy}
          onSetSortBy={setSortBy}
        />
      </div>
    </main>
  );
}

export default MainContainer;
