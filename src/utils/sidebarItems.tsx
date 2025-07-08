import { IoBarChartOutline } from "react-icons/io5";
import type { TSidebarItem } from "./generateSidebarItems";

export const sidebarItems: TSidebarItem[] = [
    {
        key: "analytics",
        label: "Analytics",
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
        key: "user-list",
        label: "User List",
        path: "user-list",
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
                icon: <IoBarChartOutline size={24} />
            },
            {
                key: "slider",
                label: "Slider",
                icon: <IoBarChartOutline size={24} />
            },
            {
                key: "set-local-sim",
                label: "Set Local Sim",
                icon: <IoBarChartOutline size={24} />
            },
            {
                key: "why-use",
                label: "Why Use",
                icon: <IoBarChartOutline size={24} />
            },
            {
                key: "set-reviews",
                label: "Set Reviews",
                icon: <IoBarChartOutline size={24} />
            },
            {
                key: "about",
                label: "About",
                icon: <IoBarChartOutline size={24} />
            },
            {
                key: "terms",
                label: "Terms",
                icon: <IoBarChartOutline size={24} />
            },
            {
                key: "contact",
                label: "Contact",
                icon: <IoBarChartOutline size={24} />
            },
            {
                key: "policy",
                label: "Policy",
                icon: <IoBarChartOutline size={24} />
            },
            {
                key: "faq",
                label: "FAQ",
                icon: <IoBarChartOutline size={24} />
            },
            {
                key: "blog",
                label: "Blog",
                icon: <IoBarChartOutline size={24} />
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
        key: "all-admin-list",
        label: "All Admin List",
        path: "all-admin-list",
        icon: <IoBarChartOutline size={24} />,
    },   
]