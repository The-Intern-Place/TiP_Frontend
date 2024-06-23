import React from "react";
import { HiringCategoryCardProps } from "./hiringCategoryCard.types";

const HiringCategoryCard = (props: HiringCategoryCardProps) => {
  return (
    <section>
      <div className="group flex justify-center md:items-start items-center flex-col w-[274px] relative h-[184px] hover:bg-light-blue hover:text-white px-1 border-2 border-[#D6DDEB]  mt-[2rem] p-2 md:px-[2rem]">
        <p>{props.icon}</p>

        <h1 className="pt-[2rem]  text-[24px] font-[600] leading-[40px]">
          {props.title}
        </h1>
      </div>
    </section>
  );
};

export default HiringCategoryCard;
