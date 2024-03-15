import { Outlet, useNavigation } from "react-router-dom";
import { Nav } from "../components/Nav";
import {Loading} from "../components/Loading"
import { ThemeSelector } from "../components/ThemeSelector";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const MainLayout = () => {
    const navigate = useNavigation();
    const {mode} = useContext(ThemeContext);
    return (
        <>
            <Nav/>
            <main className={`main bg-${mode}`}>
                <section className="container">
                    {<ThemeSelector/>}
                    {navigate.state === "loading" ? <Loading/> : <Outlet/>}
                </section>
            </main>
        </>
    );
}