import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { addTask } from '../../redux/actions/todoActions';
import {todoActions} from '../../redux/reducers/todoReducers';
import {notificationSelector, notificationAction} from "../../redux/reducers/notificationReducers";

function ToDoForm({createTask}) {
  const dispatch = useDispatch();
  const [taskContent, setTaskContent] = useState("");
  const message = useSelector(notificationSelector);

  if (message) {
    setTimeout(() => {
      dispatch(notificationAction.reset());
    }, 3000);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // dispatch action
    // dispatch(addTask(taskContent));
    // console.log(`[Log]: dispatching action: add_task, data:${taskContent}`);
    dispatch(todoActions.add_task(taskContent));
    // createTask(taskContent);
    setTaskContent("");
  }

  return (
    <div>
      { message && 
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      }
      <form onSubmit={handleFormSubmit}>
        <input id='content' name='content' type="text" value={taskContent} onChange={(e) => setTaskContent(e.target.value)} />
        <button type='submit'>Create todo</button>
      </form>
    </div>
  )
}

export default ToDoForm;