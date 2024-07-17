import AdvertiseBenefitCard from "@/components/cards/advertise-benefit-card/AdvertiseBenefitCard";
import { AdvertiseBenefitCardProps } from "@/components/cards/advertise-benefit-card/AdvertiseBeneiftCard.types";
import { benefitdata } from "@/utils/data/adveertise";
import React from "react";

const AdvertiseBenefitChunk = () => {
  return (
    <section className="flex flex-col md:items-center items-center justify-center top-[92px] md:mt-[4rem]  w-[100%]">
      {/* heading */}
      <div className="flex md:items-center md:justify-center items-start justify-start">
        <h1 className="font-[600] text-[#1B1B1B] md:text-[32px] md:leading-[38px] px-4 text-[20px] leading-[38px] font-clash pb-4">
          Benefits of Advertising
        </h1>
      </div>

      {/* mapping through with data */}
      <div
        className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 px-4 lg:px-0 rounded-[6px]
        md:gap-[30px] max-w-[1292px] w-[93%] md:items-center justify-center gap-[20px] space-y-[0.6rem]"
      >
        {benefitdata.map((a: AdvertiseBenefitCardProps, i: number) => (
          <AdvertiseBenefitCard
            key={i}
            id={a.id}
            description={a.description}
            title={a.title}
            image={a.image}
          />
        ))}
      </div>
    </section>
  );
};

export default AdvertiseBenefitChunk;
