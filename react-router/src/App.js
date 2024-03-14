import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Home } from "./pages/Home.js"
import { About } from "./pages/About.js"
import {NotFoundPage} from "./pages/NotFoundPage.js"
import { MainLayout } from "./layouts/Main_Layout.js";
import { HelpLayout } from "./layouts/HelpLayout.js";
import { Contact, contactAction } from "./pages/help/Contact.js";
import { Faq } from "./pages/help/Faq.js";
import { Users, userLoader } from "./pages/user/Users.js";
import { UserDetails, userDetailsLoader } from "./pages/user/UserDetails.js";
import { UserError } from "./pages/user/UserError.js";
function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/", element: <MainLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: "home", element: <Home /> },
          { path: "about", element: <About /> },
          {
            path: "help",
            element: <HelpLayout />,
            children: [
              { path: "contact", element: <Contact />, action: contactAction },
              { path: "faq", element: <Faq /> },
            ]
          },
          {
            path: "users",
            errorElement : <UserError/>,
            children: [
              { index : true, element: <Users />, loader: userLoader},
              { path: ":userId", element: <UserDetails />, loader: userDetailsLoader }
            ]
          },
          {
            path : "*" , element : <NotFoundPage/>
          }

        ]
      }
    ]
  );
  return (
    <RouterProvider router={router} />
  );
}

export default App;
