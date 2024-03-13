const UserReducer = (state, action) => {
    switch (action.type) {
        case "SEACRH_USERS":
            return {
                ...state,
                users: action.users,
                loading : false
            }
        case "SET_LOADING":
            return {
                ...state,
                loading: true,
            }
        case "CLEAR_USERS":
            return {
                ...state,
                users: []
            }
        default:
            return state;
    }
}

export default UserReducer;