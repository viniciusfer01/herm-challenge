import React from 'react'
import {db} from './firebase';


export const TaskInput = ({ task }) => {
    const [name, setName] = React.useState(task.name);

    const onUpdate = () => {
        db.collection("todos").doc(task.id).set({...task, name})
    }

    return (
        // <input value={name} onChange={e => {setName(e.target.value)}}/>
        <button onClick={onUpdate}>
            <input value={name} onChange={e => {
                setName(e.target.value)
                }}
            />
        </button>
    );
};