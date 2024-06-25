import HiringCategory from "@/partials/companieshiring/hiringCategory";
import HiringHero from "@/partials/companieshiring/hiringHero";
import HiringRecommend from "@/partials/companieshiring/hiringRecommend";
import HiringResult from "@/partials/companieshiring/hiringResult";
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
