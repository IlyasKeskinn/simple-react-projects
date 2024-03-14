import { Link, useLoaderData } from "react-router-dom";

export const Users = () => {
    const users = useLoaderData();

    return (
        <div>
            {users.map(user => {
                return (
                    <Link to={user.id.toString()} key={user.id}>
                        <div className="user">
                            <p className="user-name">
                                <i className="fa-solid fa-caret-right"></i>
                                {user.name}
                            </p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}


export const userLoader = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
}