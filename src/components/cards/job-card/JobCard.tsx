import React from "react";
import { JobCardProps } from "./JobCard.types";
import Image from "next/image";

const JobCard = (props: JobCardProps) => {
  return (
    <div className="bg-white text-[#1B1B1B] rounded-[10px] shadow-lg p-6 w-full">
      <div className="flex items-center gap-3">
        <Image src={props.image} alt="" />
        <div className="space-y-1 w-full">
          <p className="lg:text-[20px] md:text-lg font-semibold">{props.title}</p>
          <div className="flex items-center gap-3">
            <p className="text-base">
              {props.company}
            </p>
            <div className="w-1 h-1 bg-black rounded-full" />
            <p className="text-base">
              {props.location}
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="bg-[#99B5E5] opacity-30 rounded-[40px] lg:px-5 px-3 py-1 lg:text-sm text-xs font-semibold">
              {props.duration}
            </div>
            <div className="w-[1px] h-8 bg-[#99B5E5]" />
            <div className="border border-[#1976D2] rounded-[40px] px-5 py-1 text-sm font-semibold">
              {props.sector}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
