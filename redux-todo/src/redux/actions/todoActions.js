// Action constants
export const ADD_TASK = "add_task";
export const IS_TASK_COMPLETED = "is_task_completed";

// Actions
export const addTask = (taskContent) => ({type: ADD_TASK, title: taskContent});
export const toggleTask = (id) => ({type: IS_TASK_COMPLETED, id})