"use client";
import React from "react";
import { FindJobCardProps } from "./FindJobCard.types";
import Image from "next/image";
import Button from "@/components/button/Button";
import { useJobSectorColor } from "@/utils/hooks/useSectorColor";

const FindJobCard = (props: FindJobCardProps) => {
  const appliedPercentage =
    (Number(props.applied) / Number(props.capacity)) * 100;

  return (
    <section className="p-4 border rounded border-[#D6DDEB]">
      <div className="flex flex-row justify-between">
        <Image
          src={props.img}
          alt="jobs_image"
          height={50}
          width={50}
          className=""
        />
        <h1 className="font-[600] font-epilogue bg-[#56CDAD1A] h-fit px-6 py-2 rounded-full text-sm text-[#56CDAD] ">
          {" "}
          {props.duration}
        </h1>
      </div>
      <div className="my-4">
        <h1 className="font-epilogue text-[#25324B] text-base md:text-xl font-semibold">
          {props.title}
        </h1>
        <div className="flex flex-wrap items-center space-x-2 my-2 text-sm">
          <p className="text-[#7C8493] font-epilogue">{props.company}</p>

          <div className="w-[4px] h-[4px] bg-[#7C8493] md:mx-1"></div>

          <p className="text-[#7C8493] font-epilogue"> {props.location} </p>
        </div>
        <div className="my-4 flex flex-row gap-4 flex-wrap">
          <h1
            className={`font-epilogue text-sm rounded-full py-1 px-4 font-medium ${useJobSectorColor(props.sector1)}`}
          >
            {" "}
            {props.sector1}
          </h1>
          <h1
            className={`font-epilogue text-sm rounded-full py-1 px-4 font-medium ${useJobSectorColor(props.sector2)}`}
          >
            {" "}
            {props.sector2}
          </h1>
        </div>
        <div className="mb-4 mt-6">
          <div className="flex items-center justify-between">
            <p className="text-sm">{props.jobLevel}</p>
            <p className="text-sm">{props.salaryRange}</p>
          </div>
          <div className="w-[100%] h-[6px] rounded-[10px] bg-[#D6DDEB] mt-4">
            <div
              className="h-[6px] bg-[#56CDAD]"
              style={{ width: `${appliedPercentage}%` }}
            ></div>
          </div>
          <div className="flex items-center justify-start mt-2 w-full mb-4">
            <h1 className="text-[#000000] text-sm font-semibold">
              {props.applied} applied
            </h1>
            <h1 className="text-[#7C8493] text-sm pl-1">
              of {props.capacity} capacity
            </h1>
          </div>
          <Button overrideStyles="w-full bg-[#4640DE] flex text-center items-center rounded-sm  justify-center text-[#FFFFFF]">
            Apply
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FindJobCard;
