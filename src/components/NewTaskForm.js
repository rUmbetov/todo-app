import { useState } from 'react';

const NewTaskForm = ({ tasks, setTasks }) => {
  const [value, setTaskValue] = useState('');

  const addTask = (value) => {
    if (value) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          label: value,
          complete: false,
          create: new Date(),
          isHide: false,
        },
      ]);
    }
  };

  return (
    <header className="header">
      <h1>Todos</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask(value);
          setTaskValue('');
        }}
      >
        <input
          onChange={(e) => setTaskValue(e.target.value)}
          value={value}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
        />
      </form>
    </header>
  );
};

export default NewTaskForm;
