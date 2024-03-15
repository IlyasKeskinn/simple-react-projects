import { Link } from "react-router-dom";
export const DetailsError = () =>{

    return (
        <div className="d-flex justify-content-center align-items-center mt-5">
            <div className="card w-50">
                <div className="card-header">
                    <h3 className="text-center">Recipe Not Found!</h3>
                </div>
                <div className="card-body">
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium incidunt nihil dignissimos sit optio ipsa, similique aliquam totam sunt culpa! Nisi repudiandae pariatur deleniti, cum iure nulla molestiae quidem at.</p>
                </div>
                <div className="card-footer">
                    <Link to="/" className="btn btn-warning w-100">Back To Home</Link>
                </div>
            </div>
        </div>
    );
}