import IC_NO from "@assets/icons/IC_NO";
import IC_Yes from "@assets/icons/IC_Yes";
import React from "react";
import { HelpCentreCardProps } from "./HelpCentreCard.types";
import IC_Options from "@assets/icons/IC_Options";

const HelpCentreCard = (props: HelpCentreCardProps) => {
  return (
    <div className="p-3 sm:p-6 border border-[#D6DDEB] flex flex-col sm:gap-6 gap-3 w-full">
      {/* main */}
      <div className="w-[327px] md:w-[639px] border-b sm:pb-5 pb-2 flex flex-col items-start sm:gap-4 gap-2">
        <div className="flex flew-row w-full items-center justify-between">
          <h1 className="font-epilogue font-semibold text-base sm:text-[20px] text-[#25324B]">
            {props.title}
          </h1>
          <div className="">
            <IC_Options />
          </div>
        </div>
        <p className="font-epilogue font-normal text-base text-[#25324B]">
          {props?.paragraph}
        </p>
      </div>
      {/* bottom */}
      <div className=" flex flex-row sm:gap-5  gap-[10px] justify-start items-center">
        <div className="">
          <h1 className="font-epilogue font-normal text-base  text-[#515B6F99]">
            {props?.question}
          </h1>
        </div>
        <div className="flex flex-row sm:gap-5 items-center gap-[10px]">
          <div className="border p-[10px] flex flex-row gap-[10px] justify-between items-center">
            <IC_Yes />{" "}
            <p className="font-epilogue text-base font-bold text-blue">Yes</p>
          </div>

          <div className="border p-[10px] flex flex-row gap-[10px] justify-between items-center">
            <IC_NO />{" "}
            <p className="font-epilogue text-base font-bold text-blue">No</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCentreCard;
