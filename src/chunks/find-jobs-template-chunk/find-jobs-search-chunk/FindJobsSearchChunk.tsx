"use client";
import React from "react";
import Button from "@/components/button/Button";
import SelectInput2 from "@/components/inputs/select-input/SelectInput2";
import { LocationIcon, ArrowDown } from "@assets/images";
import searchicon from "public/images/searchicon.svg";
import Image from "next/image";

const FindJobsSearchChunk = ({ isInDashboard }: { isInDashboard: boolean }) => {
  return (
    <div
      className={`flex flex-col lg:flex-row border items-center justify-center py-4 px-6 ${!isInDashboard && "bg-white"}`}
    >
      {/* placeholder and search icon for smaller screen*/}
      <div className="flex items-center w-full lg:px-1 gap-[16px]">
        <Image
          src={searchicon}
          alt="searchIcon"
          className=" md:w-[24px] w-[20px] md:h-[24px] h-[20px]"
        />

        <input
          type="text"
          placeholder="Job title or keyword"
          className=" border-b-[1px] border-gray  bg-transparent rounded-none focus:outline-none 
            focus:ring-0 w-full h-[60px] items-center"
        />
      </div>

      {/* divider */}
      <div className="border-[1px] border-gray my-1 md:h-[54px] lg:mx-2  hidden lg:flex" />

      {/* florence,italy  */}
      <div className="w-full items-center bg-transparent flex rounded-0 lg:mt-[0rem] mb-8 lg:mb-0 rounded-bl-none rounded-br-none">
        <Image src={LocationIcon} alt="" className="" />

        <SelectInput2
          label=""
          placeholder="Florence, Italy"
          options={[{ id: "Country", name: "City, Country" }]}
          overrideStyles="border-r-0 border-l-0 border-t-0  rounded-0 bg-transparent items-center md:w-full  border-b-[1px] border-gray rounded-br-none  rounded-bl-none w-full  flex  "
          onChange={() => {}}
          iconRight={
            <div className="w-[16px] h-[16px] opacity-[50%]">
              <Image
                src={ArrowDown}
                alt=""
                className="absolute  w-[16px] h-[16px]  text-[#25324B]"
              />
            </div>
          }
        />
      </div>

      {/* button */}
      <div className="w-full md:ml-6 lg:w-64">
        <Button overrideStyles="" aria-label="Search">
          Search <span className="lg:hidden block">my job</span>
        </Button>
      </div>
    </div>
  );
};

export default FindJobsSearchChunk;
