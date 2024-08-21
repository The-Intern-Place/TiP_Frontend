import Button from "@/components/button/Button";
import { CustomerSurvey } from "@assets/images";
import Image from "next/image";
import React from "react";
import useDashboardTemplateChunk from "./useDashboardTemplateChunk";

const DashboardTemplateChunk = () => {
  const data = useDashboardTemplateChunk();

  return (
    <div className="py-5 grid grid-flow-row gap-10 w-full">
      <div>
        <h2 className="text-2xl font-bold leading-[28.8px] text-grey">
          Hello Tosin
        </h2>
        <p className="text-grey opacity-60">
          Discover exciting opportunities. Dive in!
        </p>
      </div>

      {!data.user && (
        <div className="flex max-w-[700px] mx-auto flex-col gap-5 items-center text-center">
          <Image
            className="w-[220px] h-[220px]"
            src={CustomerSurvey}
            alt="Customer Survey"
          />
          <p className="text-grey opacity-50">
            It looks like you're all set up, but your feed is empty! To receive
            tailored job recommendations, please update your profile with your
            preferences and skills. Let's make sure you find the perfect
            opportunities!
          </p>
          <Button fit>Update Profile</Button>
        </div>
      )}
      <div className="flex w-full gap-6">
        {data.stats.map((d, key) => (
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

      <div className="w-full">
        <section className="flex items-center justify-between">
          <h1 className="text-light-blue font-semibold text-2xl">
            Featured Jobs
          </h1>
          <span className="text-blue">View All</span>
        </section>

        <div className="flex gap-4">
          {data.featuredJobs.map((job, key) => (
            <div
              key={key}
              className="flex bg-white rounded-[10px] h-[100px] p-4 w-full gap-2"
            >
              <Image src={job.image as string} alt={job.name} />
              <section className="flex flex-col justify-between">
                <h2 className="text-grey font-medium text-[22px]">
                  {job.name}
                </h2>
                <p className="text-light-blue">{job.value} Vacancy</p>
              </section>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardTemplateChunk;
