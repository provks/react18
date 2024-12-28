// import * as redux from 'redux';
// import { todosReducer } from './reducers/todoReducers';
// import { filtersReducer } from './reducers/filterReducers';

// export const store = redux.createStore(todoReducer);
// combined reducer
// const store = redux.combineReducers({
//   // Define a top-level state field named `todos`, handled by `todosReducer`
//   todos: todosReducer,
//   filters: filtersReducer,
// //   another: anotherReudcer,
// });


import { configureStore, Tuple } from '@reduxjs/toolkit'
import { todoReducer } from './reducers/todoReducers';
import { notificationReducer } from './reducers/notificationReducers';
import { loggerMiddleware } from './middleware/loggerMiddleware';

export const store = configureStore({
    reducer: {todoReducer, notificationReducer},
    middleware: () => new Tuple(loggerMiddleware),
})