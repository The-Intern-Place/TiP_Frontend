import React from "react";
import IC_ArrowRight from "public/icons/IC_ArrowRight";
import { CategoryCardProps } from "./CategoryCard.types";

const CategoryCard = (props: CategoryCardProps) => {
  return (
    <div className="w-full group flex md:block gap-4 items-center hover:bg-light-blue hover:text-white border border-[#DAD2B8]
     bg-white md:rounded-xl max-w-[280px] min-w-full md:px-8 md:py-12 px-6 py-4 space-y-3">
      {props.icon}
      <div className="w-full">
        <p className="text-2xl font-semibold">{props.children}</p>
        <p className="flex gap-2 justify-between md:justify-start items-center text-grey opacity-60 group-hover:text-white group-hover:opacity-100">
          {props.openPositions} Positions open{" "}
          <IC_ArrowRight className="group-hover:fill-white" />
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
