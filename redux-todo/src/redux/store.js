// import * as redux from 'redux';
// import { todoReducer } from './reducers/todoReducers';

// export const store = redux.createStore(todoReducer);


import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './reducers/todoReducers';

export const store = configureStore({
    reducer: {todoReducer},
})