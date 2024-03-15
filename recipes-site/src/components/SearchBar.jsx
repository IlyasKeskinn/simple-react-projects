import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
    const [keyword, setKeyword] = useState();
    const navigate = useNavigate();
    const searchInput = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (keyword) {
            navigate(`/search?q=${keyword}`)
        }
        searchInput.current.value = "";
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input  ref={searchInput} type="text" className="form-control" placeholder="Search..." onChange={(e) => setKeyword(e.target.value)} />
            </form>
        </div>
    );
}