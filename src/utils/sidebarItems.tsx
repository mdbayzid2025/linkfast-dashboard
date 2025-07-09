import { IoBarChartOutline } from "react-icons/io5";
import type { TSidebarItem } from "./generateSidebarItems";

export const sidebarItems: TSidebarItem[] = [
    {
        key: "dashboard",
        label: "Dashboard",
        path: "",
        icon: <IoBarChartOutline size={24} />,
    },
    {
        key: "transaction-details",
        label: "Transaction Details",
        path: "transaction-details",
        icon: <IoBarChartOutline size={24} />,
    },
    {
        key: "manage-shop",
        label: "Manage Shop",
        path: "manage-shop",
        icon: <IoBarChartOutline size={24} />,
    },
    {
        key: "settings",
        label: "Settings",
        path: "settings",
        icon: <IoBarChartOutline size={24} />,
        children: [
            {
                key: "header-news",
                label: "Header News",
                icon: <IoBarChartOutline size={24} />,
                path: "header-news",
            },
            {
                key: "slider",
                label: "Slider",
                icon: <IoBarChartOutline size={24} />,
                path: "slider",

            },
            {
                key: "set-local-sim",
                label: "Set Local Sim",
                icon: <IoBarChartOutline size={24} />,
                path: "set-local-sim",
            },
            {
                key: "why-use",
                label: "Why Use",
                icon: <IoBarChartOutline size={24} />,
                path: "why-use",
            },
            {
                key: "set-reviews",
                label: "Set Reviews",
                icon: <IoBarChartOutline size={24} />
            },
            {
                key: "about",
                label: "About",
                icon: <IoBarChartOutline size={24} />,
                path: "about",
            },
            {
                key: "terms",
                label: "Terms",
                icon: <IoBarChartOutline size={24} />,
                path: "terms",
            },
            {
                key: "contact",
                label: "Contact",
                icon: <IoBarChartOutline size={24} />,
                path: "contact",
            },
            {
                key: "policy",
                label: "Policy",
                icon: <IoBarChartOutline size={24} />,
                path: "policy",
            },
            {
                key: "faq",
                label: "FAQ",
                icon: <IoBarChartOutline size={24} />,
                path: "faq",
            },
            {
                key: "blogs",
                label: "Blog",
                icon: <IoBarChartOutline size={24} />,
                path: "blogs",
            },
        ]
    },
    {
        key: "user-list",
        label: "User List",
        path: "user-list",
        icon: <IoBarChartOutline size={24} />,
    },
    {
        key: "all-admin",
        label: "All Admin",
        path: "all-admin",
        icon: <IoBarChartOutline size={24} />,
    },   
]