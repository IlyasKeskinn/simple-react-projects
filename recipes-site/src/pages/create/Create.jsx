import { useEffect, useRef, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { useContext } from "react"; 
import { ThemeContext } from "../../context/ThemeContext";
export const Create = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [img, setImage] = useState("");
    const [url, setUrl] = useState("");
    const [preparation, setPreparation] = useState("");
    const [item, setItem] = useState("");
    const [list, setList] = useState([]);
    const recipeItemInput = useRef(null);
    const { postData, data } = useFetch("http://localhost:3000/tarifler", "POST");
    const navigate = useNavigate();

    const {color,mode} = useContext(ThemeContext);

    const handleRecipeList = (e) => {
        e.preventDefault();

        if (item && !list.includes(item)) {
            setList(prevItems => ([...prevItems, item]));
        }
        recipeItemInput.current.focus();
        recipeItemInput.current.value = "";
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postData({ title, desc, img, url, preparation, list });
    }

    useEffect(() => {
        if (data?.id) {
            navigate("/")
        }
    }, [data, navigate]);
    return (
        <div className={`mt-4`}>
            <div className={`card ${mode === "light" ? "bg-dark" : "bg-light"}  ${mode === "light" ? "text-light" : "text-dark"}`}>
                <div className="card-header">
                    <h2 className="card-title">Recipe</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="title">Recipe Name</label>
                            <input type="text" className="form-control" name="title" onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="desc">Description</label>
                            <input type="text" className="form-control  p-3" name="desc" onChange={(e) => setDesc(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="recipeList">Item List
                                <ul className="list-group list-group-flush">
                                    {list.map(item => {
                                        return (<li key={item} className="list-group-item">{item}</li>);
                                    })}
                                </ul>
                            </label>
                            <div className="input-group">
                                <input type="text" ref={recipeItemInput} className="form-control" name="recipeList" onChange={(e) => setItem(e.target.value)} />
                                <button type="button" className={`btn btn-${color}`}onClick={handleRecipeList}>+</button>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="preparation">Preparation</label>
                            <textarea type="text" className="form-control" name="preparation" onChange={(e) => setPreparation(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="url">Url</label>
                            <input type="text" className="form-control" name="url" onChange={(e) => setUrl(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="img">Image</label>
                            <input type="text" className="form-control" name="img" onChange={(e) => setImage(e.target.value)} />
                        </div>
                        <button type="submit" className={`btn btn-${color} w-100`}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}