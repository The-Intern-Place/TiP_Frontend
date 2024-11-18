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
import Button from "@/components/button/Button";
import FindJobTileCard from "@/components/cards/find-job-tile-card/FindJobTileCard";
import { FindJobTileCardProps } from "@/components/cards/find-job-tile-card/FindJobTileCard.types";

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
    filterJobs,
  } = useFindAllJobsTemplateChunk();

  return (
    <section className="flex flex-col lg:flex-row md:justify-between gap-8 py-8">
      {/*  */}
      <div
        className="flex gap-[8px] pt-[12px]  pb-[12px]  items-center justify-center lg:hidden
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
        className={`gap-[20px] ${showFilter ? "fixed" : "hidden lg:flex lg:flex-col"} p-6 lg:p-0 rounded  shadow-md lg:shadow-none max-h-[90%] lg:max-h-full overflow-y-scroll lg:overflow-y-visible lg:relative top-6 lg:top-0 
      right-[17px] md:right-0  bg-[#FFFFFF] lg:bg-transparent  z-10
      w-[90%] lg:w-72
       `}
      >
        <div className="flex  justify-between items-center lg:hidden px-[0.25rem] mb-6">
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
            className="transition-all duration-200  cursor-pointer max-w-full"
          >
            <button
              type="button"
              onClick={() => handleToggle(id)}
              className="flex w-full justify-between  pb-4 rounded-none bg-transparent max-w-full px-0"
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
                  className="flex  items-center gap-2 py-[0.3rem] "
                >
                  <input
                    type="checkbox"
                    className="w-[24px] h-[24px] border-[#D6DDEB] border-[2px] accent-[#4640DE] checked:bg-[#4640DE]"
                    onClick={() => filterJobs(desc.text)}
                  />
                  <p className="font-[400] text-[16px] leading-[25px] lg:pl-[1rem] pl-[0.5rem] font-epilogue md:text-[#1B1B1B]">
                    {desc.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="flex my-1">
          <Button
            overrideStyles="w-[100%]   h-[50px] bg-[#0046BF] flex md:hidden text-center items-center rounded-none
          justify-center font-[700] text-[16px] leading-[25px] text-[#FFFFFF]"
          >
            Apply
          </Button>
        </div>
      </div>

      {/* find jobs */}
      <div className="w-full">
        {/* heading */}
        <div className="flex flex-col sm:flex-row px-4 py-2 rounded justify-between md:items-center">
          <div className="gap-[8px]">
            <h1 className="font-[600] text-[32px] leading-[38px] text-[#25324B]">
              All Jobs
            </h1>

            <p className="font-[400] text-[16px] leading-[25px] text-[#7C8493]">
              Showing {currentjobdata.length} results
            </p>
          </div>
          {/* icons */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-2">
              <p className="text-[#515B6F]">Sort by:</p>

              <button
                type="button"
                onClick={() => setIconToggle(!iconToggle)}
                className="flex justify-center gap-2 mt-1"
              >
                <span className="flex font-[700] text-sm text-[#25324B]">
                  Most relevant
                </span>
                <svg
                  className={`w-5 h-5 text-gray-400 ${!iconToggle ? styles.rotate : ""}`}
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
              <div
                className={`${cardType === "card" && "bg-[#1976D21A] p-1 rounded"}`}
                onClick={handleCardStyleChange("card")}
              >
                <IC_TilesOption
                  className={`cursor-pointer w-[24px]  h-[24px]  ${cardType === "card" ? " fill-[#4640DE] stroke-[#4640DE] opacity-1" : "fill-[white] opacity-60"}`}
                />
              </div>
              <div
                className={`${cardType === "tile" && "bg-[#1976D21A] p-1 rounded"}`}
                onClick={handleCardStyleChange("tile")}
              >
                <IC_CardsOption
                  className={`cursor-pointer w-[24px]  h-[24px] ${cardType === "tile" ? "fill-[#4640DE] stroke-[#4640DE] opacity-1" : "fill-[#1B1B1B] opacity-60"}`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* mapping starts here */}
        <div>
          {currentjobdata.length > 0 ? (
            <>
              {cardType === "card" ? (
                <div className="grid md:grid-cols-2 grid-cols-1 xl:grid-cols-3 gap-4 mt-4">
                  {currentjobdata.map((j: FindJobCardProps) => (
                    <FindJobCard key={j.id} {...j} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col mt-4">
                  {currentjobdata.map((j: FindJobTileCardProps) => (
                    <FindJobTileCard key={j.id} {...j} />
                  ))}
                </div>
              )}
            </>
          ) : (
            <>
              <div className="flex justify-center flex-col items-center">
                <Image
                  src="/images/jobs_empty.svg"
                  alt="Empty Job Image"
                  width={400}
                  height={400}
                />
                <p className="text-center w-full mt-8 md:w-[80%] lg:w-[75%] xl:w-[70%] mx-auto">
                  Your career path awaits! 🚀 Browse through our job listings
                  and let the possibilities inspire you. The perfect opportunity
                  might be just one click away.
                </p>
              </div>
            </>
          )}
          {/* pagination */}
          {currentjobdata.length > 0 && (
            <div className="flex items-center justify-center my-[1rem] md:my-[3rem]">
              <FindjobPagination
                totalItems={alljobsdata.length}
                itemsPerPage={ITEMS_PER_PAGE}
                currentPage={currentPage}
                paginate={paginate}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FindAllJobsTemplateChunk;
