import React from 'react';
import TaskInput from './TaskInput';
import DoneTaskInput from './DoneTaskInput';
import './index.css';
import {v4 as uuidv4} from 'uuid';
import {db} from './firebase';


const Menu = () => {
    const [tasks, setTasks] = React.useState([])
    const [doneTasks, setDoneTasks] = React.useState([])
    const [newTask, setNewTask] = React.useState([])

    React.useEffect(() => {
        return db.collection('todos').where("isMarked", "==", false)
        .onSnapshot((snapshot) => {
            const tasksData = []
            snapshot.forEach(doc => tasksData.push(({...doc.data(), id: doc.id})))
            setTasks(tasksData)
        })
    }, [])

    React.useEffect(() => {
        return db.collection('todos').where("isMarked", "==", true)
        .onSnapshot((snapshot) => {
            const tasksData = []
            snapshot.forEach(doc => tasksData.push(({...doc.data(), id: doc.id})))
            setDoneTasks(tasksData)
        })
    }, [])

    const onCreate = () => {
        const taskId = uuidv4();
        db.collection('todos').doc(taskId).set({name: newTask, id: taskId, isMarked: false})
        .then(function() {
          console.log("Document written with ID: ", taskId);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    
        
    }

    return (
        <div id="todo">
            <ul>
                <h1>Sua lista de compras</h1>
                {tasks.map(task => (
                <li key={task.id} className="todoItem">
                    <TaskInput task={task} />
                </li>
                ))}
                <li>
                <button onClick={onCreate}>➕</button>
                <input className='textInput' 
                type="text" placeholder='Adicionar novo item' 
                value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
                </li>
                <li className="done">✔️ Items concluídos</li>
                {doneTasks.map(task => (
                <li key={task.id} className="todoItem">
                    <DoneTaskInput className='doneInput' task={task}/>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu