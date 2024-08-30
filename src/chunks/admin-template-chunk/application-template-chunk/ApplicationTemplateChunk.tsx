"use client";
import Image from "next/image";
import React from "react";
import date from "public/images/date_icon.svg";
import useApplicationTemplateChunk from "./useApplicationTemplateChunk";
import searchicon from "public/images/searchicon.svg";
import filtericon from "public/images/filter_icon.svg";

import FindjobPagination from "@/components/pagination/FindjobPagination";
import Review from "./component/Review";
import Interview from "./component/Interview";
import Assesment from "./component/Assesment";
import Offer from "./component/Offer";
import Unsuitable from "./component/Unsuitable";

const ApplicationTemplateChunk = () => {
  const {
    ITEMS_PER_PAGE,
    paginate,
    currentPage,
    currentdata,
    currentassesmentdata,
    currentinterviewdata,
    currentoffersdata,
    currentreviewdata,
    filter,
    setFilter,
    selectedDate,
    handleDateChange,
    handleImageClick,
    dateInputRef,
    alldata,
    unsuitabledata,
  } = useApplicationTemplateChunk();

  return (
    <section className="py-5 grid grid-flow-row gap-10 max-w-full h-full ">
      <div className="flex justify-between">
        <div className="flex justify-between max-w-full w-full">
          <div className="flex flex-col gap-[2px]">
            <h2 className="text-[24px] font-[600] leading-[40px] text-[#1B1B1B] font-clash">
              Don’t give up, Tosin
            </h2>
            <p className="text-[#515B6F] opacity-60 font-[400] font-epilogue leading-[30px] text-[16px]">
              Here are your applications so far
            </p>
          </div>

          <div className="flex items-center gap-[10px]">
            <div
              className={`border-[1px] border-[#1B1B1B66] gap-[10px] p-[10px] h-[40px] flex 
        items-center justify-center cursor-pointer `}
              onClick={handleImageClick}
            >
              <h1
                className={`font-[600] text-[16px] leading-[16px] font-epilogue text-[#1B1B1B] w-full `}
              >
                {selectedDate}
              </h1>
              <Image
                src={date}
                alt="date_icon"
                className="w-[18px] h-[20px] cursor-pointer"
              />
            </div>

            
            <input
              type="date"
              ref={dateInputRef}
              className="opacity-0 absolute"
              onChange={handleDateChange}
            />
          </div>
        </div>
      </div>

      <div className="w-full h-[46px] flex border-b-[1px] border-[#D6DDEB] gap-[60px]">
        <div
          className={` h-[45px] tex-center ${filter === "ALL" ? "gap-[8px]   rounded-t-[12px] flex flex-col items-center justify-center  text-[#0046BF] " : "text-[#515B6F] font-[600] text-center"}`}
          onClick={() => setFilter("ALL")}
        >
          <h1 className="cursor-pointer text-[16px] leading-[25px] font-[600] font-epilogue w-full  h-full text-center">
            All ({alldata.length})
          </h1>

          <div
            className={`${filter === "ALL" ? "w-[80px] h-[4px] rounded-t-[12px] flex items-center justify-center bg-[#0046BF]" : "w-[80px] h-[4px] opacity-0"}`}
          ></div>
        </div>
        <div
          className={`h-[45px] ${filter === "REVIEW" ? "gap-[8px]  rounded-t-[12px] flex flex-col items-center justify-center text-[#0046BF] " : "text-[#515B6F]"}`}
          onClick={() => setFilter("REVIEW")}
        >
          <h1 className="cursor-pointer text-[16px] leading-[25px] font-[600] font-epilogue flex h-full ">
            {" "}
            In Review ({currentreviewdata.length})
          </h1>
          <div
            className={`${filter === "REVIEW" ? "w-[80px] h-[4px] rounded-t-[12px] flex items-center justify-center bg-[#0046BF]" : "w-[80px] h-[4px] opacity-0"}`}
          ></div>
        </div>
        <div
          className={`h-[45px] ${filter === "INTERVIEW" ? "gap-[8px]  rounded-t-[12px] flex flex-col items-center justify-center text-[#0046BF] " : "text-[#515B6F] font-[600]"}`}
          onClick={() => setFilter("INTERVIEW")}
        >
          <h1 className="cursor-pointer text-[16px] leading-[25px] font-[600] font-epilogue h-full text-center">
            Interview ({currentinterviewdata.length})
          </h1>
          <div
            className={`${filter === "INTERVIEW" ? "w-[80px] h-[4px] rounded-t-[12px] flex items-center justify-center bg-[#0046BF]" : ""}`}
          ></div>
        </div>
        <div
          className={`h-[45px]  ${filter === "ASSESMENT" ? "gap-[8px]  rounded-t-[12px] flex flex-col items-center justify-center text-[#0046BF] " : "text-[#515B6F] font-[600]"}`}
          onClick={() => setFilter("ASSESMENT")}
        >
          <h1 className="cursor-pointer text-[16px] leading-[25px] font-[600] font-epilogue flex h-full ">
            Assesment ({currentassesmentdata.length})
          </h1>
          <div
            className={`${filter === "ASSESMENT" ? "w-[80px] h-[4px] rounded-t-[12px] flex items-center justify-center bg-[#0046BF]" : ""}`}
          ></div>
        </div>
        <div
          className={`h-[45px] ${filter === "OFFER" ? "gap-[8px]  rounded-t-[12px] flex flex-col items-center justify-center text-[#0046BF] " : "text-[#515B6F] font-[600]"}`}
          onClick={() => setFilter("OFFER")}
        >
          <h1 className="cursor-pointer text-[16px] leading-[25px] font-[600] font-epilogue text-center h-full w-full">
            Offers ({currentoffersdata.length})
          </h1>
          <div
            className={`${filter === "OFFER" ? "w-[80px] h-[4px] rounded-t-[12px] flex items-center justify-center bg-[#0046BF]" : "w-[80px] h-[4px] opacity-0"}`}
          ></div>
        </div>
        <div
          className={`h-[45px] ${filter === "UNSUITABLE" ? "gap-[8px]   rounded-t-[12px] flex flex-col items-center justify-center text-[#0046BF] " : "text-[#515B6F] font-[600]"}`}
          onClick={() => setFilter("UNSUITABLE")}
        >
          <h1 className="cursor-pointer text-[16px] leading-[25px] font-[600] font-epilogue flex h-full">
            Unsuitable ({unsuitabledata.length})
          </h1>

          <div
            className={`${filter === "UNSUITABLE" ? "w-[80px] h-[4px] rounded-t-[12px] flex items-center justify-center bg-[#0046BF]" : ""}`}
          ></div>
        </div>
      </div>

      <div className="bg-[#FAFBFC] flex flex-col gap-[24px]">
        <div className="flex justify-between items-center w-full">
          <h1 className="font-[600] text-[20px] leading-[24px] font-epilogue text-[#002360]">
            Application History
          </h1>
          <div>
            <div className="flex gap-[8px]">
              <div className="w-[121px] h-[56px] flex items-center justify-center border-[1px] border-[#D6DDEB] bg-[#FFFFFF] gap-[8px] ">
                <Image
                  src={searchicon}
                  alt="searchIcon"
                  className=" w-[24px] h-[24px] "
                />
                <h1 className="font-[500] text-[16px] leading-[32px] font-epilogue text-[#1B1B1B]">
                  Search
                </h1>
              </div>

              <div className="w-[121px] h-[56px] flex items-center justify-center border-[1px] border-[#D6DDEB] bg-[#FFFFFF] gap-[8px] ">
                <Image
                  src={filtericon}
                  alt="searchIcon"
                  className=" w-[24px] h-[24px] "
                />
                <h1 className="font-[500] text-[16px] leading-[32px] font-epilogue text-[#1B1B1B]">
                  Filter
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* all job table */}
        {filter === "ALL" && (
          <div className="overflow-x-auto flex flex-col bg-[#FAFBFC] ">
            <table className="min-w-full bg-transparent border-[1px] border-[#D6DDEB]">
              <thead>
                <tr className="border-[1px] border-[#D6DDEB]">
                  <th className="py-2 px-4 border-b h-[88px] text-left font-[600] font-epilogue text-[#202430] text-[16px] leading-[25px] opacity-[50%]">
                    #
                  </th>
                  <th className="py-2 px-4 border-b font-[600] font-epilogue text-[#202430] text-[16px] leading-[25px] h-[88px] text-left opacity-[50%]">
                    Company
                  </th>
                  <th className="py-2 px-2 border-b font-[600] font-epilogue text-[#202430] text-[16px] leading-[25px] h-[88px] text-left opacity-[50%]">
                    Roles
                  </th>
                  <th className="py-2 px-4 border-b font-[600] font-epilogue text-[#202430] text-[16px] leading-[25px] h-[88px] text-left opacity-[50%]">
                    Date Applied
                  </th>
                  <th className="py-2 px-4 border-b font-[600] font-epilogue text-[#202430] text-[16px] leading-[25px] h-[88px] text-left opacity-[50%]">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {currentdata.map((t) => (
                  <tr key={t.id} className="border-[1px] border-b">
                    <td className="py-2 px-4  h-[88px] font-[400] text-[#25324B] font-epilogue text-[16px] leading-[30px] text-left">
                      {t.id}
                    </td>
                    <td className="py-2 h-[88px] px-4 flex items-center text-[#25324B] font-[400] text-[16px] leading-[30px] text-left">
                      <Image
                        src={t.img}
                        alt="searchIcon"
                        className="w-[40px] h-[40px] mr-[8px]"
                      />
                      {t.company}
                    </td>
                    <td className="py-2 h-[88px] px-2 font-[400] font-epilogue text-[16px] leading-[30px] text-[#25324B] text-left">
                      {t.title}
                    </td>
                    <td className="py-2 h-[88px] px-4  font-[400] font-epilogue text-[16px] leading-[30px] text-[#25324B] text-left">
                      {t.applied}
                    </td>

                    <td
                      className={`py-2 h-[34px] px-4  border-[0px] rounded-[50%] text-[14px] leading-[22px] font-[600] font-epilogue    text-[#26A4FF] w-[107px]  }`}
                    >
                      <h1
                        className={`py-2 h-[34px] px-4  border-[1px] text-[14px] leading-[22px] font-[600] text-center
                       rounded-[80px]
                        
            ${
              t.statusReview
                ? "text-[#FFB836] border-[#FFB836] w-[105px] border-[1px] flex items-center justify-center"
                : t.statusInterview
                  ? "border-[#56CDAD] text-[#56CDAD] w-[86px] border-[1px] flex items-center justify-center "
                  : t.statusOffered
                    ? "border-[#0046BF] text-[#0046BF] w-[76px] border-[1px] flex items-center justify-center"
                    : t.statusSuitable
                      ? "border-[#FF6550] text-[#FF6550] w-[96px] border-[1px] flex items-center justify-center"
                      : t.statusAssesment
                        ? "border-[#26A4FF] text-[#26A4FF] w-[107px]  border-[1px] flex items-center justify-center"
                        : "border-transparent"
            }`}
                      >
                        {t.statusInterview ||
                          t.statusReview ||
                          t.statusOffered ||
                          t.statusSuitable ||
                          t.statusAssesment}
                      </h1>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* pagination */}
            <div className="flex items-center justify-center my-[3rem]">
              <FindjobPagination
                totalItems={alldata.length}
                itemsPerPage={ITEMS_PER_PAGE}
                currentPage={currentPage}
                paginate={paginate}
              />
            </div>
          </div>
        )}

        {/* all in review table */}

        {filter === "REVIEW" && (
          <div>
            <Review />
          </div>
        )}

        {/* interview table */}
        {filter === "INTERVIEW" && (
          <div>
            <Interview />
          </div>
        )}

        {/* assesment table */}

        {filter === "ASSESMENT" && (
          <div>
            <Assesment />
          </div>
        )}

        {/* offer table */}
        {filter === "OFFER" && (
          <div>
            <Offer />
          </div>
        )}

        {/* unsuitable table */}
        {filter === "UNSUITABLE" && (
          <div>
            <Unsuitable />
          </div>
        )}
      </div>
    </section>
  );
};

export default ApplicationTemplateChunk;
