import React from "react";
import useCompanyDashboardTemplateChunk from "./useCompanyDashboardTemplateChunk";
import Image from "next/image";
import CompanyStatisticsChunk from "@/chunks/company-statistics-chunk/CompanyStatisticsChunk";
import ApplicantsSummary from "@/chunks/applicant-summary/ApplicantsSummary";

const CompanyDashboardTemplateChunk = () => {
  const { stats } = useCompanyDashboardTemplateChunk();
  return (
    <div className="py-5">
      <div>
        <h2 className="text-2xl font-bold leading-[28.8px] text-grey">
          Good morning Nomad
        </h2>
        <p className="text-grey opacity-60">
          Here is your job listings statistics report from July 19 - July 25
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 my-6">
        {stats.map((d, key) => (
          <div
            key={key}
            className="bg-white w-full flex justify-between  h-[120px] drop-shadow-[0_0px_2px_#00000040] p-5 rounded-[10px]"
          >
            <span className="bg-[#E0E9F7] h-fit rounded p-[10px]">
              <Image src={d.image as string} alt={d.name} />
            </span>
            <div>
              <h3 className="text-[20px] font-medium text-grey opacity-80">
                {d.name}
              </h3>
              <h5 className="text-grey text-[45px] text-right font-bold">
                {d.id}
              </h5>
            </div>
          </div>
        ))}
      </div>
      <div className="">
        <CompanyStatisticsChunk />
        <ApplicantsSummary />
      </div>
    </div>
  );
};

export default CompanyDashboardTemplateChunk;
