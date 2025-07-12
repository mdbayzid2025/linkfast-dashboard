import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/error/ErrorPage";
import Dashboard from "../pages/error/dashboard/Dashboard/Dashboard";

import Login from "../pages/error/authentication/Login";

import Tarms from "../pages/error/dashboard/Tarms";
import Contact from "../pages/error/dashboard/Contact";
import TransactionDetails from "../pages/error/dashboard/transactionDetails/TransactionDetails";
import ManageShop from "../pages/error/dashboard/manageShop/ManageShop";
import UserList from "../pages/error/dashboard/userList/UsersList";
import AllAdmin from "../pages/error/dashboard/allAdmin/AllAdmin";
import Policy from "../pages/error/dashboard/Policy";
import FAQ from "../pages/error/dashboard/FAQ/FAQ";
import Slider from "../pages/error/dashboard/Slider/Slider";
import HeaderNews from "../pages/error/dashboard/HeaderNews/HeaderNews";
import WhyUse from "../pages/error/dashboard/WhyUse/WhyUser";
import Reviews from "../pages/error/dashboard/reviews/Reviews";
import CouponManage from "../pages/error/dashboard/Coupon/CouponManage";
import SubCategory from "../pages/error/dashboard/ManageSubcategory/ManageSubcategory";
import InterfaceSetup from "../pages/error/dashboard/InterfaceSetup/InterfaceSetup";
import About from "../pages/error/dashboard/About/About";
import Blogs from "../pages/error/dashboard/Blogs/Blogs";
import ForgetPassword from "../pages/error/authentication/ForgetPassword";
import VerifyOTP from "../pages/error/authentication/VerifyOTP";
import NewPassword from "../pages/error/authentication/NewPassword";

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
            { path: "policy", element: <Policy /> },
            { path: "faq", element: <FAQ /> },
            { path: "about", element: <About /> },
            { path: "header-news", element: <HeaderNews /> },
            { path: "terms", element: <Tarms /> },
            { path: "contact", element: <Contact /> },
            { path: "slider", element: <Slider /> },
            { path: "why-use", element: <WhyUse /> },
            { path: "reviews", element: <Reviews /> },
            { path: "coupon", element: <CouponManage /> },
            { path: "category", element: <SubCategory /> },
            { path: "interface-setup", element: <InterfaceSetup /> },
        ]
    },
    { path: "/login", element: <Login />},
    { path: "/forget-password", element: <ForgetPassword />},
    { path: "/verify-otp", element: <VerifyOTP />},
    { path: "/new-password", element: <NewPassword />},

])

export default router;