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
  } = useFindAllJobsTemplateChunk();
  return (
    <section className="w-full gap-8 flex flex-col md:flex-row justify-center mx-auto items-center w-full h-full max-w-[1350px] mx-auto md:px-12 px-8 lg:px-16 xl:px-0">
      {/* find job filter */}
      <div className="p-1  top-[75px] gap-[20px] ">
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
      <div className="pt-[1.4rem] lg:px-2  lg:w-[919px] ">
        {/* heading */}
        <div className="flex flex-col md:flex-row justify-between md:items-center items-start  pb-[1rem]">
          <div>
            <h1 className="font-[600] text-[32px] leading-[38px] text-[#25324B]">
              All Jobs
            </h1>
            <p className="font-[400] text-[16px] leading-[25px] text-[#7C8493]">
              Showing 73 results
            </p>
          </div>
          {/* icons */}
          <div className="flex items-center   gap-3">
            <div className="flex  gap-2">
              <h1 className="font-[400] text-[16px] leading-[25px] text-[#7C8493]">
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
            <div className="flex gap-3 items-center">
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
          <div className="flex items-center justify-center my-[3rem]">
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
