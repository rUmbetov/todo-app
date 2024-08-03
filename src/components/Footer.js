import TaskFilter from './tasksFilter';

const Footer = ({ tasks, setTasks, filtered, setFiltered }) => {
  const handClearComplete = () => {
    setTasks(tasks.filter((task) => task.complete !== true));
  };

  return (
    <footer className="footer">
      <span className="todo-count">{tasks.filter((task) => !task.complete).length} items left</span>
      <TaskFilter tasks={tasks} setTasks={setTasks} filtered={filtered} setFiltered={setFiltered} />
      <button className="clear-completed" onClick={handClearComplete}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
