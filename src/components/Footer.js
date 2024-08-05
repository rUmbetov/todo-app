import TaskFilter from './tasksFilter';

const Footer = ({ tasks, setTasks, statusTask, setStatusTask }) => {
  const handClearComplete = () => {
    setTasks(tasks.filter((task) => task.complete !== true));
  };

  return (
    <footer className="footer">
      <span className="todo-count">{tasks.filter((task) => !task.complete).length} items left</span>
      <TaskFilter statusTask={statusTask} setStatusTask={setStatusTask} />
      <button className="clear-completed" onClick={handClearComplete}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
