export const loggerMiddleware = (store) => {
    // return function (next) {
    //     return function (action) {
    //         // log my action
    //         console.log('[Log]: dispatching action:' + action.type + ' ' + new Date().toISOString());
    //         // call the next middleware in the pipeline
    //         next(action);
    //         // log the updated state of my store/app 
    //         console.log(store.getState());

    //     }
    // }

    return next => action => {
        console.log('will dispatch', action.type)
    
        // Call the next dispatch method in the middleware chain.
        const returnValue = next(action)
    
        console.log('state after dispatch', store.getState())
    
        // This will likely be the action itself, unless
        // a middleware further in chain changed it.
        return returnValue
      }
}