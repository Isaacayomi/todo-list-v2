function Footer({ task, onSetTask, sortBy, onSetSortBy }) {
  function handleClearCompleted() {
    onSetTask((tasks) => tasks.filter((task) => task.completed === false));
  }

  return (
    <>
      <footer
        style={
          task.length === 0 ? { padding: "0rem" } : { paddingBlock: "1.2rem" }
        }
      >
        <span
          style={task.length === 0 ? { display: "none" } : { display: "flex" }}
        >
          {task.filter((t) => !t.completed).length} items left
        </span>
        <div
          className="filters"
          style={task.length === 0 ? { display: "none" } : { display: "flex" }}
        >
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
        <p
          style={task.length === 0 ? { display: "none" } : { display: "flex" }}
          className="clear"
          onClick={handleClearCompleted}
        >
          Clear Completed
        </p>
      </footer>

      <div
        className="summary"
        style={
          task.length === 0
            ? { paddingBlock: "1.2rem" }
            : { paddingBlock: "1.2rem" }
        }
      >
        <p style={{ textAlign: "center" }}>
          {task.length === 0
            ? `You have no tasks, add some! 📝`
            : `You have ${task.length} tasks, ${" "}
          ${task.filter((t) => !t.completed).length} active,${" "}
         ${task.filter((t) => t.completed).length} ${""}
          completed`}
        </p>
      </div>
    </>
  );
}
export default Footer;
