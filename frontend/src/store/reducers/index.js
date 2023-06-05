import { REQUEST_TASK_DATA, RECEIVE_TASK_DATA } from '../actions';

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

        default:
            return state;
        }
    };
