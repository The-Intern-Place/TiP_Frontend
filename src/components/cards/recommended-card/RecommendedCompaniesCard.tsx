import Image from "next/image";
import React from "react";
import { RecommendedCompaniesCardProps } from "./RecommendedCompaniesCard.types";

const RecommendedCompaniesCard = (props: RecommendedCompaniesCardProps) => {
  return (
    <section className="">
      <div className="md:w-[360px] lg:w-full h-[364px] w-full border-2 border-[#D6DDEB]   p-[1rem] items-start justify-center flex flex-col mt-[2rem]">
        <div className="flex justify-between w-[100%]">
          <Image
            src={props.img}
            alt="recommended_Pics"
            className="w-[68px] h-79px]"
          />
          <button className="w-[76px] h-[33px] bg-[#F8F8FD]  font-[400] text-[16px] leading-[25px] text-[#1976D2]">
            3 Jobs
          </button>
        </div>
        <h1 className="pt-[1rem] text-[#25324B] font-[600] leading-[40px]">
          {props.title}
        </h1>
        <p className=" text-[18px] font-[400] leading-[32px] text-[#515B6F] pt-[1rem]">
          {props.description}
        </p>

        <div className="flex flex-col md:flex-row pt-[1rem] gap-2">
          <button className="w-[140px] h-[34px] border-2 border-[#FFB836] flex-wrap rounded-[80px] text-[14px] font-[600] leading-[22px] text-[#FFB836]">
            {props.trackOne}
          </button>

          {props.trackTwo && (
            <button className="w-[140px] h-[34px] b bg-[#FF65501A]  rounded-[80px] text-[14px] font-[600] leading-[22px] text-[#FF6550]">
              {props.trackTwo}
            </button>
          )}

          {props.trackThree && (
            <button
              className="w-[140px] h-[34px] border-1  bg-[#4640DE1A] rounded-[80px] text-[14px]
     font-[600] leading-[22px] text-[#1976D2]"
            >
              {props.trackThree}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default RecommendedCompaniesCard;
