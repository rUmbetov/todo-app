import Task from './task';

export function TaskList({ filtered, setTasks }) {
  return (
    <ul className="todo-list">
      {filtered.map((task) => (
        <Task key={task.id} task={task} filtered={filtered} setTasks={setTasks} />
      ))}
    </ul>
  );
}

export default TaskList;
