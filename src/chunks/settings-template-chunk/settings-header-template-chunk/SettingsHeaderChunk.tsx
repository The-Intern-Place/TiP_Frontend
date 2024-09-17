import IC_Camera from "@assets/icons/IC_Camera";
import Image from "next/image";
import React from "react";
import useSettingsHeaderChunk from "./useSettingsHeaderChunk";
import IC_Menu from "@assets/icons/IC_Menu";
import IC_Notification from "@assets/icons/IC_Notification";
const SettingsHeaderChunk = () => {
  const { findID } = useSettingsHeaderChunk();
  const user = findID(1);
  return (
    <div className="">
      <div className="">
        <div className="">
          <IC_Menu />
          <div className="">
            <IC_Notification />
          </div>
        </div>
        <h1 className="">Settings</h1>
      </div>

      <div className="">
        <div className="">
          <Image src={user!.image} alt={user!.name} width={60} height={60} />
          <IC_Camera />
        </div>
        <h2 className="">{user?.name}</h2>
        <h3 className="">{user?.role}</h3>
      </div>
    </div>
  );
};

export default SettingsHeaderChunk;
