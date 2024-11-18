import HelpCentreCard from "@/components/cards/help-centre-card/HelpCentreCard";
import SelectInput from "@/components/inputs/select-input/SelectInput";
import React from "react";
import useHelpCentreFormTemplateChunck from "./useHelpCentreFormTemplateChunk";
import Image from "next/image";

const HelpCenterFormTemplateChunk = () => {
  const { optionsData, HelpCentre } = useHelpCentreFormTemplateChunck();
  return (
    <div className="w-full relative">
      <div className="flex flex-row gap-0 w-[253px] justify-start items-center">
        <h1 className="w-[30%] font-epilogue text-[18px] font-normal">
          Sort By:
        </h1>
        <div className="w-[75%] mt-[2px]">
          <SelectInput
            overrideStyles="border-[#D6DDEB] border-0 p-0 m-0"
            label=""
            optionsData={optionsData!.map((option: string, index: any) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
            placeholder="Most relevant"
            name=""
          />
        </div>
      </div>

      <div className="flex flex-col items-start gap-6 mb-16 ">
        {HelpCentre?.map((item, index) => (
          <HelpCentreCard
            id={item?.id}
            title={item?.title}
            paragraph={item?.paragraph}
            question={item?.question}
            key={index}
          />
        ))}
      </div>
      <div className="">
        <div className=" absolute bottom-[69px] left-[590px] hidden sm:flex  bg-blue rounded-full w-[60px] h-[60px] items-center justify-center">
          <Image
            src="https://res.cloudinary.com/dwtjcpszy/image/upload/v1731941443/message_erhlrd.svg"
            alt="message"
            width={40}
            height={40}
          />
        </div>
        <div className=" absolute right-[2px] bottom-[15px] flex sm:hidden  bg-blue rounded-full w-[45px] h-[45px] items-center justify-center">
          <Image
            src="https://res.cloudinary.com/dwtjcpszy/image/upload/v1731941443/message_erhlrd.svg"
            alt="message"
            width={30}
            height={30}
          />
        </div>
      </div>
    </div>
  );
};

export default HelpCenterFormTemplateChunk;
