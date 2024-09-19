import React, { ReactNode } from "react";
import IC_HomeNav from "@assets/icons/IC_HomeNav";
import IC_MessagesNav from "@assets/icons/IC_MessagesNav";
import IC_Applications from "@assets/icons/IC_Applications";
import IC_Search from "@assets/icons/IC_Search";
import IC_Companies from "@assets/icons/IC_Companies";
import IC_Profile from "@assets/icons/IC_Profile";
interface sideBarProps {
  icon: React.FC<React.SVGAttributes<SVGElement>>;
  title: string;
  link: string;
}
const useSidebarChunk = () => {
  const sideBarData = [
    {
      icon: IC_HomeNav,
      title: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: IC_MessagesNav,
      title: "Messages",
      link: "/messages",
    },
    {
      icon: IC_Applications,
      title: "Applications",
      link: "/applications",
    },
    {
      icon: IC_Search,
      title: "Find Jobs",
      link: "/find-jobs",
    },
    {
      icon: IC_Companies,
      title: "Browse Companies",
      link: "/browse-companies",
    },
    {
      icon: IC_Profile,
      title: "My Profile",
      link: "/profile",
    },
  ];

  return { sideBarData };
};

export default useSidebarChunk;
