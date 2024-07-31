import React, { useState } from 'react';

export function TaskFilter({ setTasks }) {
  const [filter, setFilter] = useState('');

  const showAll = () => {
    setTasks((tasks) =>
      tasks.map((task) => {
        task.isHide = false;
        return task;
      })
    );
    setFilter('all');
  };
  const showCompleted = () => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (!task.complete) task.isHide = true;
        else task.isHide = false;

        return task;
      })
    );
    setFilter('completed');
  };

  const showActive = () => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.complete) task.isHide = true;
        else task.isHide = false;

        return task;
      })
    );
    setFilter('active');
  };

  return (
    <ul className="filters">
      <li>
        <button onClick={showAll} className={filter === 'all' ? 'selected' : ''}>
          All
        </button>
      </li>
      <li>
        <button onClick={showActive} className={filter === 'active' ? 'selected' : ''}>
          Active
        </button>
      </li>
      <li>
        <button onClick={showCompleted} className={filter === 'completed' ? 'selected' : ''}>
          Completed
        </button>
      </li>
    </ul>
  );
}

export default TaskFilter;
