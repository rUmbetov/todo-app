import { formatDistanceToNowStrict } from 'date-fns';

export function Task({ task, tasks, setTasks }) {
  const handComplete = (id) => {
    //Отметка выполненой задачи
    setTasks(
      tasks.map((task) => {
        if (task.id !== id) return task;
        return {
          ...task,
          complete: !task.complete,
        };
      })
    );
  };

  const handRemove = (id) => {
    // Удаление задачи
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <li className={`${task.complete ? 'completed' : ''} ${task.isHide ? 'hidden' : ''}`}>
      <div className="view">
        <input className="toggle" type="checkbox" onClick={() => handComplete(task.id)} />
        <label>
          <span className="description">{task.label}</span>
          <span className="created">created {formatDistanceToNowStrict(task.create)} ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button
          className="icon icon-destroy"
          onClick={(e) => {
            e.stopPropagation();
            handRemove(task.id);
          }}
        ></button>
      </div>
    </li>
  );
}
export default Task;
