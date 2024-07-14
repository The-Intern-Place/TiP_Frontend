import React from "react";
import { FindJobCardProps } from "./FindJobCard.types";
import Image from "next/image";

const FindJobCard = (props: FindJobCardProps) => {
  const appliedPercentage =
    (Number(props.applied) / Number(props.capacity)) * 100;

  return (
    <section
      className="flex  flex-col md:flex-row justify-between p-[24px]   items-start
    border-[1px] border-[#D6DDEB]  lg:h-[149px] md:h-[180px] w-[100%]  my-[0.5rem]"
    >
      <div className="flex  flex-col md:flex-row gap-[15px]  md:gap-[24px] w-[356px] h-[101px]  ">
        <Image src={props.img} alt="jobs_image" className="w-[68px] h-[68px]" />

        <div className="flex  flex-col gap-[8px] lg:max-w-[288px]">
          <h1 className="text-[20px]  font-epilogue text-[#25324B] font-[600] leading-[24px]">
            {props.title}
          </h1>

          {/* company and location */}
          <div className="flex flex-wrap items-center lg:gap-[8px]  gap-8px  ">
            <p className="text-[16px] text-[#7C8493] font-epilogue font-[400] leding-[25px] ">
              {" "}
              {props.company}{" "}
            </p>

            <div className="w-[4px] h-[4px] bg-[#7C8493] mx-2  md:mx-1"></div>

            <p className="text-[16px] text-[#7C8493] font-epilogue font-[400] leding-[25px]  ">
              {" "}
              {props.location}{" "}
            </p>
          </div>

          {/* types af track */}
          <div className="flex flex-wrap lg:flex-nowrap  gap-[8px] ">
            <div className="rounded-[80px] flex bg-[#56CDAD1A] w-[83px] h-[34px] items-center justify-center text-center">
              <h1 className="font-[600] font-epilogue text-[14px] leading-[22px] text-[#56CDAD] ">
                {" "}
                {props.duration}
              </h1>
            </div>

            {/* divider */}
            <div className="h-[34px] w-[1px] bg-[#D6DDEB] "></div>

            <div className="rounded-[80px] flex border-[2px] border-[#FFB836] w-[92px] h-[34px] items-center justify-center text-center">
              <h1 className="font-[600]  font-epilogue text-[14px] leading-[22px] text-[#FFB836] ">
                {" "}
                {props.sector1}
              </h1>
            </div>

            <div className="rounded-[80px] flex border-[2px] border-[#4640DE] w-[92px] h-[34px] items-center justify-center text-center">
              <h1 className="font-[600] font-epilogue text-[14px] leading-[22px] text-[#4640DE] ">
                {" "}
                {props.sector2}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* apply section */}

      <div className="flex flex-col  lg:w-[164px] md:w-[120px] ">
        <div className="mt-[6.5rem] md:mt-0">
          <button
            className="w-[100%]   h-[50px] bg-[#4640DE] flex text-center items-center 
          justify-center font-[700] text-[16px] leading-[25px] text-[#FFFFFF]"
          >
            Apply
          </button>
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

export default FindJobCard;
