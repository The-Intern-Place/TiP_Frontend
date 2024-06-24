import HiringCard from "@/components/cards/hiring-card/recommended-card/HiringCard";
import { HiringCardProps } from "@/components/cards/hiring-card/recommended-card/HiringCard.type";
import { recommendedData } from "@/utilities/data/hiring";
import React from "react";

const HiringRecommend = () => {
  return (
    <section className="bg-[#ffffff] overflow-x-hidden px-[2rem] flex justify-center items-center">
      <div
        className="flex flex-col w-full h-full max-w-[1350px] p-2 mx-0 xl:px-0
   items-start justify-left pt-[2rem]"
      >
        {/* heading text */}
        <div className="flex flex-col ">
          <h1 className="text-grey text-[32px] font-[600] leading-[38px]">
            Recommended Companies
          </h1>
          <p className="text-[#1B1B1B99] text-[16px] font-[400] leading-[25px] pt-2">
            Based on your profile, company preferences, and recent activity
          </p>
        </div>

        {/* body */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-full gap-[32px]">
          {recommendedData.map((h: HiringCardProps, i: number) => (
            <HiringCard
              key={i}
              img={h.img}
              title={h.title}
              description={h.description}
              trackOne={h.trackOne}
              trackTwo={h.trackTwo}
              trackThree={h.trackThree}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HiringRecommend;
