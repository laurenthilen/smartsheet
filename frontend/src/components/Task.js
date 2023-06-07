import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { deleteTask, updateTask } from '../store/actions';

import { Clear, Edit } from '@mui/icons-material';
import { Button, Card, Checkbox, IconButton, TextField } from '@mui/material';

const Task = (props) => {
    const dispatch = useDispatch();
    const { id, taskName, dueDate, done, assignedTo, status, comments } = props.task
    const [edit, setEdit] = useState(false);
    const [checked, setChecked] = useState(false);
    const [updateComments, setUpdateComments] = useState(comments);

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
        <div key={id} className="task">
            <Card key={id} className="task-container" style={{backgroundColor: "#F5F5F5"}}>
                <div className="task-header">
                    <h2>{taskName}</h2>
                    <Checkbox
                        checked={checked}
                        onChange={handleCheck}
                    />
                </div>
                <p>Due date: {dueDate}</p>
                <p>Assigned to: {assignedTo}</p>
                <p>Status: {status}</p>
                <div className="edit-comments">
                    <p>Comments: {comments}</p>
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
                <Button style={{marginLeft: "4%"}} onClick={() => dispatch(deleteTask(id))}>Delete</Button>
            </Card>
        </div>
    )
}

export default Task;
