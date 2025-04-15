import { useState } from "react";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

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

export default App;
