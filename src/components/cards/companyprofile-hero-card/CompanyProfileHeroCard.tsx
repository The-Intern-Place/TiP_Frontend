import React from "react";
import { CompanyProfileHeroCardProps } from "./CompanyProfileHeroCard.type";
import Image from "next/image";

const CompanyProfileHeroCard = (props: CompanyProfileHeroCardProps) => {
  return (
    <section key={props.id} className="flex flex-row gap-[16px] ">
      <div className="w-[44px] h-[44px] rounded-[50%]  bg-[#FFFFFF] flex items-center justify-center">
        <Image src={props.img} alt="hero_pics" className="w-[24px] h-[24px]" />
      </div>

      <div>
        <h1 className="text-[#515B6F] text-[16px] leading-[25px] font-[400]  font epilogue">
          {props.title}
        </h1>
        <p className="text-[#25324B] text-[16px] leading-[25px] font-[600] font epilogue ">
          {props.text}
        </p>
      </div>
    </section>
  );
};

export default CompanyProfileHeroCard;
