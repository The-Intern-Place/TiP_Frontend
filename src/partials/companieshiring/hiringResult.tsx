import { HiringResultProps } from "@/components/cards/result-card/HiringResultCard.types";
import { resultdata } from "@/utilities/data/hiring";
import Image from "next/image";
import React from "react";

import design2 from "public/sword2.svg";
import rarrow from "public/r_arrow.svg";
import HiringResultCard from "@/components/cards/result-card/HiringResultCard";

const HiringResult = () => {
  return (
    <section className="bg-[#F8F8FD] md:p-[2rem] p-2">
      <div className="flex flex-col items-center max-w-[1350px] xl:px-0 w-full h-full mx-auto">
        {/* heading text */}
        <div className="flex gap-2 items-start w-full h-full  pt-[2rem]">
          <div className="flex w-[56px] h-[56px] rounded-full bg-[#ffffff] justify-center items-center">
            <Image
              src={design2}
              alt="heading_logo"
              className="w-[24px] h-[24px]"
            />
          </div>
          <div>
            <h1 className="text-grey text-[24px] font-[600] leading-[40px]">
              24 Results
            </h1>
          </div>
        </div>

        {/* body */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-[1350px] w-full gap-3 mt-4">
          {resultdata.map((h: HiringResultProps, i: number) => (
            <HiringResultCard
              key={i}
              img={h.img}
              title={h.title}
              jobs={h.jobs}
            />
          ))}
        </div>

        {/* text */}
        <div className="flex  gap-2 p-1 my-[1rem] items-start w-full h-full">
          <h1 className="text-[16px] font-[600] leading-[25px] text-[#1976D2]">
            View more Design companies
          </h1>
          <Image src={rarrow} alt="right_arrow" className="w-[24px] h-[24px]" />
        </div>
      </div>
    </section>
  );
};

export default HiringResult;
