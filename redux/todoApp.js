// initial state
const initialState = {
    todos: [],
    user: {
        name: "Coding Ninjas"
    }
}

// action types
const ADD_TASK = "add_task";
const IS_TASK_COMPLETED = "is_task_completed";
// delete task (home work)

// actions
const addTask = (task) => ({type: ADD_TASK, task});
const toggleTask = (index) => ({type: IS_TASK_COMPLETED, index})

// Reducer function
function toDo(state=initialState, action) {
    switch (action.type){
        case ADD_TASK:
            return {
                ...state,
                todos: [

                    ...state.todos,
                    {
                        title: action.task,
                        isComplete: false,
                    }
                ]
            };
        case IS_TASK_COMPLETED:
            return {
                ...state,
                todos: state.todos.map((todo, i) => {
                    if (action.index === i) {
                        return {
                            ...todo,
                            isComplete: !todo.isComplete,
                        }
                    }
                    return todo;
                })
            }
        default:
            return state;

    }
}

// show the state
console.log(initialState);

// creating store
const redux = require('redux');
const store = redux.createStore(toDo);

// dispatch action
store.dispatch(addTask('Watch news at 9PM.'))
store.dispatch({type: ADD_TASK, task: "I will practice react daily."});
// store.dispatch({type: "add_task", task})
store.dispatch(toggleTask(0))
store.dispatch(toggleTask(1))

// show the state
console.log(store.getState());