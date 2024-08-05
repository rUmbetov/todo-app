/* eslint-disable indent */
import './App.css';
import { useState } from 'react';

import NewTaskForm from './components/NewTaskForm';
import Footer from './components/Footer';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [statusTask, setStatusTask] = useState('all');

  let copyTasks = tasks;
  switch (statusTask) {
    case 'all':
      copyTasks = tasks;
      break;
    case 'active':
      copyTasks = tasks.filter((task) => task.complete === false);
      break;
    case 'complete':
      copyTasks = tasks.filter((task) => task.complete === true);
      break;
  }

  return (
    <section className="todoapp">
      <NewTaskForm tasks={tasks} setTasks={setTasks} />
      <section className="main">
        <TaskList tasks={copyTasks} setTasks={setTasks} />
        <Footer tasks={tasks} setTasks={setTasks} statusTask={statusTask} setStatusTask={setStatusTask} />
      </section>
    </section>
  );
}

export default App;
