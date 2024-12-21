import { createSlice } from '@reduxjs/toolkit'
import {todoActions} from './todoReducers';

const initialState = {
    message: ""
}

// Using redux toolkit
const notificationSlice = createSlice({
    name:'notification',
    initialState: initialState,
    reducers: {
        reset: (state, action) => {
            state.message = "";
        }
    },
    // This used to work previously (deprecated, not working now)
    // extraReducers: {
    //     "todo/add_task": (state, action) => {
    //         state.message = "Todo created successfully!"
    //     }
    // }
    // builder
    extraReducers: (builder) => {
        builder
            .addCase(todoActions.add_task, (state, action) => {
                state.message = "Todo created successfully!";
            })
      },
    // using map object (deprecated, not working now)
    // extraReducers: {
    //     [todoActions.add_task]: (state, action) => {
    //         state.message = "Todo created successfully!";
    //     },
    // }
    
});

export const notificationReducer = notificationSlice.reducer;

export const notificationSelector = (state) => state.notificationReducer.message;

export const notificationAction = notificationSlice.actions;
