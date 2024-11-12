import React, { ReactNode } from "react";
import IC_HomeNav from "@assets/icons/IC_HomeNav";
import IC_MessagesNav from "@assets/icons/IC_MessagesNav";
import IC_Applications from "@assets/icons/IC_Applications";
import IC_Search from "@assets/icons/IC_Search";
import IC_Companies from "@assets/icons/IC_Companies";
import IC_Profile from "@assets/icons/IC_Profile";
import IC_HelpCenter from "@assets/icons/IC_HelpCenter";
import IC_Settings from "@assets/icons/IC_Settings";
// import message from "../../chunks/settings-template-chunk/sidebar-template-chunk/useSidebarChunk";
import useSidebarChunk from "../../chunks/settings-template-chunk/sidebar-template-chunk/useSidebarChunk";

interface SideBarProps {
  topNav: Prop[];
  bottomNav: Prop[];
}
interface Prop {
  icon: ReactNode;
  title: string;
  link: string;
  notification?: any;
}
// const { messages } = useSidebarChunk();

export const sideBarData: SideBarProps = {
  topNav: [
    {
      icon: <IC_HomeNav />,
      title: "Dashboard",
      link: "/dashboard",
      notification: 0,
    },
    {
      icon: <IC_MessagesNav />,
      title: "Messages",
      link: "/messages",
      notification: 30,
    },
    {
      icon: <IC_Applications />,
      title: "Applications",
      link: "/applications",
      notification: 0,
    },
    {
      icon: <IC_Search color="#1B1B1B" />,
      title: "Find Jobs",
      link: "/find-jobs",
      notification: 0,
    },
    {
      icon: <IC_Companies />,
      title: "Browse Companies",
      link: "/browse-companies",
      notification: 0,
    },
    {
      icon: <IC_Profile />,
      title: "My Profile",
      link: "/profile",
      notification: 0,
    },
  ],
  bottomNav: [
    {
      icon: <IC_HelpCenter />,
      title: "Help Center",
      link: "/help-center",
      notification: 0,
    },
    {
      icon: <IC_Settings />,
      title: "Settings",
      link: "/settings",
      notification: 0,
    },
  ],
};
