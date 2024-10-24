import React from "react";
import useSettingsHeaderChunk from "../settings-header-template-chunk/useSettingsHeaderChunk";
import Image from "next/image";
import IC_Image from "@assets/icons/IC_Image";
import SettingsProfileForm from "./settings-profile-form/SettingsProfileForm";

const SettingsProfileChunk = () => {
  const { findID } = useSettingsHeaderChunk();
  const user = findID(1);
  return (
    <div className="md:mx-7">
      <div className="">
        <div className="flex flex-col md:py-6 py-4 md:border-b-[1px] border-b-0">
          <h1 className="text-base font-semibold font-epilogue">
            Basic Information
          </h1>
          <p className="font-epilogue text-base font-normal leading-6 text-left text-[#1B1B1B99]">
            This is your personal information that you can update at any time
          </p>
        </div>

        <div className="md:border-b-[1px] border-b-0">
          <div className="hidden md:flex justify-between items-center  py-8 md:w-[916px]">
            <div className="w-[28%]">
              <h1 className="font-epilogue text-[18px] font-semibold leading-6 text-left">
                Profile Photo
              </h1>
              <p className="">
                This image will be shown publicly as your profile picture, it
                will help recruiter recognize you.
              </p>
            </div>
            <div className="flex justify-between items-center w-[538px]">
              <div className="relative w-[129px] h-[129px]  rounded-full bg-lightBlue flex flex-col items-center justify-center">
                <Image
                  src={user!.image}
                  alt={user!.name}
                  width={119.17}
                  height={119.17}
                  className="hidden md:block"
                />
              </div>
              <div
                className="flex flex-col items-center justify-center w-[376px] h-[150px] bg-[#F5F8EE] border-2 border-blue border-dashed rounded-md
"
              >
                <IC_Image />
                <h1 className="font-epilogue text-[18px] font-normal leading-6">
                  <span className="font-epilogue text-[18px] font-normal leading-6 text-blue">
                    Click to replace
                  </span>{" "}
                  or drag and drop
                </h1>
                <h1 className="font-epilogue text-[18px] font-normal leading-6 text-[#1B1B1B99]">
                  SVG, PNG, JPG or GIF (max.400 x 400px)
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="md:py-8 flex flex-col md:flex-row md:w-[916px] justify-between">
            <h1 className="hidden md:inline-flex text-base md:text-[18px] font-semibold font-epilogue">
              Personal Information
            </h1>

            <div className="">
              <SettingsProfileForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsProfileChunk;
