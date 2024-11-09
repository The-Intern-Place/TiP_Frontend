import Button from "@/components/button/Button";
import React from "react";
import Image from "next/image";
import { FindJobDescriptionTitleChunkProps } from "./FindJobDescriptionTitle.types";

const FindJobDescriptionTitleChunk = (
  props: FindJobDescriptionTitleChunkProps,
) => {
  return (
    <div className="p-6">
      <div className="bg-[#F8F8FD] rounded-sm p-4 my-4">
        <div className="bg-white p-4 rounded-sm">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div className="">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="">
                  <Image src={props.img} alt={props.title} />
                </div>
                <div className="">
                  <h1 className="text-[24px] font-[600]">{props.title}</h1>
                  <div className="flex flex-wrap items-center space-x-2 my-2 text-sm">
                    <p className="text-[#7C8493] font-epilogue">
                      {props.company}
                    </p>

                    <div className="w-[4px] h-[4px] bg-[#7C8493] md:mx-1"></div>

                    <p className="text-[#7C8493] font-epilogue">
                      {props.location}
                    </p>
                    <div className="w-[4px] h-[4px] bg-[#7C8493] md:mx-1"></div>
                    <p className="text-[#7C8493] font-epilogue">{props.type}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <Button overrideStyles="w-fit bg-[#0046BF] rounded-sm px-8 py-2 text-[#FFFFFF]">
                Apply
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindJobDescriptionTitleChunk;
