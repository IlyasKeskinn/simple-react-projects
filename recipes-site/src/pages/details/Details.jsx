import {useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const Details = () => {
    const {mode} = useContext(ThemeContext);
    const recipe = useLoaderData();
     
    return (
        <div className={`row mt-4 ${mode === "light" ? "text-dark" : "text-light"}`}>
            {
                recipe &&
                <>
                    <div className="col-4">
                        <img className="img-fluid" src={`/img/${recipe.img}`} alt={recipe.title} />
                    </div>
                    <div className="col-8">
                        <h2 className="lead text-center">{recipe.baslik}</h2>
                        <ul className="list-group list-group-flush px-5">
                            {
                                recipe.list.map((item, index) => {
                                    return (<li key={index} className="list-group-item">{item}</li>);
                                })
                            }
                        </ul>
                    </div>
                    <div className="col-12 my-5 ">
                        <p className="px-2 lead">
                            {recipe.preparation}
                        </p>
                    </div>
                </>
            }
        </div>
    );
}

export const detailsRecipeLoader = async ({ params }) => {
    const { id } = params;
    const url = "http://localhost:3000/tarifler/" + id
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return data;

}