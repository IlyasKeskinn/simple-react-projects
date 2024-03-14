import { Link, useRouteError } from "react-router-dom";

export const UserError =() => {
    const error = useRouteError();
    console.log(error);
    return(
        <div>
            <h4>User Not Found Return to Home Page</h4>
            <Link to="/" className ="btn btn-secondary">Go Home</Link>
        </div>
    );
}