import type { Metadata } from "next";
import FindJobsHeroTemplateChunk from "@/chunks/find-jobs-template-chunk/find-jobs-hero-section-chunk/FindJobsHeroTemplateChunk";
import FindAllJobsTemplateChunk from "@/chunks/find-jobs-template-chunk/find-all-jobs-template-chunk/FindAllJobsTemplateChunk";

export const metadata: Metadata = {
  title: "The Intern Place | Find Job",
  description: "The Intern Place",
};
const page = () => {
  return (
    <div className="">
      <FindJobsHeroTemplateChunk />
      <div className="bg-white w-[95%] max-w-[1350px] mx-auto">
        <FindAllJobsTemplateChunk />
      </div>
    </div>
  );
};

export default page;
