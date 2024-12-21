import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    message: ""
}

// Using redux toolkit
const notificationSlice = createSlice({
    name:'notification',
    initialState: initialState,
    reducers: {},
    // This used to work previously (deprecated, not working now)
    // extraReducers: {
    //     "todo/add_task": (state, action) => {
    //         state.message = "Todo created successfully!"
    //     }
    // }
    
});

export const notificationReducer = notificationSlice.reducer;

export const notificationSelector = (state) => {
    console.log("notificationReducer state", state)
 return    state.notificationReducer.message
};
