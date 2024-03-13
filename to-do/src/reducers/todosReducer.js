const todosReducer = (state, action) => {
    switch (action.type) {
        case "POPULATE_TODOS":
            return action.todos
        case "ADD_TODO":
            return [
                ...state, { "id": action.id, "title": action.title }
            ]
        case "REMOVE_TODO":
            return state.filter((todo) => todo.id !== action.id);
        case "CLEAR_TODOS":
            return []
        default:
            return state;
    }
}

export default todosReducer;