import { useContext } from "react"
import "./ThemeSelector.css"
import { ThemeContext } from "../context/ThemeContext"

const themeColors = ["secondary", "danger", "warning", "primary", "success"]

export const ThemeSelector = () => {

    const { mode ,changeColor, changeMode,  } = useContext(ThemeContext);
    const lightIcon = <i className="fa-regular fa-sun"></i>;
    const darkIcon = <i className="fa-regular fa-moon"></i>;

    const handleTheme = () => {
        changeMode(mode === "light" ? "dark" : "light");
    }
    return (
        <div className="theme-selector pt-3 mb-0 pb-0">
            <button className="theme-icon change-mode-btn" onClick={handleTheme}>{mode === "light" ? darkIcon : lightIcon}</button>
            <ul className="theme-links">
                {themeColors.map((color, index) => (<span key={index} className={`theme-link bg-${color}`} onClick={() => changeColor(color)}></span>))}
            </ul>
        </div>
    );
}