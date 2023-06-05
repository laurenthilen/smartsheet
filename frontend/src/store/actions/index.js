import axios from 'axios';

export const REQUEST_TASK_DATA = "REQUEST_TASK_DATA";
export const RECEIVE_TASK_DATA = "RECEIVE_TASK_DATA";

export const fetchTasks = () => async dispatch => {
    dispatch({
        type: "REQUEST_TASK_DATA"
    });

    axios
        .get("/api/todos/")
        .then((res) => dispatch({type: RECEIVE_TASK_DATA, tasks: res.data}))
        .catch((err) => console.log(err));
};
