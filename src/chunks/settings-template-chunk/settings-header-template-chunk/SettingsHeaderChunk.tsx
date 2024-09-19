import IC_Camera from "@assets/icons/IC_Camera";
import Image from "next/image";
import React from "react";
import useSettingsHeaderChunk from "./useSettingsHeaderChunk";
import IC_Menu from "@assets/icons/IC_Menu";
import IC_Notification from "@assets/icons/IC_Notification";
import SettingsContainer from "../settings-container-chunk/SettingsContainer";
import IC_Indicator from "@assets/icons/IC_Indicator";
const SettingsHeaderChunk = () => {
  const { findID } = useSettingsHeaderChunk();
  const user = findID(1);
  return (
    <SettingsContainer>
      <div className="w-full flex flex-col md:flex-row ">
        {/*Menu and Notification */}
        <div className="w-full flex flex-col md:flex-row-reverse  gap-5">
          <div className="w-full flex justify-between items-center">
            {/* Menu */}
            <div className=" md:hidden ">
              <IC_Menu />
            </div>
            {/* Notification */}
            <div className=" relative w-8 h-8 md:w-[50px] md:h-[50px] rounded-full border-light-blue border-2 flex justify-center items-center">
              <IC_Indicator className="absolute left-[16.8px] top-[8.4px]" />
              <IC_Notification />
            </div>
          </div>
          <h1 className="text-2xl md:text-[32px] font-semibold font-clash text-light-blue leading-10">
            Settings
          </h1>
        </div>
        {/* Pic and Info */}
        <div className="flex flex-col items-center gap-5">
          <div className="relative w-[80px] h-[80px] rounded-full bg-lightBlue flex flex-col items-center justify-center">
            <Image src={user!.image} alt={user!.name} width={60} height={60} />
            <div className="bg-white absolute w-7 h-7 rounded-full bottom-[-4px] right-[-11px] flex flex-col justify-center items-center">
              <IC_Camera className="" />
            </div>
          </div>
          <h2 className="font-clash text-black font-semibold text-xl">
            {user?.name}
          </h2>
          <h3 className="font-clash text-black font-normal text-base">
            {user?.role}
          </h3>
        </div>
      </div>
    </SettingsContainer>
  );
};

export default SettingsHeaderChunk;
