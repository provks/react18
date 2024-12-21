import { useState } from 'react';
import './App.css';
import ToDoForm from './components/todo-form/ToDoForm';
import ToDoList from './components/todo-list/ToDoList';
import { store } from './redux/store'
import { Provider } from 'react-redux'

function App() {
  // state
  const [ todos, setTodos ] = useState([]);
  // function to create todo/task
  function createTask(taskContent) {
    const newTask = {
      id: Date.now(),
      title: taskContent,
      isCompleted: false,
    };
    // console.log('newTask', newTask)
    setTodos([...todos, newTask]);
    
  }
  // function to update status of todo/task
  function toggleTaskStatus(taskId) {
    const updatedTasks = todos.map(task => {
      if (task.id === taskId) {
        return {
          id: task.id,
          title: task.title,
          isCompleted: !task.isCompleted,
        }
      }
      return task;
    });
    setTodos(updatedTasks);
  }
  // console.log("todos", todos);
  // console.log("store", store.getState());
  return (
    <div>
      <h1>Todo App</h1>
      {/* todoForm component */}
      <Provider store={store}>
        <ToDoForm createTask={createTask}/>
        {/* todoList */}
        <ToDoList todos={todos} toggleTask={toggleTaskStatus}/>
      </Provider>
    </div>
  );
}

export default App;
