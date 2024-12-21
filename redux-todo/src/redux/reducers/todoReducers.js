import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: [
        {
            id: Date.now(),
            title: "Meeting at 9AM",
            isCompleted: false,
        }, 
        {
            id: Date.now()+1,
            title: "Demo at 10AM",
            isCompleted: false,
        }
    ]
}

// redux reducer function
// export function todoReducer(state=initialState, action) {
//     switch(action.type) {
//         case ADD_TASK: 
//         return {
//             ...state,
//             todos: [
//                 ...state.todos,
//                 {
//                     id: Date.now(),
//                     title: action.title,
//                     isCompleted: false,
//                 }
//             ]
//         }
//         case IS_TASK_COMPLETED:
//             const updatedTodos = state.todos.map((task) => {
//                 if (task.id === action.id) {
//                     task.isCompleted = !task.isCompleted
//                 }
//                 return task;
//             })
//             return { ...state, todos: updatedTodos } 
//         default: 
//             return state;
//     }

// }

// Using redux toolkit
const todoSlice = createSlice({
    name:'todo',
    initialState: initialState,
    reducers: {
        // this is my action
        add_task: (state, action) => {
            state.todos.push({
                id: Date.now(),
                title: action.payload,
                isCompleted: false,
            })
        },
        // this is my another action
        toggle_todo_status: (state, action) => {
            state.todos.map((task) => {
                if (task.id === action.payload) {
                    task.isCompleted = !task.isCompleted
                }
                return task;
            })
        }
    }
});

export const todoReducer = todoSlice.reducer;

// actions
// export const {add_task, toggle_todo_status} = todoSlice.actions; 
export const todoActions = todoSlice.actions; 

// selectors
export const todoSelector = (state)=> state.todoReducer.todos;
