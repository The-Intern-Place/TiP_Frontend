import React from "react";
import { AdvertiseBenefitCardProps } from "./AdvertiseBenefitCard.types";
import Image from "next/image";

const AdvertiseBenefitCard = (props: AdvertiseBenefitCardProps) => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="bg-[#F9FDFF] p-[2rem] rounded-[8px] h-full flex flex-col items-start justify-center">
        <div className="w-[40px] h-[40px] bg-[#ECF2FE] flex items-center justify-center">
          <Image
            src={props.image}
            alt="benefit_pics"
            className="w-[24px] h-[24px] "
          />
        </div>

        <h1 className="font-[600] text-[#1B1B1B] text-[20px] leading-[24px] font-clash py-1 pt-[1.5rem]">
          {props.title}
        </h1>
        <p className="font-[400] text-[#515B6F] text-[16px] leading-[25px] w-[100%] font-epilogue pt-[0.4rem]">
          {props.description}
        </p>
      </div>
    </section>
  );
};

export default AdvertiseBenefitCard;
