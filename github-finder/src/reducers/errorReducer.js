const ErrorReducer = (state, action) => {
    switch (action.type) {
        case "SET_ERROR":
            return action.error
        case "SET_NULL" : 
            return null 
        default:
            return state;
    }
} 
export default ErrorReducer;