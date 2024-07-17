import React from "react";

import { FounderOfferData } from "@/utils/data/founders";
import { FoundersOfferCardProps } from "@/components/cards/founders-offer-card/FoundersOfferCard.type";
import FoundersOfferCard from "@/components/cards/founders-offer-card/FoundersOfferCard";

const FoundersOfferTemplateChunk = () => {
  return (
    <section className="flex flex-col items-center lg:my-[5rem] mt-[4rem] md:mt-auto md:my-[3rem]">
      {/*What we offer */}
      <div className="flex flex-col items-center lg:my-[5rem] mt-[4rem] md:mt-auto md:my-[3rem]">
        {/* Heading */}
        <div className="gap-[10px] py-[3rem]">
          <h1 className="font-clash font-[600] text-[32px] leading-[38px] text-[#1B1B1B]">
            What We Offer
          </h1>
        </div>

        {/* mapping through */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[30px]  ">
          {FounderOfferData.map((o: FoundersOfferCardProps, i: number) => (
            <FoundersOfferCard
              key={i}
              img={o.img}
              secondimg={o.secondimg}
              thirdimg={o.thirdimg}
              fourthimg={o.fourthimg}
              title={o.title}
              description={o.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersOfferTemplateChunk;
