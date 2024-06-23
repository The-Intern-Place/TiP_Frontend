import Navbar from "@/components/navbar/Navbar";
import React from "react";
import HiringHero from "./HiringHero";
import HiringRecommend from "./HiringRecommend";
import HiringCategory from "./HiringCategory";
import HiringResult from "./HiringResult";



const HiringLayout = () => {
  return (
    <section>
      <div className="overflow-x-hidden relative">
        <HiringHero />
        <HiringRecommend/>
        <HiringCategory />
        <HiringResult />

      </div>
    </section>
  );
};

export default HiringLayout;
