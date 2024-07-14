import AdvertiseBenefitCard from "@/components/cards/advertisebenefit-card/AdvertiseBenefitCard";
import { AdvertiseBenefitCardProps } from "@/components/cards/advertisebenefit-card/AdvertiseBeneiftCard.types";
import { benefitdata } from "@/utils/data/adveertise";

import React from "react";

const AdvertiseBenefit = () => {
  return (
    <section className="flex flex-col md:items-center items-center justify-center top-[92px] mt-[0.5rem] md:mt-[4rem] w-[100%]">
      {/* heading */}
      <div
        className="flex relative md:items-center md:justify-center items-center
         mt-[3rem]  mb-[1rem]  md:my-[2rem]"
      >
        <h1
          className="font-[600] text-[#1B1B1B] md:text-[32px] md:leading-[38px] 
text-[20px] leading-[38px] font-clash w-[298px]  "
        >
          Benefits of Advertising
        </h1>
      </div>

      {/* mapping through with data */}
      <div
        className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 
        gap-[10px] max-w-[1292px] w-[93%] md:items-center justify-center space-y-[0.6rem]"
      >
        {benefitdata.map((a: AdvertiseBenefitCardProps, i: number) => (
          <AdvertiseBenefitCard
            key={i}
            description={a.description}
            title={a.title}
            image={a.image}
          />
        ))}
      </div>
    </section>
  );
};

export default AdvertiseBenefit;
