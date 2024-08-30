import React from "react";
import { IJobDetailCard } from "./JobDetailCard.types";
import Image from "next/image";
import { IM_Save } from "@assets/images";

const JobDetailCard = (props: IJobDetailCard) => {
  return (
    <div className="flex flex-col gap-4 bg-white p-4 rounded-lg">
      <div className="flex gap-3 items-center">
        <Image src={props.image} alt={props.title} />
        <section>
          <h1 className="font-semibold text-[22px]">{props.title}</h1>
          <div className="flex items-center gap-1">
            <span>{props.city}</span>
            <div className="w-[6px] h-[6px] bg-grey rounded-full" />
            <span>{props.state}</span>
          </div>
        </section>
      </div>
      <section className="flex gap-2 w-full">
        <span className="bg-[#99B5E5] text-light-blue text-center text-xs font-semibold bg-opacity-30 rounded px-3 py-1.5 w-full">
          {props.job_duration}
        </span>
        <span className="bg-[#99B5E5] text-light-blue text-center text-xs font-semibold bg-opacity-30 rounded px-3 py-1.5 w-full">
          {props.job_mode}
        </span>
        <span className="bg-[#99B5E5] text-light-blue text-center text-xs font-semibold bg-opacity-30 rounded px-3 py-1.5 w-full">
          {props.job_type}
        </span>
      </section>
      <section className="font-clash">
        Skills: <span className="font-epilogue">{props.skills}</span>
      </section>
      <div className="flex justify-between">
        <section className="flex items-center gap-2">
          <span className="text-grey opacity-80">{props.created_at}</span>
          <div className="w-[6px] h-[6px] bg-grey rounded-full" />
          <span>{props.applicants} Applicants</span>
        </section>
        <Image src={IM_Save} alt="save" />
      </div>
    </div>
  );
};

export default JobDetailCard;
