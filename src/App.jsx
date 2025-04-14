import { useState } from "react";

// const todos = [
//   {
//     id: 1,
//     title: "Jog around the park 3x",
//     completed: false,
//   },
//   {
//     id: 2,
//     title: "10 minutes meditation",
//     completed: false,
//   },
//   {
//     id: 3,
//     title: "Read for 1 hour",
//     completed: false,
//   },
//   {
//     id: 4,
//     title: "Pick up groceries",
//     completed: true,
//   },
//   {
//     id: 5,
//     title: "Complete Todo App",
//     completed: false,
//   },
// ];

// const inputTodo = [];

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
        <TodoList task={task} />
        <Footer />
      </div>
    </main>
  );
}

function TodoList({ task }) {
  return (
    <ul>
      {task.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

function Todo({ todo }) {
  return (
    <li className="todo-item">
      <input type="checkbox" />
      <span>{todo.title}</span>
      <img src="./images/icon-cross.svg" alt="icon-cross" />
    </li>
  );
}

function Footer() {
  return (
    <footer>
      <span>5 items left</span>
      <div className="filters">
        <p className="active">All</p>
        <p>Active</p>
        <p>Completed</p>
      </div>
      <p className="clear">Clear Completed</p>
    </footer>
  );
}

export default App;
