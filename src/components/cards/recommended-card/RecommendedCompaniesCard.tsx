import Image from "next/image";
import React from "react";
import { RecommendedCompaniesCardProps } from "./RecommendedCompaniesCard.types";

const RecommendedCompaniesCard = (props: RecommendedCompaniesCardProps) => {
  return (
    <section className="">
      <div className="w-full h-full border border-[#D6DDEB] p-[1rem] items-start justify-center flex flex-col space-y-3">
        <div className="flex justify-between w-[100%]">
          <Image
            src={props.img}
            alt="recommended_Pics"
            className="w-[68px] h-[79px]"
            width={200}
            height={200}
          />
          <button className="w-[76px] h-[33px] bg-[#F8F8FD]  font-[400] text-[16px] leading-[25px] text-[#1976D2]">
            3 Jobs
          </button>
        </div>
        <h1 className="text-[#25324B] font-clash font-[600] text-[24px] leading-[40px]">
          {props.title}
        </h1>
        <p className=" text-[18px] font-[400] font-epilogue leading-[32px] text-[#515B6F]">
          {props.description}
        </p>

        <div className="flex flex-col md:flex-row gap-2 flex-wrap">
          {props.tracks.map((track, key) => (
            <button
              key={key}
              className={`w-[140px] h-[34px] ${track.style} rounded-[80px] text-[14px] font-[600] leading-[22px]`}
            >
              {track.track}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedCompaniesCard;
