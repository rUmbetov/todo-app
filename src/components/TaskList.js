import Task from './task'

export function TaskList({ tasks, setTasks }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
      ))}
    </ul>
  );
}

export default TaskList;
