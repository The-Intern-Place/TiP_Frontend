// JobDescriptionModalCard.tsx
import React from "react";
import Image from "next/image";
import { JobDescriptionModalCardProps } from "./JobDescriptionModalcard.type";

const JobDescriptionModalCard = ({
  img,
  title,
  company,
  location,
  duration,
}: JobDescriptionModalCardProps) => {
  return (
    <section className="flex flex-col bg-red-500 max-w-[500px] max-h-[1726px] w-full h-full p-4">
      <Image
        src={img}
        alt="job image"
        width={68}
        height={68}
        className="w-[68px] h-[68px]"
      />
      <h1 className="text-white">{title}</h1>
      <p>{company}</p>
      <p>{location}</p>
      <p>{duration}</p>
    </section>
  );
};

export default JobDescriptionModalCard;
