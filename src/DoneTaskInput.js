import React from 'react';
import {db} from './firebase';


const DoneTaskInput = ({ task }) => {
    const [name] = React.useState(task.name);

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

    return (
        <>
            <input readOnly checked type="checkbox" name="name" id="name" onClick={onUnmark}/>
            <input readOnly value={name}/>
        </>
    );
};

export default DoneTaskInput