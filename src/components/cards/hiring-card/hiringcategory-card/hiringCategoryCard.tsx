import React from "react";
import { HiringCategoryCardProps } from "./hiringCategoryCard.types";

const HiringCategoryCard = (props: HiringCategoryCardProps) => {
  return (
    <section>
      <div
        className="flex justify-center md:items-start items-center flex-col 
        w-[274px]  relative h-[184px]   group-hover:stroke-white group-hover:fill-white
     hover:bg-light-blue hover:text-white  px-1
     border-2 border-[#D6DDEB]  mt-[2rem] p-2 md:px-[2rem]"
      >
        <div className="group-hover:stroke-white group-hover:fill-white stroke-white group">
          <p>{props.icon}</p>
        </div>

        <h1 className="pt-[2rem]  text-[24px] font-[600] leading-[40px]">
          {props.title}
        </h1>
      </div>
    </section>
  );
};

export default HiringCategoryCard;
