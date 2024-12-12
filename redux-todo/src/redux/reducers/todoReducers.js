import {ADD_TASK, IS_TASK_COMPLETED} from "../actions/todoActions" 

const initialState = {
    todos: []
}

// reducer function
export function todoReducer(state=initialState, action) {
    switch(action.type) {
        case ADD_TASK: 
        return {
            ...state,
            todos: [
                ...state.todos,
                {
                    id: new Date.now(),
                    title: action.title,
                    isCompleted: false,
                }
            ]
        }
        case IS_TASK_COMPLETED:
            return {
                ...state,
                todos: state.todos.map((task) => {
                    if (task.id === action.id) {
                        task.isCompleted = !task.isCompleted
                    }
                    return task;
                })
            } 
        default: 
            return state;
    }

}