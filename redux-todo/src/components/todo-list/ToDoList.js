import React from 'react';
import { useSelector } from 'react-redux';

function ToDoList() {
  const todos1 = useSelector((state) => state.todos);
  return (
    <div>
        <ul>
            {todos1.map(task => {
                return <li key={task.id}>
                    <span><b>{task.title}</b></span> &emsp;
                    <span>{(task.isCompleted) ? 'Completed' : 'Pending'}</span>
                    <button 
                      // onClick={() => toggleTask(task.id)}
                    >
                      toggle</button>
                </li>
            })}
        </ul>
    </div>
  )
}

export default ToDoList;