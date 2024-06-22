import HiringResultCard from "@/components/cards/hiring-card/result-card/hiringResultCard";
import { HiringResultProps } from "@/components/cards/hiring-card/result-card/hiringResultCard.types";
import { resultdata } from "@/utilities/data/hiring";
import Image from "next/image";
import React from "react";

import design2 from "public/sword2.svg";
import rarrow from "public/r_arrow.svg";

const HiringResult = () => {
  return (
    <section className="bg-[#F8F8FD]  md:p-[2rem] p-2">
      <div className="flex flex-col  ">
        {/* heading text */}
        <div className="flex  gap-2 items-center  pt-[2rem]">
          <div className="flex w-[56px] h-[56px]  rounded-[50%]  bg-[#ffffff] justify-center items-center">
            <Image
              src={design2}
              alt="heading_logo"
              className="w-[24px] h-[24px]  "
            />
          </div>

          <div>
            <h1 className="text-grey text-[24px] font-[600]  leading-[40px]">
              24 Results
            </h1>
          </div>
        </div>

        {/* body */}

        <div className="flex  flex-col md:flex-row flex-wrap  justify-between gap-3">
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
        <div className="flex items-center gap-2 p-1  my-[1rem]">
          <h1 className="text-[16px] font-[600] leading-[25px] text-[#1976D2]">
            View more Design companies
          </h1>

          <Image
            src={rarrow}
            alt="right_arrow"
            className="w-[24px] h-[24px]  "
          />
        </div>
      </div>
    </section>
  );
};

export default HiringResult;
