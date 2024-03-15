import { createContext, useReducer } from "react";
import themeReducer from "../reducer/ThemeReducer";

export const ThemeContext = createContext();


export const ThemeContextProvider = (props) => {

    const [state, dispatch] = useReducer(themeReducer, {
        color : "primary",
        "mode" : "light"
    })

    const changeColor = (value) => {
        dispatch({
            type : "CHANGE_COLOR",
            payload : value,
        })
    };
    const changeMode = (value) => {
        dispatch(
            {
                type : "CHANGE_MODE",
                payload : value
            }
        )
    }

    return (
        <ThemeContext.Provider value={{color : state.color, mode : state.mode ,changeColor, changeMode }} >
            {props.children}
        </ThemeContext.Provider>
    );
}