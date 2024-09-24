import React from "react";
import useSettingsHeaderChunk from "../settings-header-template-chunk/useSettingsHeaderChunk";
import Image from "next/image";
import IC_Image from "@assets/icons/IC_Image";

const SettingsProfileChunk = () => {
  const { findID } = useSettingsHeaderChunk();
  const user = findID(1);
  return (
    <div>
      {/* Basic info */}
      <div className="flex flex-col">
        <h1 className="text-base font-semibold font-epilogue">
          Basic Information
        </h1>
        <p className="font-epilogue text-base font-normal leading-6 text-left text-[#1B1B1B99]">
          This is your personal information that you can update at any time
        </p>
      </div>
      {/* Profile photo for only desktop */}
      <div className="">
        <div className="">
          <h1 className="">Profile Photo</h1>
          <p className="">
            This image will be shown publicly as your profile picture, it will
            help recruiter recognize you.
          </p>
        </div>
        <div className="">
          <div className="relative w-[80px] h-[80px] md:w-[50px] md:h-[50px] rounded-full bg-lightBlue flex flex-col items-center justify-center">
            <Image
              src={user!.image}
              alt={user!.name}
              width={40}
              height={40}
              className="hidden md:block"
            />
          </div>
          <div className="w-[376px] h-[150px]">
            <IC_Image />
            <h1 className="">
              Click to replace<span className=""></span> or drag and drop
            </h1>
            <h1 className="">SVG, PNG, JPG or GIF (max.400 x 400px)</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsProfileChunk;
