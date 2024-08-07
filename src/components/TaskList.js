import Task from './task';

export function TaskList({ tasks, setTasks, handComplete }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} handComplete={handComplete} />
      ))}
    </ul>
  );
}

export default TaskList;
