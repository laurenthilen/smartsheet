import React from 'react';

const Task = (props) => {
    const { id, taskName, dueDate, done, assignedTo, status, comments } = props.task
    console.log("task", props.task)

    return (
        <div key={id} className="task">
            <h2>{taskName}</h2>
            <p>Due date: {dueDate}</p>
            <p>Done: {done}</p>
            <p>Assigned to: {assignedTo}</p>
            <p>Status: {status}</p>
            <h3>{comments}</h3>
        </div>
    )
}

export default Task;
