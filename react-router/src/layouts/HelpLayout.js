import { NavLink, Outlet } from "react-router-dom";

export const HelpLayout = () => {

    return (
        <div className="help-layout">
            <div className="section-header">
                <div>
                    <h1>Help Page</h1>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                </div>
            </div>
            <nav>
                <NavLink to="contact">Contact</NavLink>
                <NavLink to="faq">Faq</NavLink>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );


}

