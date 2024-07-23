import RecommendedCompaniesCard from "@/components/cards/recommended-card/RecommendedCompaniesCard";
import { RecommendedCompaniesCardProps } from "@/components/cards/recommended-card/RecommendedCompaniesCard.types";
import { recommendedData } from "@/utils/data/hiring";
import React from "react";

const RecommendedCompaniesTemplateChunk = () => {
  return (
    <section className="bg-[#ffffff] overflow-x-hidden flex md:items-center items-start">
      <div className="flex flex-col  max-w-[1350px] w-full h-full mx-auto px-6 md:px-10 lg:px-16 xl:px-0 pt-1">
        {/* heading text */}
        <div className="flex flex-col py-3 mt-6">
          <h1 className="text-grey text-[32px] font-[600] leading-[38px]">
            Recommended Companies
          </h1>
          <p className="text-[#1B1B1B99] text-[16px] font-[400] leading-[25px] pt-1">
            Based on your profile, company preferences, and recent activity
          </p>
        </div>

        {/* body */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-full gap-[32px]">
          {recommendedData.map(
            (h: RecommendedCompaniesCardProps, i: number) => (
              <RecommendedCompaniesCard
                key={i}
                img={h.img}
                title={h.title}
                description={h.description}
                tracks={h.tracks}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default RecommendedCompaniesTemplateChunk;
