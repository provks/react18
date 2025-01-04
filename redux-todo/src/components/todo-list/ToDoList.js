import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { toggleTask}  from '../../redux/actions/todoActions';
import {todoActions, todoSelector, getInitialState} from '../../redux/reducers/todoReducers';
// import axios from 'axios'; 

function ToDoList() {
  const dispatch = useDispatch();

  useEffect(() => {
    // fetch
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))

    // axios
    // axios.get('https://jsonplaceholder.typicode.com/todos/1')
    // .then(response => {
    //   console.log(response.data);
    //   // dispatch action to update the initial state
    //   dispatch(todoActions.setInitialState(response.data))
    // })

    // dipatch action of createAsyncThunk
    dispatch(getInitialState())

  }, [dispatch])

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
                    <span>{(task.completed) ? 'Completed' : 'Pending'}</span>
                    <button 
                      // onClick={() => toggleTask(task.id)}
                      // onClick={() => dispatch(toggleTask(task.id))}
                      onClick={() => {
                        // console.log(`[Log]: dispatching action: toggle_todo_status, data:${task.id}`);
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