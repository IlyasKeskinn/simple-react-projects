import { Link } from "react-router-dom";
import "./ProductCard.css"
import { useContext } from "react"; 
import {ThemeContext} from "../context/ThemeContext"
export const ProductCard = ({recipe}) => {
    const {img,desc,title } = recipe
    const {color, mode} = useContext(ThemeContext);

    return (
        <div className={`card ${mode === "light" ? "border-dark" : "border-light"}`} >
            <img className="card-image-top img-fluid" src={"img/"+img} alt={title} />
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text card-desc">{desc}</p>
                <Link  to={`/details/${recipe.id}`} className={`btn btn-outline-${color}`}>Details Recipe</Link>
            </div>
        </div>
    );
}