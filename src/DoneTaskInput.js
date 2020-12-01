import React from 'react';
import {db} from './firebase';


const DoneTaskInput = ({ task }) => {
    const [name, setName] = React.useState(task.name);

    const onUnmark = () => {
        db.collection("todos").doc(task.id).update({
            isMarked: false
        })
        .then(function() {
            console.log("Document succesfully unmarked")
        })
        .catch(function(error) {
            console.error("Error marking document: ", error);
        });
    }

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

    return (
        <>
            <button>::</button>
            <input readOnly checked type="checkbox" name="name" id="name" onClick={onUnmark}/>
            <input className='checked' value={name} onChange={e => {setName(e.target.value)}}/>
            <button onClick={onUpdate} >Atualizar</button>
            <button onClick={onDelete} >✖️</button>
        </>
    );
};

export default DoneTaskInput