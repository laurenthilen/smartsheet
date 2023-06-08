import axios from 'axios';

export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const REQUEST_TASK_DATA = "REQUEST_TASK_DATA";
export const RECEIVE_TASK_DATA = "RECEIVE_TASK_DATA";
export const UPDATE_TASK = "UPDATE_TASK";

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
let csrftoken = getCookie('csrftoken');

export const fetchTasks = () => async dispatch => {
    dispatch({
        type: "REQUEST_TASK_DATA"
    });

    axios
        .get("http://127.0.0.1:8000/")
        .then((res) => dispatch({type: RECEIVE_TASK_DATA, tasks: res.data.rows}))
        .catch((err) => console.log(err));
};

export const deleteTask = (id) => async dispatch => {
    axios
        .delete(`/api/todos/${id}/`, { headers: { 'X-CSRFToken': csrftoken } })
        .then(dispatch({type: DELETE_TASK, id: id}))
        .then(fetchTasks())
        .catch((err) => console.log(err));
};

export const addTask = (newTask) => async dispatch => {
    axios
       .post("/api/todos/", newTask, { headers: { 'X-CSRFToken': csrftoken } })
       .then((res) => dispatch({type: ADD_TASK, newTask: newTask}))
       .then(fetchTasks())
       .catch((err) => console.log(err));
};

export const updateTask = (task, update) => async dispatch => {
    axios
        .put(`/api/todos/${task.id}`, { headers: { 'X-CSRFToken': csrftoken } })
        .then(dispatch({type: UPDATE_TASK, task: task, update: update}))
        .then(fetchTasks())
        .catch((err) => console.log(err));
};
