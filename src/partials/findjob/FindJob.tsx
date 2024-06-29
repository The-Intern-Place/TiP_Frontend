"use client";
import FindJobCard from "@/components/cards/findjob-card/FindJobCard";
import { FindJobCardProps } from "@/components/cards/findjob-card/FindJobCard.types";
import { alljobsdata } from "@/utilities/data/findjobs";
import React, { useState } from "react";
import styles from "../../styles/ContactSection/ContactSection.module.css";

import IC_CardsOption from "public/icons/IC_CardsOption";
import IC_TilesOption from "public/icons/IC_TilesOption";
import FindjobPagination from "@/components/pagination/FindjobPagination";

type JobDescription = {
  duration: string;
  jobs: number;
};

type JOBFILTER = {
  id: number;
  title: string;
  description: JobDescription[];
};

const filterData: JOBFILTER[] = [
  {
    id: 1,
    title: "Types of Employment",
    description: [
      { duration: "Full-Time", jobs: 3 },
      { duration: "Part-Time", jobs: 5 },
      { duration: "Remote", jobs: 2 },
      { duration: "Internship", jobs: 24 },
    ],
  },

  {
    id: 2,
    title: "Categories",
    description: [
      { duration: "Design", jobs: 24 },
      { duration: "Sales", jobs: 3 },
      { duration: "Marketing", jobs: 3 },
      { duration: "Business", jobs: 3 },
      { duration: "Human Resources", jobs: 6 },
      { duration: "Finance", jobs: 24 },
      { duration: "Engineering", jobs: 24 },
      { duration: "Technology", jobs: 5 },
    ],
  },

  {
    id: 3,
    title: "Job Level",
    description: [
      { duration: "Enry Level", jobs: 57 },
      { duration: "Mid Level", jobs: 3 },
      { duration: "Internship", jobs: 8 },
    ],
  },

  {
    id: 4,
    title: "Salary Range",
    description: [
      { duration: "$700 - $1000", jobs: 4 },
      { duration: "$100 - $1500", jobs: 6 },
      { duration: "$1500 - $2000", jobs: 10 },
      { duration: "$3000 or above", jobs: 4 },
    ],
  },
];

const FindJob = () => {


  

  const [iconToggle, setIconToggle] = useState<boolean>(false);

  const [cardType, setCardType] = useState<string | null>(null);

  const handleCardStyleChange = (type: string) => () => {
    setCardType(type);
  };

  const [visibleId, setVisibleId] = useState<number[]>([]);
  const handleToggle = (id: number) => {
    setVisibleId((prevVisibleIds) =>
      prevVisibleIds.includes(id)
        ? prevVisibleIds.filter((visibleId) => visibleId !== id)
        : [...prevVisibleIds, id]
    );
  };
  // pagination

  const ITEMS_PER_PAGE = 7;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfFirstItem = (currentPage - 1) * ITEMS_PER_PAGE;
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const currentjobdata = alljobsdata.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section className="w-[100%]  gap-[10px] flex flex-col md:flex-row  justify-center mx-auto  overflow-x-hidden">
      {/* find job filter */}

      <div className="p-1  top-[75px] ">
        {filterData.map(({ id, title, description }) => (
          <div
            key={id}
            className="transition-all duration-200  cursor-pointer "
          >
            <button
              type="button"
              onClick={() => handleToggle(id)}
              className="flex w-full justify-between gap-6 pb-3  mt-[1.5rem]"
            >
              <span className="flex font-[700] text-[16px] leading-[24px] text-[#25324B]">
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
              className={` pb-5  sm:pb-6 flex gap-2 items-start flex-col justify-start ${visibleId.includes(id) ? "block" : "hidden"}`}
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
                  <p className="font-[400] text-[16px] leading-[25px] pl-[1rem]">
                    {desc.duration}
                  </p>
                  <p className="font-[400] text-[16px] leading-[25px]">
                    ({desc.jobs})
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* find jobs */}
      <div className="lg:w-[919px] md:w-[519px] w-[100%]  pt-[1.4rem] px-2">
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

            <div className="flex gap-3 items-center" >
            <div className="" onClick={handleCardStyleChange('tile')}>
                <IC_TilesOption
                  className={`cursor-pointer w-[24px] h-[24px]  ${cardType === 'tile' ? "fill-[#4640DE] stroke-[#4640DE] opacity-1" : "fill-[white] opacity-[0.6]"}`}
                />
              </div>

              <div className=""  onClick={handleCardStyleChange('card')}>
                <IC_CardsOption
                  className={`cursor-pointer w-[24px] h-[24px] ${cardType === 'card' ? "fill-[#4640DE] stroke-[#4640DE] opacity-1" : "fill-[#1B1B1B] opacity-[0.6]"}`}
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

export default FindJob;
