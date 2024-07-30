import React from "react";
// import FindJobCard from '@/components/cards/find-job-card/FindJobCard'
import { FindJobCardProps } from "@/components/cards/find-job-card/FindJobCard.types";

function About(props: FindJobCardProps) {
  const appliedPercentage =
    (Number(props.applied) / Number(props.capacity)) * 100;
  return (
    <div className="mb-5">
      <div>
        <h1 className="flex font-bold text-3xl">About This Role</h1>
        <div className="flex items-center justify-start mt-4 w-full">
          <h1 className="text-[#000000] text-[14px]  leading-[22px] font-[600] ">
            {props.applied} applied
            <span className="text-[#7C8493] text-[14px]  leading-[22px] font-[600]  pl-1">
              of {props.capacity} capacity
            </span>
          </h1>
        </div>
        <div className="w-[100%] h-[6px] rounded-[10px] bg-[#D6DDEB] mt-[1rem]">
          <div
            className="h-[6px] bg-[#56CDAD]"
            style={{ width: `${appliedPercentage}%` }}
          ></div>
        </div>
        <div className="flex justify-between">
          <p>Appply Before</p>
          <p>July 31, 2021</p>
        </div>
        <div className="flex justify-between">
          <p>Appply Before</p>
          <p>July 31, 2021</p>
        </div>
        <div className="flex justify-between">
          <p>Appply Before</p>
          <p>July 31, 2021</p>
        </div>
        <div className="flex justify-between">
          <p>Appply Before</p>
          <p>July 31, 2021</p>
        </div>
      </div>
    </div>
  );
}

export default About;
