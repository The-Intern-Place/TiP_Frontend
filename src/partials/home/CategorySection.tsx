import CategoryCard from "@/components/cards/category-card/CategoryCard";
import IC_ArrowRight from "public/icons/IC_ArrowRight";
import IC_Design from "public/icons/IC_Design";
import { IC_Finance } from "public/icons/IC_Finance";
import IC_Manager from "public/icons/IC_Manager";
import IC_Marketing from "public/icons/IC_Marketing";
import React from "react";

const CategorySection = () => {
  const categories = [
    {
      icon: <IC_Manager className="group-hover:stroke-white" />,
      openPositions: 75,
      title: "Manager",
    },
    {
      icon: (
        <IC_Marketing className="group-hover:stroke-white group-hover:fill-white" />
      ),
      openPositions: 75,
      title: "Marketing",
    },
    {
      icon: <IC_Finance className="group-hover:stroke-white" />,
      openPositions: 75,
      title: "Finance",
    },
    {
      icon: (
        <IC_Design className="group-hover:stroke-white group-hover:fill-white" />
      ),
      openPositions: 75,
      title: "Design",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-full max-w-[1350px] mx-auto px-6 md:px-10 lg:px-16 xl:px-0">
      <div className="mt-14 w-full space-y-4">
        <h1 className="md:text-5xl text-[32px] font-semibold leading-10">
          Search by <span className="text-[#1976D2]">Category</span>{" "}
        </h1>
        <div className="flex justify-between items-center">
          <p className="text-[#1B1B1B] text-base opacity-60 md:flex hidden">
            Search your career opportunity with categories
          </p>
          <p className="flex gap-2 items-center text-blue md:flex hidden">
            Show all <IC_ArrowRight />{" "}
          </p>
        </div>
        <div className="flex flex-wrap md:grid grid-flow-row lg:grid-cols-4 md:grid-cols-2 gap-4 w-full">
          {categories.map((c, i) => (
            <CategoryCard key={i} openPositions={c.openPositions} icon={c.icon}>
              {c.title}
            </CategoryCard>
          ))}
        </div>
        <p className="flex gap-2 items-center justify-end text-blue flex md:hidden">
          Show all <IC_ArrowRight />{" "}
        </p>
      </div>
    </div>
  );
};

export default CategorySection;
