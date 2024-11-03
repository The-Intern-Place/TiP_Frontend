import React from "react";
import { JobDescriptionCardProps } from "./JobDescriptionCard.types";
import { IC_Share } from "@assets/icons/IC_Share";
import { Logo } from "@assets/icons/Logo";

const JobDescriptionCard = (props: JobDescriptionCardProps) => {
  return (
    <section
      className="flex flex-col md:flex-row justify-between p-[24px] ml-4 items-start
            border-[1px] border-[#D6DDEB]  lg:h-[99px] md:h-[180px] w-[90%] sm:w-[100%]  my-[0.5rem]"
    >
      <div className="flex  flex-col md:flex-row gap-[15px]  md:gap-[24px] w-[356px] h-[101px] -ml-4">
        {/* <Image src={<IC_Share/>} alt="jobs_image" className="w-[68px] h-[68px]" /> */}
        <Logo />

        <div className="flex flex-col gap-[8px]  lg:max-w-[288px]">
          <h1 className="text-2xl font-epilogue text-[#002360] font-bold leading-[24px]">
            {props.title}
          </h1>

          {/* company and location */}
          <div className="flex items-center sm:gap-[8px] gap-[1px] md:gap-[1px] sm:px-2">
            <p className="text-[16px] text-[#7C8493] font-epilogue font-[400] leading-[25px] whitespace-nowrap">
              {props.company}
            </p>

            <div className="w-[4px] h-[4px] min-w-[4px] min-h-[4px] bg-[#7C8493] mx-2 md:mx-1"></div>

            <p className="text-[16px] text-[#7C8493] font-epilogue font-[400] leading-[25px] whitespace-nowrap">
              {props.location}
            </p>

            <div className="w-[4px] h-[4px] min-w-[4px] min-h-[4px] bg-[#7C8493] mx-2 md:mx-1"></div>

            <div className="flex items-center gap-[8px]">
              <div className="rounded-[80px] flex items-center text-center">
                <h1 className="font-[400] font-epilogue text-[16px] leading-[22px] text-[#7C8493] whitespace-nowrap">
                  {props.duration}
                </h1>
              </div>
            </div>
            <div className="flex sm:ml-[51rem] -mt-[9rem] -ml-[3rem] lg:ml-[30rem] md:mr-6 sm:-mt-9 flex-row cursor-pointer">
              <IC_Share />
              <div className="h-[34px] w-[1px] bg-[#D6DDEB] ml-2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* apply section */}

      <div className="flex flex-col w-[20rem] -ml-4 md:w-[120px]">
        <div className="mt-[2rem] sm:mt-0">
          <div className="flex items-center">
            <button className="w-full h-[50px] bg-[#0046BF] flex text-center items-center justify-center ml-4 font-[700] text-[16px] leading-[25px] text-[#FFFFFF]">
              Apply
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDescriptionCard;
