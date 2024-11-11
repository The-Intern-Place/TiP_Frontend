import React from "react";
import { FindJobTileCardProps } from "./FindJobTileCard.types";
import Image from "next/image";
import Button from "@/components/button/Button";
import { useJobSectorColor } from "@/utils/hooks/useSectorColor";

const FindJobTileCard = (props: FindJobTileCardProps) => {
  const appliedPercentage =
    (Number(props.applied) / Number(props.capacity)) * 100;

  return (
    <section className="w-full p-4 flex flex-col lg:flex-row gap-8 lg:justify-between border border-[#D6DDEB] my-2">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="">
          <Image
            src={props.img}
            alt="jobs_image"
            className="w-[68px] h-[68px]"
          />
        </div>
        <div className="">
          <h1 className="text-base sm:text-lg font-epilogue text-[#25324B] font-bold">
            {props.title}
          </h1>

          <div className="flex flex-wrap items-center gap-2 ">
            <p className="text-sm sm:text-base text-[#7C8493] font-epilogue">
              {" "}
              {props.company}{" "}
            </p>

            <div className="w-[4px] h-[4px] bg-[#7C8493] mx-1" />

            <p className="text-sm sm:text-base text-[#7C8493] font-epilogue">
              {" "}
              {props.location}{" "}
            </p>
          </div>
          <div className="flex items-center gap-8 my-2">
            <p className="text-sm">{props.jobLevel}</p>
            <p className="text-sm">{props.salaryRange}</p>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <h1 className="font-[600] font-epilogue bg-[#56CDAD1A] h-fit px-6 py-2 rounded-full text-sm text-[#56CDAD] ">
              {props.duration}
            </h1>

            {/* divider */}
            <div className="h-[34px] w-[1px] bg-[#D6DDEB] "></div>

            <div className="flex flex-row gap-4">
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
          </div>
        </div>
      </div>
      <div className="">
        <div className="">
          <Button
            overrideStyles="w-[100%]   h-[50px] bg-[#4640DE] flex text-center items-center rounded-none
              justify-center font-[700] text-[16px] leading-[25px] text-[#FFFFFF]"
          >
            Apply
          </Button>
        </div>

        {/* percentage bar */}
        <div className="w-[100%] h-[6px] rounded-[10px] bg-[#D6DDEB] mt-[1rem]">
          <div
            className="h-[6px] bg-[#56CDAD]"
            style={{ width: `${appliedPercentage}%` }}
          ></div>
        </div>

        {/* applied and capacity */}
        <div className="flex items-center justify-start mt-4 w-full">
          <h1 className="text-[#000000] text-[14px]  leading-[22px] font-[600] ">
            {props.applied} applied
            <span className="text-[#7C8493] text-[14px]  leading-[22px] font-[600]  pl-1">
              of {props.capacity} capacity
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default FindJobTileCard;
