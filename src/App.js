import React from 'react';
import './App.css';
import {db} from './firebase';
import TaskInput from './TaskInput';

function App() {
  const [tasks, setTasks] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await db.collection("todos").get()
      setTasks(data.docs.map(doc => ({...doc.data(), id: doc.id})))
    }
    fetchData()
  }, [])

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <TaskInput task={task}/>
        </li>
      ))}
    </ul>
  );
}

export default App;
