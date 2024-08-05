import React from 'react';

export function TaskFilter({ statusTask, setStatusTask }) {
  return (
    <ul className="filters">
      <li>
        <button onClick={() => setStatusTask('all')} className={statusTask === 'all' ? 'selected' : ''}>
          All
        </button>
      </li>
      <li>
        <button onClick={() => setStatusTask('active')} className={statusTask === 'active' ? 'selected' : ''}>
          Active
        </button>
      </li>
      <li>
        <button onClick={() => setStatusTask('complete')} className={statusTask === 'complete' ? 'selected' : ''}>
          Completed
        </button>
      </li>
    </ul>
  );
}

export default TaskFilter;
