import { useState } from "react";

function App() {
  const [inputTask, setInputTask] = useState("");
  const [task, setTasks] = useState([]);
  const [isDark, setIsDark] = useState(false);

  function toggleTheme() {
    setIsDark((isDark) => !isDark);
  }
  return (
    <div className="app" data-theme={isDark ? "dark" : "light"}>
      <Header onToggle={toggleTheme} isDark={isDark} />
      <MainContainer
        inputTask={inputTask}
        onSetInput={setInputTask}
        task={task}
        onSetTask={setTasks}
      />
    </div>
  );
}

function Header({ onToggle, isDark }) {
  return (
    <header>
      <h1>TODO</h1>
      <img
        src={!isDark ? "./images/icon-moon.svg" : "./images/icon-sun.svg"}
        alt="icon"
        className="header-icon"
        onClick={onToggle}
      />
    </header>
  );
}

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

function TodoList({ task, onSetTask }) {
  return (
    <ul>
      {task.map((todo) => (
        <Todo todo={todo} key={todo.id} onSetTask={onSetTask} />
      ))}
    </ul>
  );
}

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

function Footer({ task, onSetTask, sortBy, onSetSortBy }) {
  function handleClearCompleted() {
    onSetTask((tasks) => tasks.filter((task) => task.completed === false));
  }

  return (
    <>
      <footer>
        <span>{task.filter((t) => !t.completed).length} items left</span>
        <div className="filters">
          <p
            className={`${sortBy === "All" ? "active" : ""}`}
            onClick={() => onSetSortBy("All")}
          >
            All
          </p>
          <p
            className={`${sortBy === "Active" ? "active" : ""}`}
            onClick={() => onSetSortBy("Active")}
          >
            Active
          </p>
          <p
            className={`${sortBy === "Completed" ? "active" : ""}`}
            onClick={() => onSetSortBy("Completed")}
          >
            Completed
          </p>
        </div>
        <p className="clear" onClick={handleClearCompleted}>
          Clear Completed
        </p>
      </footer>

      <div className={`filters ${task.length > 0 ? "summary" : ""}`}>
        <p>
          {task.length > 0 &&
            `You have ${task.length} tasks, ${" "}
          ${task.filter((t) => !t.completed).length} active,${" "}
         ${task.filter((t) => t.completed).length} ${""}
          completed`}
        </p>
      </div>
    </>
  );
}

export default App;
