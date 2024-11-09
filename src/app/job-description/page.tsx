import { Metadata } from "next";
import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Tag from "@/chunks/job-description-chunk/job-description-tag-template-chunk/tag";
import Title from "@/chunks/job-description-chunk/job-description-title-template-chunk/title";
import Responsibilities from "@/chunks/job-description-chunk/job-description-responsibilities-template-chunk/responsibilities";
import Whoyouare from "@/chunks/job-description-chunk/job-description-whoareyou-template-chunk/whoareyou";

import Categories from "@/chunks/job-description-chunk/job-description-categories-template-chunk/categories";
import Requiredskills from "@/chunks/job-description-chunk/job-description-requiredskills-template-chunk/requiredskills";
import Perksandbenefits from "@/chunks/job-description-chunk/job-description-perksandbenefits-template-chunk/perksandbenefits";

import JobOpeningTemplateChunk from "@/chunks/home-template-chunk/job-opening-template-chunk/JobOpeningTemplateChunk";
import BriefDescription from "@/chunks/job-description-chunk/job-description-brief-template-chunk/BriefDescription";
import About from "@/chunks/job-description-chunk/job-description-about-template-chunk/about";


export const metadata: Metadata = {
  title: "The Intern Place | Find Job",
  description: "The Intern Place",
};
function page() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <Tag />
      <div className="w-full h-full max-w-[1350px] mt-10 px-6 mb-6 mx-auto grid sm:grid-cols-2 gap-x-8 gap-y-16">
        <div>
          <Title />
          <div className="h-[1px] w-[100%] mb-7 bg-[#D6DDEB] ml-2"></div>
          <Responsibilities />
          <div className="h-[1px] w-[100%] mb-6 bg-[#D6DDEB] ml-2"></div>
          <Whoyouare />
          <div className="h-[1px] w-[100%] mt-6 bg-[#D6DDEB] ml-2"></div>
        </div>

        <div>
          <About
            img={""}
            title={""}
            company={""}
            location={""}
            duration={""}
            sector1={""}
            sector2={""}
            applied={""}
            capacity={""}
            id={""}             
            salaryRange={""} 
            jobLevel={""}
          />
          <div className="h-[1px] w-[100%] mb-5 bg-[#D6DDEB] ml-2"></div>
          <Categories />
          <div className="h-[1px] w-[100%] mb-5 mt-5 bg-[#D6DDEB] ml-2"></div>
          <Requiredskills />
          <div className="h-[1px] w-[100%] mt-5 bg-[#D6DDEB] ml-2"></div>
        </div>
      </div>

      <div className="px-6">
        <Perksandbenefits />
      </div>

      <div className="">
        <BriefDescription />
      </div>

      <div className="">
        <JobOpeningTemplateChunk />
      </div>
    </div>
  );
}

export default page;
