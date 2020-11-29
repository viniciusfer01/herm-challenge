import React from 'react';
import {db} from './firebase';


const TaskInput = ({ task }) => {
    const [name, setName] = React.useState(task.name);

    const onUpdate = () => {
        db.collection("todos").doc(task.id).set({...task, name})
        .then(function() {
            console.log("Document updated with ID: ", task.id);
        })
        .catch(function(error) {
            console.error("Error updating document: ", error);
        });
    }

    const onDelete = () => {
        db.collection("todos").doc(task.id).delete()
        .then(function() {
            console.log("Document deleted with ID: ", task.id);
        })
        .catch(function(error) {
            console.error("Error deleting document: ", error);
        });

    }

    const onMark = () => {
        db.collection("todos").doc(task.id).update({
            isMarked: true
        })
        .then(function() {
            console.log("Document succesfully marked")
        })
        .catch(function(error) {
            console.error("Error marking document: ", error);
        });
    }

    return (
        <>
            <input type="checkbox" name="name" id="name" onClick={onMark}/>
            <input value={name} onChange={e => {setName(e.target.value)}}/>
            <button onClick={onUpdate} >Atualizar</button>
            <button onClick={onDelete} >Deletar</button>

        </>
    );
};

export default TaskInput