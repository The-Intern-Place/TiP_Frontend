import HeroSectionTemplateChunk from "@/chunks/home-template-chunk/hero-section-template-chunk/HeroSectionTemplateChunk";
import JobCategoryTemplateChunk from "@/chunks/home-template-chunk/job-category-template-chunk/JobCategoryTemplateChunk";
import JobOpeningTemplateChunk from "@/chunks/home-template-chunk/job-opening-template-chunk/JobOpeningTemplateChunk";
import TalentSectionTemplateChunk from "@/chunks/home-template-chunk/talent-section-template-chunk/TalentSectionTemplateChunk";
import Navbar from "@/components/navbar/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Intern Place",
  description: "The Intern Place",
};

export default function Home() {
  return (
    <div>
      <section className="bg-[#B5CAEC] pb-10">
        <Navbar />
        <HeroSectionTemplateChunk />
      </section>
      <div>
        <JobCategoryTemplateChunk />
        <TalentSectionTemplateChunk />
        <JobOpeningTemplateChunk />
      </div>
    </div>
  );
}
