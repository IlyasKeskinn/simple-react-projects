import { Link, NavLink } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { useContext } from "react";
import {ThemeContext} from "../context/ThemeContext"

export const Nav = () => {
    const {color} = useContext(ThemeContext);
    return (
        <nav className={`navbar navbar-expand-lg navbar-dark bg-${color}`}>
            <div className="container">
                <div className="d-flex">
                    <Link to="/" className="navbar-brand">Recipes</Link>
                    <div className="navbar-nav">
                        <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                        <NavLink to="create" className="nav-item nav-link">Create</NavLink>
                    </div>
                </div>
                <SearchBar />
            </div>
        </nav>
    );
}