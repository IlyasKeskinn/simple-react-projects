import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout.jsx";
import { Home } from "./pages/home/Home.jsx"
import { Details,detailsRecipeLoader } from "./pages/details/Details.jsx"
import { Create } from "./pages/create/Create.jsx"
import { Search } from "./pages/search/Search.jsx"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "./index.css"
import { DetailsError } from "./pages/details/DetailsError.jsx";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {index : true , element : <Home/>},
        {path : "home", element : <Home/>},
        { path: "details/:id", element: <Details />, loader:detailsRecipeLoader , errorElement : <DetailsError/> },
        { path: "create", element: <Create /> },
        { path: "search", element: <Search /> },
      ]
      
    },
   
  ]);
return (
  <RouterProvider router={router}></RouterProvider>
);
}

export default App;
