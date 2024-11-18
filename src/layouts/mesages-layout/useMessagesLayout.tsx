import { ListItem } from "@/utils/types";
import IC_Applications from "@assets/icons/IC_Applications";
import IC_Dashboard from "@assets/icons/IC_Dashboard";
import IC_Messages from "@assets/icons/IC_Messages";

import React from "react";

function useMessagesLayout() {
  const messageOptions: ListItem[] = [
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
  ];
  return {
    messageOptions,
  };
}

export default useMessagesLayout;
