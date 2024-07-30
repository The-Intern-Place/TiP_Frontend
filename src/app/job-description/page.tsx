import { Metadata } from "next";
import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Tag from "@/chunks/job-description-chunk/job-description-tag-template-chunk/tag";
import Title from "@/chunks/job-description-chunk/job-description-title-template-chunk/title";
import Responsibilities from "@/chunks/job-description-chunk/job-description-resposibilities-template-chunk/responsibilities";
import Whoyouare from "@/chunks/job-description-chunk/job-description-whoareyou-template-chunk/whoareyou";
import About from "@/chunks/job-description-chunk/job-description-about-template-chunk/about";
import Categories from "@/chunks/job-description-chunk/job-description-categories-template-chunk/categories";
import Requiredskills from "@/chunks/job-description-chunk/job-description-requiredskills-template-chunk/requiredskills";
import Perksandbenefits from "@/chunks/job-description-chunk/job-description-perksandbenefits-template-chunk/perksandbenefits";

export const metadata: Metadata = {
  title: "The Intern Place | Find Job",
  description: "The Intern Place",
};
function page() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <Tag />
      <div className="w-full h-full max-w-[1350px] mt-10 mx-auto mb-6mx-auto grid grid-cols-2 gap-x-8 gap-y-16">
        <div>
          <Title />
          <Responsibilities />
          <Whoyouare />
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
          />
          <Categories />
          <Requiredskills />
        </div>
      </div>
      <div className="">
        <Perksandbenefits />
      </div>
    </div>
  );
}

export default page;
