import { Link, useLoaderData } from "react-router-dom";

export const UserDetails = () => {
    const user = useLoaderData();
    return (
        <div>
            <h2 className="user-name">
                <i className="fa-solid fa-caret-right"></i>
                {user.name}
            </h2>
            <div className="user-info">
                <p>{user.username}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.address.city}</p>
            </div>
            <Link to="/users"  className="btn btn-secondary">Back to list</Link>
        </div>
    );
}

export const userDetailsLoader = async ({ params }) => {
    const { userId } = params;
    const response = await fetch("https://jsonplaceholder.typicode.com/users/" + userId.toString())
    if (response.status ===404) {
        throw new Error("Not Found Page!")
    }
    return response.json();
}