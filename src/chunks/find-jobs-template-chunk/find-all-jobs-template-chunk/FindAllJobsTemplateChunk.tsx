"use client";
import FindJobCard from "@/components/cards/find-job-card/FindJobCard";
import { FindJobCardProps } from "@/components/cards/find-job-card/FindJobCard.types";
import { alljobsdata } from "@/utils/data/findjobs";
import React from "react";
import styles from "@/styles/contact.module.css";
import IC_CardsOption from "public/icons/IC_CardsOption";
import IC_TilesOption from "public/icons/IC_TilesOption";
import FindjobPagination from "@/components/pagination/FindjobPagination";
import useFindAllJobsTemplateChunk from "./useFindAllJobsTemplateChunk";
import Image from "next/image";

import filtericon from "public/images/filtericon.svg";
import close from "public/images/close.svg";

const FindAllJobsTemplateChunk = () => {
  const {
    iconToggle,
    cardType,
    visibleId,
    paginate,
    handleCardStyleChange,
    handleToggle,
    currentjobdata,
    setIconToggle,
    ITEMS_PER_PAGE,
    currentPage,
    filterData,
    handleFilterToggle,
    showFilter,
  } = useFindAllJobsTemplateChunk();

  return (
    <section className="w-[100%]  gap-[20px] flex flex-col md:flex-row  justify-center md:mx-auto  overflow-x-hidden  ">
      {/*  */}
      <div
        className="flex gap-[8px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] items-center justify-center md:hidden
 w-[100%] h-[50px] border-[1px] border-r-0 border-l-0 border-[#515B6F33] mt-[40px] px-0"
        onClick={handleFilterToggle}
      >
        <Image
          src={filtericon}
          alt="filter_icon"
          className="w-[24px] h-[24px]"
        />
        <h1 className="font-[500] text-[16px] leading-[25px] font-clash">
          More Filters
        </h1>
      </div>

      {/* find job filter */}
      <div
        className={`p-1 px-2   gap-[20px] ${showFilter ? "fixed" : "hidden md:flex md:flex-col"}  md:relative top-[30px] md:top-0 
      right-[17px] md:right-0  bg-[#FFFFFF] md:bg-transparent  z-10 h-[100%]  rounded-[3px]
      w-[90%] md:w-[300px]  md:overflow-hidden overflow-scroll
       `}
      >
        <div className="flex justify-between items-center md:hidden pt-[1rem] px-[0.25rem]">
          <h1 className="font-clash text-[#1B1B1B] font-[600] text-[20px] leading-[24px]">
            More Filter{" "}
          </h1>
          <Image
            onClick={handleFilterToggle}
            src={close}
            alt="close"
            className="w-[14px] h-[14px]"
          />
        </div>

        {filterData.map(({ id, title, description }) => (
          <div
            key={id}
            className="transition-all duration-200  cursor-pointer "
          >
            <button
              type="button"
              onClick={() => handleToggle(id)}
              className="flex w-full justify-between  pb-3  mt-[1.3rem]"
            >
              <span className="flex font-[700] text-[16px] leading-[24px] text-[#25324B]  font-epilogue">
                {title}
              </span>

              <svg
                className={`w-6 h-6 text-gray-400 ${visibleId.includes(id) ? styles.rotate : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#25324B"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                  width={11}
                  height={5}
                />
              </svg>
            </button>
            {/* checkbox */}
            <div
              className={` pb-5  sm:pb-6 flex gap-[16px] items-start flex-col justify-start ${visibleId.includes(id) ? "hidden" : "block"}`}
            >
              {description.map((desc, index) => (
                <div
                  key={index}
                  className="flex   items-center gap-2 py-[0.3rem] "
                >
                  <input
                    type="checkbox"
                    className="w-[24px] h-[24px] border-[#D6DDEB] border-[2px] accent-[#4640DE] checked:bg-[#4640DE] "
                  />
                  <p className="font-[400] text-[16px] leading-[25px] lg:pl-[1rem] pl-[0.5rem] font-epilogue text-[#1B1B1B]">
                    {desc.duration}
                  </p>
                  <p className="font-[400] text-[16px] leading-[25px]  font-epilogue text-[#1B1B1B]">
                    ({desc.jobs})
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* find jobs */}
      <div className="md:pt-[1.4rem] lg:px-2  lg:w-[919px] px-2  pr-[16px] md:pr-0  pb-[40px] md:pb-0 pl-[16px]  md:pl-0 ">
        {/* heading */}
        <div className="flex flex-row justify-between md:items-center items-start pb-[1rem]">
          <div className="gap-[8px]">
            <h1 className="font-[600] text-[32px] leading-[38px] text-[#25324B]">
              All Jobs
            </h1>

            <p className="font-[400] text-[16px] leading-[25px] text-[#7C8493]">
              Showing 73 results
            </p>
          </div>
          {/* icons */}
          <div className="flex items-center pt-[2.3rem]    gap-3">
            <div className="flex  gap-2">
              <h1 className="font-[400] text-[16px] leading-[25px] text-[#7C8493] hidden md:flex">
                sort by:
              </h1>
              {/* button */}
              <button
                type="button"
                onClick={() => setIconToggle(!iconToggle)}
                className="flex justify-center gap-2 "
              >
                <span className="flex font-[700] text-[16px] leading-[24px] text-[#25324B]">
                  Most relevant
                </span>
                <svg
                  className={`w-6 h-6 text-gray-400 ${!iconToggle ? styles.rotate : ""}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#25324B"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                    width={11}
                    height={5}
                  />
                </svg>
              </button>
            </div>

            <div className="md:flex hidden gap-3 items-center">
              <div className="" onClick={handleCardStyleChange("tile")}>
                <IC_TilesOption
                  className={`cursor-pointer w-[24px] h-[24px]  ${cardType === "tile" ? "fill-[#4640DE] stroke-[#4640DE] opacity-1" : "fill-[white] opacity-[0.6]"}`}
                />
              </div>
              <div className="" onClick={handleCardStyleChange("card")}>
                <IC_CardsOption
                  className={`cursor-pointer w-[24px] h-[24px] ${cardType === "card" ? "fill-[#4640DE] stroke-[#4640DE] opacity-1" : "fill-[#1B1B1B] opacity-[0.6]"}`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* mapping starts here */}
        <div>
          <div className="flex flex-col">
            {currentjobdata.map((j: FindJobCardProps, i: number) => (
              <FindJobCard
                key={i}
                img={j.img}
                title={j.title}
                company={j.company}
                location={j.location}
                duration={j.duration}
                sector1={j.sector1}
                sector2={j.sector2}
                applied={j.applied}
                capacity={j.capacity}
              />
            ))}
          </div>
          {/* pagination */}
          <div className="flex items-center justify-center my-[1rem] md:my-[3rem]">
            <FindjobPagination
              totalItems={alljobsdata.length}
              itemsPerPage={ITEMS_PER_PAGE}
              currentPage={currentPage}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindAllJobsTemplateChunk;
