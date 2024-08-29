import React from "react";
import { ExperienceProfileCardProps } from "./ExperienceProfileCard.type";
import Image from "next/image";
import editicon from "public/images/edit_Icon.svg";

const ExperienceProfileCard = (props: ExperienceProfileCardProps) => {
  return (
    <section className="flex  flex-col max-w-full w-full gap-[24px] p-[24px]  ">
      {props.title === "Growth Marketing Designer" && (
        <hr className="w-full border-t-[1px] border-[#D6DDEB] mb-[16px]" />
      )}

      <div className="flex gap-[24px]">
        <div className="w-[80px] h-[80px] rounded-[100px]">
          <Image
            src={props.img}
            alt="experience_image"
            className="w-[80px] h-[80px]"
          />
        </div>

        <div className="flex flex-col gap-[11px]">
          <div className="flex justify-between gap-[6px]">
            <div>
              <h1 className="font-epilogue font-[600] text-[18px] leading-[34px] text-[#25324B]">
                {props.title}
              </h1>
              <div className="flex gap-[3px] items-center justify-center">
                <h2 className="font-epilogue font-[600] text-[16px] leading-[25px] text-[#25324B]">
                  {props.subtitle}
                </h2>
                <p className="font-epilogue font-[400] text-[16px] leading-[30px] text-[#515B6F]">
                  . {props.date}
                </p>{" "}
              </div>
              <p className="font-epilogue font-[600] text-[16px] leading-[30px] text-[#7C8493]">
                {props.condition}
              </p>
            </div>

            <div className="w-[40px] h-[40px] border-[1px] border-[#D6DDEB flex items-center justify-center">
              <Image
                src={editicon}
                alt="experience_image"
                className="w-[20px] h-[20px]"
              />
            </div>
          </div>

          <div>
            <p className="font-epilogue font-[400] text-[16px] leading-[30px]">
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceProfileCard;
