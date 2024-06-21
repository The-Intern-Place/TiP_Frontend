import React from "react";
import { ArticleCardProps } from "./ArticleCard.types";
import { Calendar, EyeIcon } from "public";
import Image from "next/image";
import Button from "@/components/button/Button";

const ArticleCard = ({
  title,
  description,
  cardType = "tiles",
  views,
  date,
}: ArticleCardProps) => {
  return (
    <div className="border border-[#DAD2B8] rounded-lg min-w-[376px] w-full p-6 grid grid-flow-row gap-3">
      <h2 className="text-[20px] text-blue font-semibold">{title}</h2>
      {cardType === "tiles" && <p>{description}</p>}
      <div className="flex gap-4 py-2">
        <div className="flex gap-1 items-center">
          <Image src={EyeIcon} width={20} height={20} alt="eye" />
          <p>{views} Views</p>
        </div>
        <div className="flex gap-1 items-center">
          <Image src={Calendar} width={20} height={20} alt="calendar" />
          <p>{date}</p>
        </div>
      </div>
      <div className="px-5 py-2 border-[#DAD2B8] text-blue border w-fit ml-auto font-bold cursor-pointer">
        Read More
      </div>
    </div>
  );
};

export default ArticleCard;
