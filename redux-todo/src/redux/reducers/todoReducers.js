import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'; 

const initialState = {
    todos: [
        // {
        //     id: Date.now(),
        //     title: "Meeting at 9AM",
        //     completed: false,
        // }, 
        // {
        //     id: Date.now()+1,
        //     title: "Demo at 10AM",
        //     completed: false,
        // }
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

// create createAsyncThunk function
export const getInitialState = createAsyncThunk('todo/setInitialState', 
    // (arg, thunkAPI) => {
    //    // api call
    //    axios.get('https://jsonplaceholder.typicode.com/todos/1')
    //        .then(response => {
        //          console.log(response.data);
        //          // dispatch action to update the initial state
        //          thunkAPI.dispatch(todoActions.setInitialState(response.data))
        //        }) 
        // }
    () => {
        return axios.get('https://jsonplaceholder.typicode.com/todos/1');
    }
)

// Using redux toolkit
const todoSlice = createSlice({
    name:'todo',
    initialState: initialState,
    reducers: {
        setInitialState:(state, action)=>{
            state.todos=[action.payload];
        },
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
                    task.completed = !task.completed
                }
                return task;
            })
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getInitialState.fulfilled, (state, action) => {
                console.log('getInitialState is fulfilled!')
                state.todos=[action.payload.data];
            })
      },
});

export const todoReducer = todoSlice.reducer;

// actions
// export const {add_task, toggle_todo_status} = todoSlice.actions; 
export const todoActions = todoSlice.actions; 

// selectors
export const todoSelector = (state)=> state.todoReducer.todos;
