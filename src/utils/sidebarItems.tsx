import {
  DashboardOutlined,
  ShopOutlined,
  SettingOutlined,
  FileTextOutlined,
  EditOutlined,
  AppstoreOutlined,
  InfoCircleOutlined,
  LockOutlined,
  ContactsOutlined,
  SafetyCertificateOutlined,
  QuestionCircleOutlined,
  ReadOutlined,
  UserOutlined,
  TeamOutlined,
} from "@ant-design/icons";

import type { TSidebarItem } from "./generateSidebarItems";

export const sidebarItems: TSidebarItem[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "",
    icon: <DashboardOutlined style={{ fontSize: '24px'}}/>,
  },
  {
    key: "transaction-details",
    label: "Transaction Details",
    path: "transaction-details",
    icon: <FileTextOutlined style={{ fontSize: '24px'}}/>,
  },
  {
    key: "manage-shop",
    label: "Manage Shop",
    path: "manage-shop",
    icon: <ShopOutlined style={{ fontSize: '24px'}}/>,
  },
  {
    key: "user-list",
    label: "User List",
    path: "user-list",
    icon: <UserOutlined style={{ fontSize: '24px'}}/>,
  },
  {
    key: "all-admin",
    label: "All Admin",
    path: "all-admin",
    icon: <TeamOutlined style={{ fontSize: '24px'}}/>,
  },
  {
    key: "settings",
    label: "Settings",
    path: "settings",
    icon: <SettingOutlined style={{ fontSize: '24px'}}/>,
    children: [
      {
        key: "header-news",
        label: "Header News",
        icon: <EditOutlined style={{ fontSize: '24px'}}/>,
        path: "header-news",
      },
      {
        key: "slider",
        label: "Slider",
        icon: <AppstoreOutlined style={{ fontSize: '24px'}}/>,
        path: "slider",
      },
      {
        key: "set-local-sim",
        label: "Set Local Sim",
        icon: <ShopOutlined style={{ fontSize: '24px'}}/>,
        path: "set-local-sim",
      },
      {
        key: "why-use",
        label: "Why Use",
        icon: <InfoCircleOutlined style={{ fontSize: '24px'}}/>,
        path: "why-use",
      },
      {
        key: "reviews",
        label: "Reviews",
        icon: <EditOutlined style={{ fontSize: '24px'}}/>,
        path: "reviews",
      },
      {
        key: "about",
        label: "About",
        icon: <InfoCircleOutlined style={{ fontSize: '24px'}}/>,
        path: "about",
      },
      {
        key: "terms",
        label: "Terms",
        icon: <LockOutlined style={{ fontSize: '24px'}}/>,
        path: "terms",
      },
      {
        key: "contact",
        label: "Contact",
        icon: <ContactsOutlined style={{ fontSize: '24px'}}/>,
        path: "contact",
      },
      {
        key: "policy",
        label: "Policy",
        icon: <SafetyCertificateOutlined style={{ fontSize: '24px'}}/>,
        path: "policy",
      },
      {
        key: "faq",
        label: "FAQ",
        icon: <QuestionCircleOutlined style={{ fontSize: '24px'}}/>,
        path: "faq",
      },
      {
        key: "blogs",
        label: "Blog",
        icon: <ReadOutlined style={{ fontSize: '24px'}}/>,
        path: "blogs",
      },
    ],
  },
  
];
