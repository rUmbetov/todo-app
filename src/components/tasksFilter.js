import React from 'react';

// eslint-disable-next-line no-unused-vars
export function TaskFilter({ tasks, setTasks, filtered, setFiltered }) {
  function todoFilter(status) {
    if (status === 'all') {
      setFiltered([...tasks]);
    } else {
      setFiltered([...tasks].filter((todo) => todo.complete === status));
    }
  }

  return (
    <ul className="filters">
      <li>
        <button onClick={() => todoFilter('all')}>All</button>
      </li>
      <li>
        <button onClick={() => todoFilter(false)}>Active</button>
      </li>
      <li>
        <button onClick={() => todoFilter(true)}>Completed</button>
      </li>
    </ul>
  );
}

export default TaskFilter;
