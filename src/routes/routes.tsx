import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/error/ErrorPage";
import Dashboard from "../pages/error/dashboard/Dashboard/Dashboard";
import Blogs from "../pages/error/dashboard/Blogs";
import Login from "../pages/error/authentication/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: "", element: <Dashboard /> },
            { path: "/", element: <Dashboard /> },
            { path: "blogs", element: <Blogs />}
        ]
    },
    {
        path: "/login",
        element: <Login />
    }
])

export default router;