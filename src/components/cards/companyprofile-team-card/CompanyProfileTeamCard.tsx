import React from "react";
import { CompanyProfileTeamCardProps } from "./CompanyProfileTeamCard.type";
import Image from "next/image";
import grayinsta from "public/images/gray_insta.svg";
import graylinkdin from "public/images/gray_linkdin.svg";

const CompanyProfileTeamCard = (props: CompanyProfileTeamCardProps) => {
  return (
    <section
      className="w-full border border-[#D6DDEB] rounded-[1px] p-4 md:p-[18px] gap-[16px]
     flex flex-col items-center justify-center"
    >
      <Image
        src={props.img}
        alt="team_pics"
        className="w-[80px] h-[80px] rounded-[50%]"
      />
      <h1 className="font-epilogue font-[600] text-[#1B1B1B]  md:leading-[32px] text-[18px] leading-[28px] text-center">
        {props.title}
      </h1>
      <p className="font-epilogue font-[400] text-[#7C8493]  text-[16px] leading-[25px] text-center">
        {props.text}
      </p>

      <ul className="flex gap-[10px]">
        <li>
          {" "}
          <Image
            src={grayinsta}
            alt="team_pics"
            className="w-[24px] h-[24px] opacity-[50%]"
          />
        </li>
        <li>
          {" "}
          <Image
            src={graylinkdin}
            alt="team_pics"
            className="w-[24px] h-[24px] opacity-[50%]"
          />
        </li>
      </ul>
    </section>
  );
};

export default CompanyProfileTeamCard;
