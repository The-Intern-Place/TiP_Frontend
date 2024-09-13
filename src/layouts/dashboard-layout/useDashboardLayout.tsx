import { ListItem } from "@/utils/types";
import IC_Applications from "@assets/icons/IC_Applications";
import IC_Browse from "@assets/icons/IC_Browse";
import IC_Dashboard from "@assets/icons/IC_Dashboard";
import IC_HelpCenter from "@assets/icons/IC_HelpCenter";
import IC_Messages from "@assets/icons/IC_Messages";
import IC_Profile from "@assets/icons/IC_Profile";
import IC_Search from "@assets/icons/IC_Search";
import IC_Settings from "@assets/icons/IC_Settings";

export default function useDashboardLayout() {
  const menuOptions: ListItem[] = [
    {
      id: "",
      name: "Dashboard",
      icon: <IC_Dashboard />,
    },
    {
      id: "",
      name: "Messages",
      icon: <IC_Messages />,
    },
    {
      id: "",
      name: "Applications",
      icon: <IC_Applications />,
    },
    {
      id: "/admin/find-job",
      name: "Find Jobs",
      icon: <IC_Search color="black" />,
    },
    {
      id: "",
      name: "Browse Companies",
      icon: <IC_Browse />,
    },
    {
      id: "",
      name: "My Profile",
      icon: <IC_Profile />,
    },
  ];

  const subMenuOptions: ListItem[] = [
    {
      id: "",
      name: "Help Center",
      icon: <IC_HelpCenter />,
    },
    {
      id: "",
      name: "Settings",
      icon: <IC_Settings />,
    },
  ];

  return {
    menuOptions,
    subMenuOptions,
  };
}
