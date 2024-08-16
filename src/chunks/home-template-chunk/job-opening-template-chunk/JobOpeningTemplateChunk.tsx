import JobCard from "@/components/cards/job-card/JobCard";
import { JobCardProps } from "@/components/cards/job-card/JobCard.types";
import { jobs } from "@/utils/data/jobs";
import IC_ArrowRight from "@assets/icons/IC_ArrowRight";
import React from "react";

type IJobOpeningTemplateChunkProps = {
  title?: string;
  styleSubtitle?: string;
};

const JobOpeningTemplateChunk = (props: IJobOpeningTemplateChunkProps) => {
  return (
    <div className="w-full job-opening">
      <div className="flex justify-between items-center w-full h-full max-w-[1350px] mx-auto px-6 md:px-10 lg:px-16 xl:px-0 ">
        <div className="my-20 w-full">
          <div className="flex justify-between">
            <h1 className="md:text-5xl text-[32px] font-semibold">
              {props.title ?? "Latest"}{" "}
              <span className="text-[#1976D2]">{props.styleSubtitle}</span>
            </h1>
            <p className="flex gap-2 items-center text-blue md:flex hidden">
              Show all <IC_ArrowRight />{" "}
            </p>
          </div>
          <div className="flex flex-wrap md:grid grid-flow-col grid-cols-2 grid-rows-3 gap-7">
            {jobs.map((j: JobCardProps, i: number) => (
              <JobCard
                key={i}
                image={j.image}
                title={j.title}
                company={j.company}
                location={j.location}
                duration={j.duration}
                sector={j.sector}
              />
            ))}
          </div>
          <p className="flex gap-2 items-center justify-end text-blue md:hidden">
            Show all <IC_ArrowRight />{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobOpeningTemplateChunk;
