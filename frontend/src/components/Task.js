import React from 'react';

const Task = (props) => {
    const { id, taskName, dueDate, done, assignedTo, status, comments } = props.task

    return (
        <div key={id} className="task">
            <h2>{taskName}</h2>
            <h3>{comments}</h3>
        </div>
    )
}

export default Task;
