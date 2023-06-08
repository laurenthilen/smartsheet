import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { deleteTask, updateTask } from '../store/actions';

import { Clear, Edit } from '@mui/icons-material';
import { Button, Card, Checkbox, IconButton, TextField } from '@mui/material';

const Task = (props) => {
    const dispatch = useDispatch();
    const task = {
        taskName: props.task[0].value,
        dueDate: props.task[1].value,
        done: false,
        assignedTo: props.task[3].value,
        status: props.task[4].value,
        comments: props.task[5].value,
    }
    const [edit, setEdit] = useState(false);
    const [checked, setChecked] = useState(false);
    const [updateComments, setUpdateComments] = useState(task.comments);

    // TODO chain these - useMemo
    const handleCheck = (e) => {
        setChecked(e.target.checked);
    }
    
    const handleComments = (e) => {
        setUpdateComments(e.target.value)
    }

    const handleSubmit = () => {
        dispatch(updateTask(props.task, updateComments))
    }

    return (
        <div key={props.id} className="task">
            <Card key={props.id} className="task-container" style={{backgroundColor: "#F5F5F5"}}>
                <div className="task-header">
                    <h2>{task.taskName}</h2>
                    <Checkbox
                        checked={checked}
                        onChange={handleCheck}
                    />
                </div>
                <p>Due date: {task.dueDate}</p>
                <p>Assigned to: {task.assignedTo}</p>
                <p>Status: {task.status}</p>
                <div className="edit-comments">
                    <p>Comments: {task.comments}</p>
                    <div className="edit-icon">
                        <IconButton edge="end" aria-label="edit" onClick={() => setEdit(!edit)}>
                            { edit ? <Clear /> : <Edit /> }
                        </IconButton>
                    </div>

                    { edit ?  (
                        // TODO make UI/UX better
                        <>
                            <TextField value={updateComments ? updateComments : null} onChange={handleComments} /> 
                            <Button onClick={handleSubmit}>Submit</Button>
                        </>
                    ) : (
                        <div />
                    )}
                </div>
                <Button style={{marginLeft: "4%"}} onClick={() => dispatch(deleteTask(props.id))}>Delete</Button>
            </Card>
        </div>
    )
}

export default Task;
