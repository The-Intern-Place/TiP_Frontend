import React from "react";

import Image from "next/image";
import editicon from "public/images/edit_Icon.svg";
import { EducationProfileCardProps } from "./EducationProfileCard.type";

const EducationProfileCard = (props: EducationProfileCardProps) => {
  return (
    <section className="flex flex-col   max-w-full w-full gap-[24px] p-[24px]   ">
      {/* Conditionally render the full-width line */}
      {props.title === "University of Toronto" && (
        <hr className="w-full border-t-[1px] border-[#D6DDEB] mb-[16px]" />
      )}

      <div className="flex gap-[24px]">
        <div className="w-[80px] h-[80px] rounded-[100px]">
          <Image
            src={props.img}
            alt="experience_image"
            className="w-[80pzx] h-[80px] "
          />
        </div>

        <div className="flex flex-col gap-[11px] max-w-[572px] w-full">
          <div className="flex justify-between gap-[6px] max-w-full">
            <div>
              <h1 className="font-epilogue font-[600] text-[18px] leading-[34px] text-[#25324B]">
                {props.title}
              </h1>
              <h2 className="font-epilogue font-[400] text-[16px] leading-[30px] text-[#515B6F]">
                {props.subtitle}
              </h2>
              <p className="font-epilogue font-[400] text-[16px] leading-[30px] text-[#515B6F]">
                {props.date}
              </p>
            </div>

            <div className="w-[40px] h-[40px] border-[1px] border-[#D6DDEB] flex items-center justify-center">
              <Image
                src={editicon}
                alt="experience_image"
                className="w-[20px] h-[20px]"
              />
            </div>
          </div>

          <div className="">
            {props.description && (
              <p className="font-epilogue font-[400] text-[16px] leading-[30px]">
                {props.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationProfileCard;
