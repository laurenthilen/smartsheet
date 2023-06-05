import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Task from './Task';
import { fetchTasks } from '../store/actions';

const TaskList = () => {
    const dispatch = useDispatch();
    const { tasks, isLoading, isError, errorMsg } = useSelector(
        state => state
    );

    useEffect(() => {
        dispatch(fetchTasks());
    }, []);

    return (
        <div className="task">
            {isLoading && <div>Data loading...</div>}
            {isError && <div>Error loading data: {errorMsg}</div>}
            {!isLoading && !isError && (
                tasks.map(task => (
                    <Task key={task.id} task={task} />
                ))
            )}
        </div>
    )
}

export default TaskList;
