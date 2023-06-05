export const REQUEST_TASK_DATA = "REQUEST_TASK_DATA";
export const RECEIVE_TASK_DATA = "RECEIVE_TASK_DATA";

export const fetchTasks = tasks => async dispatch => {
    dispatch({
        type: "REQUEST_TASK_DATA"
    });
    try {
        dispatch({
            type: "RECEIVE_TASK_DATA",
            tasks: tasks,
            isError: false,
            errorMsg: "",
        });
    } catch (e) {
        dispatch({
            type: "RECEIVE_TASK_DATA",
            Tasks: [],
            isError: true,
            errorMsg: e,
        });
    }
};
