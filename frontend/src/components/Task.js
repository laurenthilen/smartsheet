import React from 'react';

import { Card } from '@mui/material';

const Task = (props) => {
    const { id, taskName, dueDate, done, assignedTo, status, comments } = props.task

    return (
        <div key={id} className="task">
            <Card key={id} className="task-container" style={{backgroundColor: "#F5F5F5"}}>
                <div className="task-header">
                    <h2>{taskName}</h2>
                    <p>Done: {done}</p>
                </div>
                <p>Due date: {dueDate}</p>
                <p>Assigned to: {assignedTo}</p>
                <p>Status: {status}</p>
                <p>Comments: {comments}</p>
            </Card>
        </div>
    )
}

export default Task;
