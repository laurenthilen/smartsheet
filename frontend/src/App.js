import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

import './App.css';

// TODO: populate header

function App() {
    return (
        <div className="App">
            <header className="header">
                <h1>Lauren's Todo's</h1>
            </header>
            <TaskForm />
            <TaskList />
        </div>
    );
}

export default App;
