import React from "react";
import UserReducer from '../reducers/userReducer';
import {useReducer } from 'react';

export const UserContext = React.createContext();


const UserContextProvider = (props) => {
    const intialState = {
        users: [],
        loading: false
    }
    const [state, dispatch] = useReducer(UserReducer, intialState)

    const searchUser = (keyword) => {
        setLoading();
        setTimeout(async () => {
            const BASE_URL = "https://api.github.com/search/users?q=";
            const response = await fetch(BASE_URL + keyword);
            let data = await response.json();
            dispatch({
                type: "SEACRH_USERS",
                users: data.items
            })
        }, 1000);
    }

    const setLoading = () => dispatch({ type: "SET_LOADING" })

    const clearUsers = () => dispatch({ type: "CLEAR_USERS" });


    return (
        <UserContext.Provider value={{
            users: state.users,
            loading: state.loading,
            searchUser,
            clearUsers
        }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;
