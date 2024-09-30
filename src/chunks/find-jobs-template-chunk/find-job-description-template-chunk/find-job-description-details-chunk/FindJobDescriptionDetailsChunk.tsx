import React from "react";
import { FindJobDescriptionDetailsChunkProps } from "./FindJobDescriptionDetailsChunk.types";
import IC_Checked from "@assets/icons/IC_Checked";
import { useCategoryColor } from "@/utils/hooks/useSectorColor";
import Image from "next/image";
import CompanyImgSmall from "/public/images/company_small.svg";
import CompanyImgLarge from "/public/images/company_large.svg";
import IC_ArrowRight from "@assets/icons/IC_ArrowRight";
import PerkBenefit from "/public/images/perks_benefits.svg";

const FindJobDescriptionDetailsChunk = (
  props: FindJobDescriptionDetailsChunkProps,
) => {
  const appliedPercentage =
    (Number(props.applied) / Number(props.capacity)) * 100;
  const getCategoryColor = useCategoryColor;
  return (
    <div className="">
      <div className="text-[#515B6F] p-6">
        <div className="flex flex-col gap-6 md:flex-row justify-between w-full">
          <div className="flex flex-col gap-8 w-full md:w-[60%] xl:w-[70%]">
            <h2 className="text-xl font-bold">Description</h2>
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold">Responsibilities</h2>
              <ul className="flex flex-col gap-4">
                {props.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex flex-row gap-2 items-center">
                    <IC_Checked />
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold">Who you are</h2>
              <ul className="flex flex-col gap-4">
                {props.whoYouAre.map((whoYouAre, index) => (
                  <li key={index} className="flex flex-row gap-2 items-center">
                    <IC_Checked />
                    {whoYouAre}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold">Nice to have</h2>
              <ul className="flex flex-col gap-4">
                {props.niceToHaves.map((niceToHave, index) => (
                  <li key={index} className="flex flex-row gap-2 items-center">
                    <IC_Checked />
                    {niceToHave}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full md:w-[40%] xl:w-[30%]">
            <div className="">
              <h2 className="text-xl font-bold">About this role</h2>
              <div className="bg-[#F8F8FD] p-3 rounded-md my-4">
                <div className="flex items-center justify-start w-full mb-2">
                  <h1 className="text-[#000000] text-xs font-semibold">
                    {props.applied} applied
                  </h1>
                  <h1 className="text-[#7C8493] text-xs pl-1">
                    of {props.capacity} capacity
                  </h1>
                </div>
                <div className="w-[100%] h-[6px] rounded-[10px] bg-[#D6DDEB]">
                  <div
                    className="h-[6px] bg-[#56CDAD]"
                    style={{
                      width: `${appliedPercentage}%`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex font-epilogue justify-between">
                  <p>Apply Before</p>
                  <p className="text-[#002360] font-semibold">
                    {props.additionalDetails.applyBefore}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p>Posted On</p>
                  <p className="text-[#002360] font-semibold">
                    {props.additionalDetails.postedOn}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p>Job Type</p>
                  <p className="text-[#002360] font-semibold">
                    {props.additionalDetails.jobType}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p>Salary</p>
                  <p className="text-[#1B1B1B] font-semibold">
                    {props.additionalDetails.salary}
                  </p>
                </div>
              </div>
            </div>
            <div className="my-8 py-4 border-t border-b">
              <h2 className="text-xl font-bold">Categories</h2>
              <ul className="flex flex-row flex-wrap gap-3 mt-2">
                {props.categories.map((category, index) => (
                  <li
                    key={index}
                    className={`text-xs rounded-full font-semibold px-2 py-1 ${getCategoryColor(category)}`}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <h2 className="text-xl font-bold">Required Skills</h2>
              <ul className="flex flex-row flex-wrap gap-3 mt4">
                {props.requiredSkills.map((skill, index) => (
                  <li
                    key={index}
                    className="text-xs bg-[#F8F8FD] text-[#4640DE] rounded-md px-2 py-1"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t text-[#515B6F] border-b p-6 my-6">
        <div className="my-4">
          <h2 className="text-xl font-bold mb-2">Perks & Benefits</h2>
          <p className="text-sm">
            This job comes with several perks and benefits.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-6 lg:grid-cols-4 gap-6">
          {props.perksAndBenefits.map((item, index) => (
            <div className="" key={index}>
              <Image
                src={PerkBenefit}
                alt="perk_image"
                width={40}
                height={40}
              />
              <h1 className="font-semibold text-black my-4 text-base md:text-lg">
                {item.title}
              </h1>
              <p className="text-xs md:text-sm">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-6 flex flex-col lg:flex-row lg:justify-between gap-4">
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <div className="flex gap-4 items-center">
            <div className="">
              <Image src={props.img} alt={props.title} height={60} width={60} />
            </div>

            <div className="">
              <p className="text-lg md:text-xl text-black font-bold font-epilogue">
                {props.company}
              </p>
              <p className="text-xs flex items-center -mt-2 text-[#0046BF]">
                Read more about <span>{props.company}</span>{" "}
                <span>
                  <IC_ArrowRight />
                </span>
              </p>
            </div>
          </div>
          <p className="text-sm">{props.companyInfo.description}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full lg:w-1/2">
          <div className="">
            <Image
              src={CompanyImgLarge}
              alt="Company Image Large"
              height={300}
              width={300}
              className="w-full"
            />
          </div>
          <div className="flex flex-row md:flex-col gap-4">
            <Image
              src={CompanyImgSmall}
              alt="Company Image Small"
              height={150}
              width={150}
              className="w-full"
            />
            <Image
              src={CompanyImgSmall}
              alt="Company Image Small"
              height={150}
              width={150}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindJobDescriptionDetailsChunk;
