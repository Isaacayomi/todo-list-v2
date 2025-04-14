const todos = [
  {
    id: 1,
    title: "Jog around the park 3x",
    completed: false,
  },
  {
    id: 2,
    title: "10 minutes meditation",
    completed: false,
  },
  {
    id: 3,
    title: "Read for 1 hour",
    completed: false,
  },
  {
    id: 4,
    title: "Pick up groceries",
    completed: true,
  },
  {
    id: 5,
    title: "Complete Todo App",
    completed: false,
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <MainContainer />
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

function MainContainer() {
  return (
    <main>
      <div className="input-field">
        <div className="oval-copy"></div>
        <input
          type="text"
          placeholder="Create a new todo..."
          className="input-todo"
        />
      </div>
      <div className="todo-list-container">
        <TodoList />
        <Footer />
      </div>
    </main>
  );
}

function TodoList() {
  return (
    <ul>
      {todos.map((todo) => (
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
