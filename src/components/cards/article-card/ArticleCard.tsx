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
    <div
      className={`border border-[#DAD2B8] rounded-lg lg:min-w-[376px] ${cardType === "tiles" ? "" : "flex justify-between items-center"} h-full w-full py-3 px-4 lg:p-6`}
    >
      <div>
        <h2 className="text-[20px] mb-2 text-blue font-semibold">{title}</h2>
        {cardType === "tiles" && <p>{description}</p>}
        <div className="flex gap-4 py-3">
          <div className="flex gap-1 items-center">
            <Image src={EyeIcon} width={20} height={20} alt="eye" />
            <p>{views} Views</p>
          </div>
          <div className="flex gap-1 items-center">
            <Image src={Calendar} width={20} height={20} alt="calendar" />
            <p>{date}</p>
          </div>
        </div>
      </div>
        <Button fit overrideStyles="ml-auto" variant="outlined">
          Read More 
        </Button>
 
    </div>
  );
};

export default ArticleCard;
