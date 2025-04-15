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

      <div className={`filters summary `}>
        <p>
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
