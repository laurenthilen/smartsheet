import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addTask } from "../store/actions";
import { StatusTypes } from "../constants/Enum";

import { Button, Card, TextField } from "@mui/material";

// TODO: add form validation

const TaskForm = () => {
    const dispatch = useDispatch();
    const [newTask, setNewTask] = useState({
        taskName: "",
        dueDate: null,
        done: false,
        assignedTo: "",
        status: StatusTypes.NOTSTARTED,
        comments: "",
    })

    const handleChange = event => {
        setNewTask({
            ...newTask, 
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = () => {
        dispatch(addTask(newTask))
        // TODO reset to empty form
    }

    return (
        <Card className="form" style={{backgroundColor: "#F5F5F5"}}>
            <div className="form-details">
                <TextField 
                    id="outlined-basic" 
                    label="Task" 
                    variant="outlined" 
                    onChange={handleChange} 
                    name="taskName"
                    style={{
                        backgroundColor: "white"
                    }}
                />
                <TextField
                    name="assignedTo" 
                    onChange={handleChange} 
                    id="outlined-multiline-flexible"
                    label="Assigned To"
                    multiline
                    maxRows={2}
                    style={{
                        backgroundColor: "white"
                    }}
                />
                <TextField
                    name="comments" 
                    onChange={handleChange} 
                    id="outlined-multiline-flexible"
                    label="Comments"
                    multiline
                    maxRows={2}
                    style={{
                        backgroundColor: "white"
                    }}
                />
                <Button variant="contained" color="secondary" style={{ marginTop:"20px" }} onClick={handleSubmit}>Add</Button>
            </div>
        </Card>
    )
}

export default TaskForm;
