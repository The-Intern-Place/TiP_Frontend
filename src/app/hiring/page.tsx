import HiringCategory from "@/partials/companies-hiring/hiringCategory";
import HiringHero from "@/partials/companies-hiring/hiringHero";
import HiringRecommend from "@/partials/companies-hiring/hiringRecommend";
import HiringResult from "@/partials/companies-hiring/hiringResult";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "The Intern Place | Hiring Comapny",
  description: "The Intern Place",
};

const page = () => {
  return (
    <div className="overflow-x-hidden relative">
      <HiringHero />
      <HiringRecommend />
      <HiringCategory />
      <HiringResult />
    </div>
  );
};

export default page;
