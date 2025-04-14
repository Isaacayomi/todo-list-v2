import { useState } from "react";

function App() {
  const [inputTask, setInputTask] = useState("");
  const [task, setTasks] = useState([]);
  return (
    <div className="app">
      <Header />
      <MainContainer
        inputTask={inputTask}
        onSetInput={setInputTask}
        task={task}
        onSetTask={setTasks}
      />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>TODO</h1>
      <img src="./images/icon-moon.svg" alt="icon" className="header-icon" />
    </header>
  );
}

function MainContainer({ inputTask, onSetInput, task, onSetTask }) {
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
        <TodoList task={task} onSetTask={onSetTask} />
        <Footer task={task} onSetTask={onSetTask} />
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
      style={todo.completed ? { textDecoration: "line-through" } : {}}
    >
      <input
        type="checkbox"
        value={todo.completed}
        onChange={() => handleChecked(todo.id)}
      />
      <span>{todo.title}</span>
      <img
        src="./images/icon-cross.svg"
        alt="icon-cross"
        onClick={() => handleDeleteItem(todo.id)}
      />
    </li>
  );
}

function Footer({ task, onSetTask }) {
  // const [sort, onSort] = useState("All");

  function handleClearCompleted() {
    onSetTask((tasks) => tasks.filter((task) => task.completed === false));
  }

  return (
    <footer>
      <span>{task.length} items left</span>
      <div className="filters">
        <p className="active">All</p>
        <p>Active</p>
        <p>Completed</p>
      </div>
      <p className="clear" onClick={handleClearCompleted}>
        Clear Completed
      </p>
    </footer>
  );
}

export default App;
