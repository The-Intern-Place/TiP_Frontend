import React from "react";
import { HiringCategoryCardProps } from "./HiringCategoryCard.types";

const HiringCategoryCard = (props: HiringCategoryCardProps) => {
  return (
    <section>
      <div
        className="group flex justify-center md:items-start items-center bg-[#FDFDFE] hover:fill-white
       flex-col relative w-full h-[173px] hover:bg-light-blue hover:stroke-white
         gap-[32px]  hover:text-white px-[2rem] border-2 border-[#D6DDEB] "
      >
        <p>{props.icon}</p>
        <h1 className="text-[24px] font-clash font-[600] leading-[40px]">
          {props.title}
        </h1>
      </div>
    </section>
  );
};

export default HiringCategoryCard;
