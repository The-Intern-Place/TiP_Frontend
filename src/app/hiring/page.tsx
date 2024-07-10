import CompaniesCategoryChunk from "@/chunks/hiring-template-chunk/companies-category-template-chunk/CompaniesCategoryChunk";
import FindDreamCompaniesHeroTemplateChunk from "@/chunks/hiring-template-chunk/find-dream-companies-hero-template-chunk/FindDreamCompaniesHeroTemplateChunk";
import HiringResultTemplateChunk from "@/chunks/hiring-template-chunk/hiring-result-template-chunk/HiringResultTemplateChunk";
import RecommendedCompaniesTemplateChunk from "@/chunks/hiring-template-chunk/recommended-companies-template-chunk/RecommendedCompaniesTemplateChunk";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "The Intern Place | Hiring Comapny",
  description: "The Intern Place",
};

const page = () => {
  return (
    <div className="overflow-x-hidden relative">
      <FindDreamCompaniesHeroTemplateChunk />
      <RecommendedCompaniesTemplateChunk />
      <CompaniesCategoryChunk />
      <HiringResultTemplateChunk />
    </div>
  );
};

export default page;
