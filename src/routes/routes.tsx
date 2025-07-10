import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/error/ErrorPage";
import Dashboard from "../pages/error/dashboard/Dashboard/Dashboard";
import Blogs from "../pages/error/dashboard/Blogs";
import Login from "../pages/error/authentication/Login";
import About from "../pages/error/dashboard/Dashboard/About";
import Tarms from "../pages/error/dashboard/Tarms";
import Contact from "../pages/error/dashboard/Contact";
import TransactionDetails from "../pages/error/dashboard/transactionDetails/TransactionDetails";
import ManageShop from "../pages/error/dashboard/manageShop/ManageShop";
import UserList from "../pages/error/dashboard/userList/UsersList";
import AllAdmin from "../pages/error/dashboard/allAdmin/AllAdmin";
import Policy from "../pages/error/dashboard/Policy";
import FAQ from "../pages/error/dashboard/FAQ/FAQ";
import Slider from "../pages/error/dashboard/Slider/Slider";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: "", element: <Dashboard /> },
            { path: "transaction-details", element: <TransactionDetails /> },
            { path: "manage-shop", element: <ManageShop /> },
            { path: "user-list", element: <UserList /> },
            { path: "all-admin", element: <AllAdmin /> },
            { path: "blogs", element: <Blogs /> },
            { path: "about", element: <About /> },
            { path: "policy", element: <Policy /> },
            { path: "faq", element: <FAQ /> },
            { path: "about", element: <About /> },
            { path: "terms", element: <Tarms /> },
            { path: "contact", element: <Contact /> },
            { path: "slider", element: <Slider /> }
        ]
    },
    {
        path: "/login",
        element: <Login />
    }
])

export default router;