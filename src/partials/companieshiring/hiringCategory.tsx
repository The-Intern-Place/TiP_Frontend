import HiringCategoryCard from "@/components/cards/hiring-card/hiringcategory-card/hiringCategoryCard";
import { HiringCategoryCardProps } from "@/components/cards/hiring-card/hiringcategory-card/hiringCategoryCard.types";
import React from "react";

import Hiring_Design from "public/hiringimage/Hiring_Design";
import Fintech_Icon from "public/hiringimage/Hiring_Fintech";
import Hosting_Icon from "public/hiringimage/Hiring_Hosting";
import Business_Icon from "public/hiringimage/Hiring_Business";
import Developer_Icon from "public/hiringimage/Hiring_Developer";

import IC_Design from "public/icons/IC_Design";

const HiringCategory = () => {
  const hiringcategorydata = [
    {
      icon: (
        <Hiring_Design className="group-hover:stroke-white stroke-[#1976D2] group-hover:fill-white" />
      ),
      title: "Design",
    },

    {
      icon: (
        <Fintech_Icon className="group-hover:stroke-white group-hover:fill-white" />
      ),

      title: "Fintech",
    },

    {
      icon: (
        <Hosting_Icon className="group-hover:stroke-white  group-hover:fill-white" />
      ),
      title: "Hosting",
    },

    {
      icon: (
        <Business_Icon className="group-hover:stroke-white group-hover:fill-white " />
      ),
      title: "Business Service",
    },

    {
      icon: (
        <Developer_Icon className="group-hover:stroke-white group-hover:fill-white" />
      ),
      title: "Developer",
    },
  ];

  return (
    <section className="bg-[#F8F8FD] md:p-[2rem] mt-[5rem] p-2">
      <div className="flex flex-col">
        {/* heading text */}

        <h1 className="text-grey text-[32px] font-[600]  leading-[38px] pt-2">
          Companies by Category
        </h1>

        {/* body */}
        <div className="flex md:flex-row flex-wrap items-center md:justify-between justify-center lg:flex-nowrap flex-col w-[100%] gap-[1rem]  ">
          {hiringcategorydata.map((h, i) => (
            <HiringCategoryCard key={i} title={h.title} icon={h.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HiringCategory;
