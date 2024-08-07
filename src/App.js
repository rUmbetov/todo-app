/* eslint-disable indent */
import './App.css';
import { useState } from 'react';

import NewTaskForm from './components/NewTaskForm';
import Footer from './components/Footer';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [statusTask, setStatusTask] = useState('all');
  const handComplete = (id) => {
    //Отметка выполненой задачи
    // setTasks(
    //   tasks.map((task) => {
    //     if (task.id !== id) return task;
    //     return {
    //       ...task,
    //       complete: !task.complete,
    //     };
    //   })
    // );
    let tmp = tasks.map((task) => (task.id === id ? { ...task, complete: !task.complete } : { ...task }));
    setTasks(tmp);
  };
  let copyTasks = tasks;
  console.log(tasks);
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
        <TaskList tasks={copyTasks} setTasks={setTasks} handComplete={handComplete} />
        <Footer tasks={tasks} setTasks={setTasks} statusTask={statusTask} setStatusTask={setStatusTask} />
      </section>
    </section>
  );
}

export default App;
