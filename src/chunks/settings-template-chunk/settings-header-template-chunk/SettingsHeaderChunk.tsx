import IC_Camera from "@assets/icons/IC_Camera";
import Image from "next/image";
import React from "react";
import useSettingsHeaderChunk from "./useSettingsHeaderChunk";
import IC_Menu from "@assets/icons/IC_Menu";
import IC_Notification from "@assets/icons/IC_Notification";
import SettingsContainer from "../settings-container-chunk/SettingsContainer";
import IC_Indicator from "@assets/icons/IC_Indicator";
import IC_ArrowDown from "@assets/icons/IC_ArrowDown";
// import { user } from "../../../utils/data/user";

const SettingsHeaderChunk = () => {
  const { findID } = useSettingsHeaderChunk();
  // const findID = (id: number) => {
  //   const foundID = user.find((item: any) => item.id === id);
  //   return foundID;
  // };
  const currentUser: any = findID(1);
  return (
    <SettingsContainer bg="md:bg-[#F8F8F8]">
      <div className="w-full flex flex-col md:flex-row md:px-10 md:gap-[60px]">
        {/*Menu, "Setting" and Notification */}
        <div className=" w-full flex flex-col md:flex-row-reverse md:justify-between md:items-center gap-5">
          <div className="flex justify-between items-center">
            {/* Menu */}
            <div className=" md:hidden ">
              <IC_Menu />
            </div>
            {/* Notification */}
            <div className=" relative w-8 h-8 md:w-[50px] md:h-[50px] rounded-full border-light-blue border-2 flex justify-center items-center">
              <IC_Indicator className="absolute left-[16.8px] top-[5.4px] md:left-[28px] md:top-[14px]" />
              <IC_Notification
                className="block md:hidden lg-hidden"
                size={true}
              />
              <IC_Notification className="hidden md:block" size={false} />
            </div>
          </div>
          <h1 className="text-2xl md:text-[32px] font-semibold font-clash text-light-blue leading-10">
            Settings
          </h1>
        </div>
        {/* Pic and Info */}
        <div className="md:w-[30%] flex flex-col items-center md:flex-row gap-5 md:gap-4">
          <div className="relative w-[80px] h-[80px] md:w-[50px] md:h-[50px] rounded-full bg-lightBlue flex flex-col items-center justify-center">
            <Image
              src={currentUser!.image}
              alt={currentUser!.name}
              width={60}
              height={60}
              className="md:hidden"
            />
            <Image
              src={currentUser!.image}
              alt={currentUser!.name}
              width={40}
              height={40}
              className="hidden md:block"
            />
            <div className="bg-white absolute w-7 h-7 rounded-full bottom-[-4px] right-[-11px] flex flex-col justify-center items-center">
              <IC_Camera className="" />
            </div>
          </div>
          <div className="flex flex-col gap-5 md:gap-[2px] items-center">
            <h2 className="font-clash text-black font-semibold text-xl md:text-[24px]">
              {currentUser?.name}
            </h2>
            <h3 className="font-clash text-black font-normal text-base">
              {currentUser?.role}
            </h3>
          </div>
          <div className="hidden md:block">
            <IC_ArrowDown />
          </div>
        </div>
      </div>
    </SettingsContainer>
  );
};

export default SettingsHeaderChunk;
