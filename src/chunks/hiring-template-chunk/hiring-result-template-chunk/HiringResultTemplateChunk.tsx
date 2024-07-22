import { HiringResultProps } from "@/components/cards/result-card/HiringResultCard.types";
import { resultdata } from "@/utils/data/hiring";
import Image from "next/image";
import React from "react";
import HiringResultCard from "@/components/cards/result-card/HiringResultCard";

const HiringResultTemplateChunk = () => {
  return (
    <section className="bg-[#F8F8FD]">
      <div className="flex flex-col items-center max-w-[1350px] w-full h-full mx-auto px-6 md:px-10 lg:px-16 xl:px-0 pt-1">
        <div className="flex flex-col items-center max-w-[1350px]  w-full h-full mx-auto px-6 md:px-10 lg:px-16 xl:px-0 pt-1">
          <div className="flex flex-col items-center max-w-[1350px] w-full h-full mx-auto px-6 md:px-10 lg:px-16 xl:px-0 pt-1">
            {/* heading text */}
            <div className="flex gap-2 items-start w-full h-full  pt-[2rem]">
              <div className="flex w-[56px] h-[56px] rounded-full bg-[#ffffff] justify-center items-center">
                <Image
                  src={"/images/sword2.svg"}
                  alt="heading_logo"
                  className="w-[24px] h-[24px]"
                  width={50}
                  height={50}
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
              <Image
                src={"/images/r_arrow.svg"}
                alt="right_arrow"
                className="w-[24px] h-[24px]"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringResultTemplateChunk;
