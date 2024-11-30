import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import MainLayout from "./components/MainLayout.jsx";
import SignUp from "./components/SignUp.jsx";
import SignIn from "./components/SignIn.jsx";

const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout/>,
    children:[

      {
        path: "/",
        element: <App />,
        loader: () => fetch("http://localhost:3500/coffees"),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) => fetch(`http://localhost:3500/coffees/${params.id}`),
      },
      {
        path:'/signup',
        element:<SignUp/>
      },
      {
        path:'/signin',
        element:<SignIn/>
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
