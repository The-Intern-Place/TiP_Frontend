import HiringCard from "@/components/cards/hiring-card/recommended-card/hiringCard";
import { HiringCardProps } from "@/components/cards/hiring-card/recommended-card/hiringCard.type";
import { recommendedData } from "@/utilities/data/hiring";
import React from "react";

const HiringRecommend = () => {
  return (
    <section className="bg-[#ffffff] md:p-[2rem] p-2">
      <div className="flex flex-col  mx-auto ">
        {/* heading text */}
        <div className="flex flex-col">
          <h1 className="text-grey text-[32px] font-[600]  leading-[38px]">
            Recommended Companies
          </h1>
          <p className="text-[#1B1B1B99]  text-[16px] font-[400] leading-[25px]  pt-2">
            Based on your profile, company preferences, and recent activity
          </p>
        </div>

        {/* body */}
        <div className="flex  flex-col md:flex-row flex-wrap items-center justify-center   gap-2  lg:justify-between w-[100%]">
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
