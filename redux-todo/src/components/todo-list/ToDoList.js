import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { toggleTask}  from '../../redux/actions/todoActions';
import {todoActions, todoSelector} from '../../redux/reducers/todoReducers';

function ToDoList() {
  const dispatch = useDispatch();

  // const todos = useSelector((state) => state.todos);
  const todos = useSelector(todoSelector);
  console.log(todos)
  // const users = useSelector((state) => state.users);
  // const toggleTask = (id) => ({type: "is_task_completed", id});
  return (
    <div>
        <ul>
            {todos?.map(task => {
                return <li key={task.id}>
                    <span><b>{task.title}</b></span> &emsp;
                    <span>{(task.isCompleted) ? 'Completed' : 'Pending'}</span>
                    <button 
                      // onClick={() => toggleTask(task.id)}
                      // onClick={() => dispatch(toggleTask(task.id))}
                      onClick={() => {
                        console.log(`[Log]: dispatching action: toggle_todo_status, data:${task.id}`);
                        dispatch(todoActions.toggle_todo_status(task.id))
                      }}
                    >
                      toggle</button>
                </li>
            })}
        </ul>
    </div>
  )
}

export default ToDoList;