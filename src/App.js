import './App.css';
import { useEffect, useState } from 'react';

import NewTaskForm from './components/NewTaskForm';
import Footer from './components/Footer';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filtered, setFiltered] = useState(tasks);
  useEffect(() => {
    setFiltered(tasks);
  }, [tasks]);

  return (
    <section className="todoapp">
      <NewTaskForm tasks={tasks} setTasks={setTasks} />
      <section className="main">
        <TaskList filtered={filtered} setTasks={setTasks} />
        <Footer tasks={tasks} setTasks={setTasks} filtered={filtered} setFiltered={setFiltered} />
      </section>
    </section>
  );
}

export default App;
