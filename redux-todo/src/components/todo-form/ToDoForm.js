import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { addTask } from '../../redux/actions/todoActions';
import {todoActions} from '../../redux/reducers/todoReducers';

function ToDoForm({createTask}) {
  const dispatch = useDispatch();
  const [taskContent, setTaskContent] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // dispatch action
    // dispatch(addTask(taskContent));
    dispatch(todoActions.add_task(taskContent));
    // createTask(taskContent);
    setTaskContent("");
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input id='content' name='content' type="text" value={taskContent} onChange={(e) => setTaskContent(e.target.value)} />
        <button type='submit'>Create todo</button>
      </form>
    </div>
  )
}

export default ToDoForm;