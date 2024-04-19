import React from "react";;
import IC_ArrowRight from "public/icons/IC_ArrowRight";
import { CategoryCardProps } from "./CategoryCard.types";

const CategoryCard = (props: CategoryCardProps) => {
  return (
    <div className="w-full group hover:bg-light-blue hover:text-white border border-[#DAD2B8] bg-white rounded-xl max-w-[280px] min-w-full px-8 py-12 space-y-3">
      {props.icon}
      <p className="text-2xl font-semibold">{props.children}</p>
      <p className="flex gap-2 items-center text-grey opacity-60 group-hover:text-white group-hover:opacity-100">
        {props.openPositions} Positions open <IC_ArrowRight className="group-hover:fill-white" />
      </p>
    </div>
  );
};

export default CategoryCard;
