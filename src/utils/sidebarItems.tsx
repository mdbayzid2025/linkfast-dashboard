
import { BsListTask, BsShop } from "react-icons/bs";
import { GrTransaction } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaUserSolid } from "react-icons/lia";
import { PiMoney, PiUsers } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import type { TSidebarItem } from "./generateSidebarItems";
import { AppstoreOutlined, EditOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { CiEdit, CiMoneyBill } from "react-icons/ci";
import { TfiLayoutSlider } from "react-icons/tfi";
import { MdOutlineCategory, MdOutlinePolicy, MdOutlineReviews } from "react-icons/md";
import { TbAffiliate } from "react-icons/tb";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { RiQuestionMark } from "react-icons/ri";
import { LuContact } from "react-icons/lu";
import { FaQ } from "react-icons/fa6";

export const sidebarItems: TSidebarItem[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "",
    icon: <RxDashboard style={{ fontSize: '24px',  }} />,
  },
  {
    key: "transaction-details",
    label: "Transaction Details",
    path: "transaction-details",
    icon: <GrTransaction  style={{ fontSize: '24px' }} />,
  },
  {
    key: "manage-shop",
    label: "Manage Shop",
    path: "manage-shop",
    icon: <BsShop style={{ fontSize: '24px' }} />,
  },
  {
    key: "user-list",
    label: "User List",
    path: "user-list",
    icon: <LiaUserSolid style={{ fontSize: '24px' }} />,
  },
  {
    key: "all-admin",
    label: "All Admin",
    path: "all-admin",
    icon: <PiUsers style={{ fontSize: '24px' }} />,
  },
  {
    key: "settings",
    label: "Settings",
    path: "settings",
    icon: <IoSettingsOutline style={{ fontSize: '24px' }} />,
    children: [
      {
        key: "header-news",
        label: "Header News",
        icon: <CiEdit style={{ fontSize: '24px' }} />,
        path: "header-news",
      },
      {
        key: "slider",
        label: "Slider",
        icon: <TfiLayoutSlider style={{ fontSize: '24px' }} />,
        path: "slider",
      },

      {
        key: "category",
        label: "Manage SIM Category",
        icon: <MdOutlineCategory style={{ fontSize: '24px' }} />,
        path: "category",
      },
      {
        key: "interface-setup",
        label: "Interface Setup",
        icon: <TbAffiliate style={{ fontSize: '24px' }} />,
        path: "interface-setup",
      },
      {
        key: "blogs",
        label: "Blog",
        icon: <HiOutlineDocumentChartBar style={{ fontSize: '24px' }} />,
        path: "blogs",
      },
      {
        key: "reviews",
        label: "Reviews",
        icon: <MdOutlineReviews style={{ fontSize: '24px' }} />,
        path: "reviews",
      },
      {
        key: "coupon",
        label: "Coupon",
        icon: <PiMoney style={{ fontSize: '24px' }} />,
        path: "coupon",
      },
      {
        key: "about",
        label: "About",
        icon: <InfoCircleOutlined style={{ fontSize: '24px' }} />,
        path: "about",
      },
      {
        key: "why-use",
        label: "Why Use",
        icon: <RiQuestionMark style={{ fontSize: '24px' }} />,
        path: "why-use",
      },
      {
        key: "faq",
        label: "FAQ",
        icon: <FaQ style={{ fontSize: '24px' }} />,
        path: "faq",
      },


      {
        key: "terms",
        label: "Terms",
        icon: <BsListTask style={{ fontSize: '24px' }} />,
        path: "terms",
      },
      {
        key: "contact",
        label: "Contact",
        icon: <LuContact style={{ fontSize: '24px' }} />,
        path: "contact",
      },
      {
        key: "policy",
        label: "Policy",
        icon: <MdOutlinePolicy style={{ fontSize: '24px' }} />,
        path: "policy",
      },


    ],
  },

];
