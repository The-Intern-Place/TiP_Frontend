import Image from "next/image";
import React from "react";
import { HiringResultProps } from "./HiringResultCard.types";

const HiringResultCard = (props: HiringResultProps) => {
  return (
    <section className="">
      <div
        className=" bg-[#FFFFFF] h-[255px] w-[100%] border border-[#D6DDEB]
      p-2 items-center justify-center flex flex-col"
      >
        <div className="flex justify-center w-[100%]">
          <Image
            src={props.img}
            alt="recommended_Pics"
            className="w-[80px] h-[80px]"
            width={50}
            height={50}
          />
        </div>
        <h1 className="pt-[1rem] text-[#1B1B1B] font-[600] text-[24px] leading-[40px]">
          {props.title}
        </h1>
        <button className="w-[76px] h-[33px] bg-[#F8F8FD]  font-[400] text-[16px] leading-[25px] mt-[1rem] text-[#1976D2]">
          {props.jobs}
        </button>
      </div>
    </section>
  );
};

export default HiringResultCard;
