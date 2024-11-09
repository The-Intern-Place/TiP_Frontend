"use client";
import React, { useState } from "react";
import { JobDescriptionCardProps } from "./JobDescriptionCard.types";
import { IC_Share } from "@assets/icons/IC_Share";
import { Logo } from "@assets/icons/Logo";
import Button from "@/components/button/Button";
import JobDescriptionModalChunk from "@/chunks/job-description-chunk/job-description-modal template/JobDescriptionModalChunk";

const JobDescriptionCard = (props: JobDescriptionCardProps) => {
  const [isModal, setIsModal] = useState(false);

  const handleOpenModal = () => {
    setIsModal(!isModal);
  };

  return (
    <section
      className="flex flex-col md:flex-row justify-between p-[24px] ml-4 items-start bg-white
            border-[1px] border-[#D6DDEB]  lg:h-[99px] md:h-[180px] w-[90%] sm:w-[100%]  my-[0.5rem]"
    >
      {isModal && (
        <div className="bg-black opacity-[50%] fixed z-[50] inset-0"></div>
      )}
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
          </div>
        </div>
      </div>

      {/* apply section */}

      <div className="flex items-center justify-center ">
        <div className="flex items-center  cursor-pointer">
          <IC_Share />
          <div className="h-[50px] w-[1px] bg-[#D6DDEB] ml-2"></div>
        </div>

        <div className="flex items-center" onClick={handleOpenModal}>
          <Button
            overrideStyles="w-[167px] h-[57px] bg-[#0046BF] rounded-[0px] flex text-center items-center justify-center ml-4 font-[700] 
            text-[16px] leading-[25px] text-[#FFFFFF]"
          >
            Apply
          </Button>
        </div>
      </div>

      <div
        className={`absolute inset-x-0 z-[100] top-[250px] md:mx-auto flex justify-center max-w-[650px] m-[27px] md:m-0  md:w-full
            ${isModal ? "absolute" : "hidden"}
      `}
      >
        <JobDescriptionModalChunk
          img={props.img}
          title={props.title}
          company={props.company}
          location={props.location}
          duration={props.duration}
          setIsModal={setIsModal}
        />
      </div>
    </section>
  );
};

export default JobDescriptionCard;
