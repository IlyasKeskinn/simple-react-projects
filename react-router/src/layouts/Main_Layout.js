import { NavLink, Outlet, useNavigation } from "react-router-dom";
import { Loading } from "../components/Loading";

export const MainLayout = () => {
    const navigation = useNavigation();
    return(
        <div className="container">
            <header className="main-header">
                <h1>React Router</h1>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="users">Users</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="help">Help</NavLink>
                </nav>
            </header>
            <main className="section">
                {navigation.state === "loading" ? <Loading/> : <Outlet/>}
            </main>
        </div>
    );


}

