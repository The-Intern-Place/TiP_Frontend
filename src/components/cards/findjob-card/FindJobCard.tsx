import React from "react";
import { FindJobCardProps } from "./FindJobCard.types";
import Image from "next/image";

// interface Props {
//   img: string;
//   title: string;
//   company: string;
//   location: string;
//   duration: string;
//   sector1: string;
//   sector2: string;
//   applied: number;
//   capacity: number;
// }

const FindJobCard = (props: FindJobCardProps) => {
  const appliedPercentage =
    (Number(props.applied) / Number(props.capacity)) * 100;

  return (
    <section
      className="flex  flex-col md:flex-row justify-between p-[24px] items-start
    border-[1px] border-[#D6DDEB] lg:w-[919px] lg:h-[149px] md:h-[250px] w-[100%] h-[400px] my-[0.5rem]"
    >
      <div className="flex  flex-col md:flex-row  gap-[2rem] w-[356px] h-[101px]  ">
        <Image src={props.img} alt="jobs_image" className="w-[68px] h-[68px]" />

        <div className="flex  flex-col gap-3">
          <h1 className="text-[20px] text-[#25324B] font-[600] leading-[24px]">
            {props.title}
          </h1>
          <p className="text-[16px] text-[#7C8493] font-[400] leding-[25px]">
            {props.company}
            <span className="w-[4px] h-[4px]">.</span> {props.location}
          </p>

          <div className="flex flex-wrap lg:flex-nowrap  gap-4 ">
            <div className="rounded-[80px] flex bg-[#56CDAD1A] w-[83px] h-[34px] items-center justify-center text-center">
              <h1 className="font-[600] text-[14px] leading-[22px] text-[#56CDAD] ">
                {" "}
                {props.duration}
              </h1>
            </div>

            {/* divider */}
            <div className="h-[34px] w-[1px] bg-[#D6DDEB] hidden lg:block"></div>

            <div className="rounded-[80px] flex border-[2px] border-[#FFB836] w-[92px] h-[34px] items-center justify-center text-center">
              <h1 className="font-[600] text-[14px] leading-[22px] text-[#FFB836] ">
                {" "}
                {props.sector1}
              </h1>
            </div>

            <div className="rounded-[80px] flex border-[2px] border-[#4640DE] w-[92px] h-[34px] items-center justify-center text-center">
              <h1 className="font-[600] text-[14px] leading-[22px] text-[#4640DE] ">
                {" "}
                {props.sector2}
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* apply section */}

      <div className="flex flex-col">
        <div>
          <button className="w-[164px]   h-[50px] bg-[#4640DE] flex text-center items-center justify-center font-[700] text-[16px] leading-[25px] text-[#FFFFFF]">
            Apply
          </button>
        </div>

        {/* percentage bar */}
        <div className="w-[164px] h-[6px] rounded-[10px] bg-[#D6DDEB] mt-[1rem]">
          <div
            className="h-[6px] bg-[#56CDAD]"
            style={{ width: `${appliedPercentage}%` }}
          ></div>
        </div>

        {/* applied and capacity */}
        <div className="flex gap-2 items-center justify-center mt-[1rem]">
          <h1 className="text-[#000000] text-[14px] leading-[22px] font-[600]">
            {props.applied} applied
          </h1>
          <h1 className="text-[#7C8493] text-[14px] leading-[22px] font-[400]">
            to {props.capacity} capacity
          </h1>
        </div>
      </div>
    </section>
  );
};

export default FindJobCard;
