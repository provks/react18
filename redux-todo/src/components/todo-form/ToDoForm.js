import React, { useState } from 'react';

function ToDoForm({createTask}) {
  const [taskContent, setTaskContent] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    createTask(taskContent);
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