import Navbar from "@/components/navbar/Navbar";
import React from "react";
import HiringHero from "./hiringHero";
import HiringRecommend from "./hiringRecommend";
import HiringCategory from "./hiringCategory";
import HiringResult from "./hiringResult";

const HiringLayout = () => {
  return (
    <section>
      <div className="overflow-x-hidden">
        <HiringHero />
        <HiringRecommend />
        <HiringCategory />
        <HiringResult />
      </div>
    </section>
  );
};

export default HiringLayout;
