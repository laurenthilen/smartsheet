import { 
    ADD_TASK,
    DELETE_TASK, 
    REQUEST_TASK_DATA, 
    RECEIVE_TASK_DATA,
} from '../actions';
import { v4 as uuid } from 'uuid';

export const initialState = {
    tasks: [],
    isLoading: false,
    isError: false,
    errorMsg: "",
  };

  export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_TASK_DATA:
            return {
                ...state,
                isLoading: true,
                isError: false,
                errorMsg: "",
            };

        case RECEIVE_TASK_DATA:
            return {
                ...state,
                tasks: action.tasks,
                isLoading: false,
                isError: action.isError,
                errorMsg: action.errorMsg,
            };

        case DELETE_TASK:
            const newList = state.tasks.filter((data)=> data.id !== action.id)

            return {
                ...state,
                tasks: newList,
            };

        case ADD_TASK:
            const { taskName, dueDate, done, assignedTo, status, comments } = action.newTask
            const unique_id = uuid();
            const newTask = {
                id: unique_id,
                taskName: taskName,
                dueDate: dueDate,
                done: done,
                assignedTo: assignedTo,
                status: status,
                comments: comments,
            }
            
            return {
                ...state,
                tasks: state.tasks.concat(newTask),
            };
            
        default:
            return state;
        }
    };
