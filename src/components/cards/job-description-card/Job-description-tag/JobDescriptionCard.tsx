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
      className="flex flex-col md:flex-row justify-between md:p-[24px]  py-[4rem] md:py-0 items-start  md:items-center md:bg-white  mx-auto
            md:border-[1px] md:border-[#D6DDEB]  lg:h-[128px] md:h-[180px] h-full sm:w-[100%]  my-[0.5rem] lg:max-w-[1187px]  max-w-[327px] w-full md:max-w-[730px]"
    >
      {isModal && (
        <div className="bg-black opacity-[50%] fixed z-[50] inset-0"></div>
      )}

      <div className="flex  flex-col md:flex-row gap-[15px]  md:gap-[24px]  h-[101px]  items-center">
        {/* <Image src={<IC_Share/>} alt="jobs_image" className="w-[68px] h-[68px]" /> */}

        <h1 className="md:hidden block">
          .../ Urban Tech / Social Media Assistant
        </h1>

        <div className="flex items-center justify-between w-full">
          <div className="w-[60px] h-[60px]">
            <Logo />
          </div>

          <div className="md:hidden flex items-center cursor-pointer">
            <IC_Share />
            <div className="h-[50px] w-[1px] bg-[#D6DDEB] ml-2  hidden md:block"></div>
          </div>
        </div>

        <div className="flex flex-col gap-[8px]  lg:max-w-[288px]">
          <h1 className="md:text-2xl text-[32px] leading-[38px] font-epilogue text-[#002360] font-[600] md:leading-[24px] w-[300px]">
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

      <div className="flex md:flex-row flex-col items-center justify-center ">
        <div className="hidden md:flex items-center  cursor-pointer">
          <IC_Share />
          <div className="h-[50px] w-[1px] bg-[#D6DDEB] ml-2  hidden md:block"></div>
        </div>

        <div
          className="flex items-center w-full mt-[8.5rem] md:mt-0 "
          onClick={handleOpenModal}
        >
          <Button
            overrideStyles="md:w-[167px] w-[335px] h-[57px] bg-[#0046BF] rounded-[0px] flex text-center items-center justify-center ml-0 md:ml-4 font-[700] 
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
