import React from 'react';

function ToDoList({todos, toggleTask}) {
  return (
    <div>
        <ul>
            {todos.map(task => {
                return <li key={task.id}>
                    <span><b>{task.title}</b></span> &emsp;
                    <span>{(task.isCompleted) ? 'Completed' : 'Pending'}</span>
                    <button onClick={() => toggleTask(task.id)}>toggle</button>
                </li>
            })}
        </ul>
    </div>
  )
}

export default ToDoList;