import React from "react";
import { useEffect, useReducer } from 'react';
import todosReducer from '../reducers/todosReducer';

export const TodosContext = React.createContext();


const TodosContextProvider = (props) => {
    const [todos, dispatch] = useReducer(todosReducer, []);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("todos"));
        if (data) {
            dispatch(
                {
                    type: "POPULATE_TODOS",
                    todos: data
                }
            )
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);


    return (
        <TodosContext.Provider value={{ dispatch, todos }}>
            {props.children}
        </TodosContext.Provider>
    );
}

export default TodosContextProvider;