import React from "react";
import ErrorReducer from '../reducers/errorReducer';
import {useReducer } from 'react';


export const ErrorContext = React.createContext();

const ErrorContextProvider = (props) => {
    const [error , dispatch] = useReducer(ErrorReducer, null);

    const sendError = (msg, alert) => {
        const error = { msg, alert };
        dispatch({
            type: "SET_ERROR",
            error: error
        })
        setTimeout(() => {
            dispatch({ type: "SET_NULL" })
        }, 2000)
    };

    return (
        <ErrorContext.Provider value={ {error, sendError}}>
           {props.children} 
        </ErrorContext.Provider>
    );
}

export default ErrorContextProvider;