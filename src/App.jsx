import React, { useState } from "react";
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask =() => {
    if(!task.trim()) return; //avoid empty tasks
    setTasks([...tasks,task]);
    setTask(''); // clear imput after adding
  };

  const handleKeyPress = (e) => {
    if (e.key === 'enter') {
      addTask();
    }
  };

  const removeTask = index => {
    setTasks(tasks.filter((_,i) => i!== index));
  };

  return (
    <div className="app">
      <div className="todo-list">
        <input className="input"
        type="text"
        value={task}
        onChange={(e) =>setTask(e.target.value)}
        onKeyDown={handleKeyPress} // probable fail
        placeholder="Add new task..."
        />
        <button className="add" onClick={addTask}>Add Task</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task} <button onClick={() => removeTask(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 

export default App;