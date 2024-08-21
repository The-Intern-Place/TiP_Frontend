"use client";
import Image from "next/image";
import React from "react";
import date from "public/images/date_icon.svg";
import useApplicationTemplateChunk from "./useApplicationTemplateChunk";
import searchicon from "public/images/searchicon.svg";
import filtericon from "public/images/filter_icon.svg";
import { alldata } from "@/utils/data/dashboardapplication";
import FindjobPagination from "@/components/pagination/FindjobPagination";

const ApplicationTemplateChunk = () => {
  const {
    ITEMS_PER_PAGE,
    paginate,
    currentPage,
    currentdata,
    currentassesmentdata,
    currentinterviewdata,
    currentoffersdata,
    currentunsuitabledata,
    currentreviewdata,
    filter,
    setFilter,
  } = useApplicationTemplateChunk();

  return (
    <section className="py-5 grid grid-flow-row gap-10 max-w-full h-full ">
      <div className="flex justify-between">
        <div className="flex flex-col gap-[2px]">
          <h2 className="text-[24px] font-[600] leading-[40px] text-[#1B1B1B] font-clash ">
            Don’t give up, Tosin
          </h2>
          <p className="text-[#515B6F] opacity-60 font-[400] font-epilogue leading-[30px] text-[16px]">
            Here are your applications so far
          </p>
        </div>

        <div className="border-[1px] border-[#1B1B1B66] gap-[10px] p-[10px] w-[112px] h-[40px] flex items-center justify-center">
          <h1 className="font-[600] text-[16px] leading-[16px] font-epilogue text-[#1B1B1B]">
            July
          </h1>
          <Image src={date} alt="date_icon" className="w-[18px] h-[20px]" />
        </div>
      </div>

      <div className="w-full h-[46px] flex border-b-[1px] border-[#D6DDEB] gap-[60px]">
        <div
          className={`${filter === "ALL" ? "border-b-[2px] border-[#0046BF] text-[#0046BF]" : ""}`}
          onClick={() => setFilter("ALL")}
        >
          <h1 className="cursor-pointer">All ({currentdata.length})</h1>
        </div>
        <div
          className={`${filter === "REVIEW" ? "border-b-[2px] border-[#0046BF] text-[#0046BF]" : ""}`}
          onClick={() => setFilter("REVIEW")}
        >
          <h1 className="cursor-pointer">
            {" "}
            In Review ({currentreviewdata.length})
          </h1>
        </div>
        <div
          className={`${filter === "INTERVIEW" ? "border-b-[2px] border-[#0046BF] text-[#0046BF]" : ""}`}
          onClick={() => setFilter("INTERVIEW")}
        >
          <h1 className="cursor-pointer">
            Interview ({currentinterviewdata.length})
          </h1>
        </div>
        <div
          className={`${filter === "ASSESMENT" ? "border-b-[2px] border-[#0046BF] text-[#0046BF]" : ""}`}
          onClick={() => setFilter("ASSESMENT")}
        >
          <h1 className="cursor-pointer">
            Assesment ({currentassesmentdata.length})
          </h1>
        </div>
        <div
          className={`${filter === "OFFER" ? "border-b-[2px] border-[#0046BF] text-[#0046BF]" : ""}`}
          onClick={() => setFilter("OFFER")}
        >
          <h1 className="cursor-pointer">
            Offers ({currentoffersdata.length})
          </h1>
        </div>
        <div
          className={`${filter === "UNSUITABLE" ? "border-b-[2px] border-[#0046BF] text-[#0046BF]" : ""}`}
          onClick={() => setFilter("UNSUITABLE")}
        >
          <h1 className="cursor-pointer">
            Unsuitable ({currentunsuitabledata.length})
          </h1>
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
                      className={`py-2 h-[34px] px-4  border-b border-[1px] rounded-full text-[14px] leading-[22px] font-[600] font-epilogue flex items-center justify-center
            ${
              t.statusReview
                ? "text-[#FFB836] border-[#FFB836] w-[95px]"
                : t.statusInterview
                  ? "border-[#56CDAD] text-[#56CDAD] w-[86px]"
                  : t.statusOffered
                    ? "border-[#0046BF] text-[#0046BF] w-[76px]"
                    : t.statusSuitable
                      ? "border-[#FF6550] text-[#FF6550] w-[96px]"
                      : t.statusAssesment
                        ? "border-[#26A4FF] text-[#26A4FF] w-[107px]"
                        : "border-transparent"
            }`}
                    >
                      {t.statusInterview ||
                        t.statusReview ||
                        t.statusOffered ||
                        t.statusSuitable ||
                        t.statusAssesment}
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
          <div className="overflow-x-auto flex flex-col ">
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
                {currentreviewdata.map((t) => (
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
                      className={`py-2 h-[34px] px-4  border-b border-[1px] rounded-full text-[14px] leading-[22px] font-[600] font-epilogue flex items-center justify-center
    ${
      t.statusReview
        ? "text-[#FFB836] border-[#FFB836] w-[95px]"
        : t.statusInterview
          ? "border-[#56CDAD] text-[#56CDAD] w-[86px]"
          : t.statusOffered
            ? "border-[#0046BF] text-[#0046BF] w-[76px]"
            : t.statusSuitable
              ? "border-[#FF6550] text-[#FF6550] w-[96px]"
              : t.statusAssesment
                ? "border-[#26A4FF] text-[#26A4FF] w-[107px]"
                : "border-transparent"
    }`}
                    >
                      {t.statusInterview ||
                        t.statusReview ||
                        t.statusOffered ||
                        t.statusSuitable ||
                        t.statusAssesment}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* pagination */}
            <div className="flex items-center justify-center my-[3rem]">
              <FindjobPagination
                totalItems={currentreviewdata.length}
                itemsPerPage={ITEMS_PER_PAGE}
                currentPage={currentPage}
                paginate={paginate}
              />
            </div>
          </div>
        )}

        {/* interview table */}
        {filter === "INTERVIEW" && (
          <div className="overflow-x-auto flex flex-col bg-[#FAFBFC]">
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
                {currentinterviewdata.map((t) => (
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
                      className={`py-2 h-[34px] px-4  border-b border-[1px] rounded-full text-[14px] leading-[22px] font-[600] font-epilogue flex items-center justify-center
    ${
      t.statusOffered
        ? "border-[#0046BF] text-[#0046BF] w-[76px]"
        : t.statusSuitable
          ? "border-[#FF6550] text-[#FF6550] w-[96px]"
          : t.statusAssesment
            ? "border-[#26A4FF] text-[#26A4FF] w-[107px]"
            : "border-transparent"
    }`}
                    >
                      {t.statusOffered || t.statusSuitable || t.statusAssesment}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* pagination */}
            <div className="flex items-center justify-center my-[3rem]">
              <FindjobPagination
                totalItems={currentinterviewdata.length}
                itemsPerPage={ITEMS_PER_PAGE}
                currentPage={currentPage}
                paginate={paginate}
              />
            </div>
          </div>
        )}

        {/* assesment table */}

        {filter === "ASSESMENT" && (
          <div className="overflow-x-auto flex flex-col bg-[#FAFBFC]">
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
                {currentassesmentdata.map((t) => (
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
                      className={`py-2 h-[34px] px-4  border-b border-[1px] rounded-full text-[14px] leading-[22px] font-[600] font-epilogue flex items-center justify-center
    ${
      t.statusReview
        ? "text-[#FFB836] border-[#FFB836] w-[95px]"
        : t.statusInterview
          ? "border-[#56CDAD] text-[#56CDAD] w-[86px]"
          : t.statusOffered
            ? "border-[#0046BF] text-[#0046BF] w-[76px]"
            : t.statusSuitable
              ? "border-[#FF6550] text-[#FF6550] w-[96px]"
              : t.statusAssesment
                ? "border-[#26A4FF] text-[#26A4FF] w-[107px]"
                : "border-transparent"
    }`}
                    >
                      {t.statusInterview ||
                        t.statusReview ||
                        t.statusOffered ||
                        t.statusSuitable ||
                        t.statusAssesment}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* pagination */}
            <div className="flex items-center justify-center my-[3rem]">
              <FindjobPagination
                totalItems={currentassesmentdata.length}
                itemsPerPage={ITEMS_PER_PAGE}
                currentPage={currentPage}
                paginate={paginate}
              />
            </div>
          </div>
        )}

        {/* offer table */}
        {filter === "OFFER" && (
          <div className="overflow-x-auto flex flex-col bg-[#FAFBFC]">
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
                {currentoffersdata.map((t) => (
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
                      className={`py-2 h-[34px] px-4  border-b border-[1px] rounded-full text-[14px] leading-[22px] font-[600] font-epilogue flex items-center justify-center
    ${
      t.statusOffered
        ? "border-[#0046BF] text-[#0046BF] w-[76px]"
        : t.statusSuitable
          ? "border-[#FF6550] text-[#FF6550] w-[96px]"
          : t.statusAssesment
            ? "border-[#26A4FF] text-[#26A4FF] w-[107px]"
            : "border-transparent"
    }`}
                    >
                      {t.statusOffered || t.statusSuitable || t.statusAssesment}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* pagination */}
            <div className="flex items-center justify-center my-[3rem]">
              <FindjobPagination
                totalItems={currentoffersdata.length}
                itemsPerPage={ITEMS_PER_PAGE}
                currentPage={currentPage}
                paginate={paginate}
              />
            </div>
          </div>
        )}

        {/* unsuitable table */}
        {filter === "UNSUITABLE" && (
          <div className="overflow-x-auto flex flex-col bg-[#FAFBFC]">
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
                {currentunsuitabledata.map((t) => (
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
                      className={`py-2 h-[34px] px-4  border-b border-[1px] rounded-full text-[14px] leading-[22px] font-[600] font-epilogue flex items-center justify-center
    ${
      t.statusReview
        ? "text-[#FFB836] border-[#FFB836] w-[95px]"
        : t.statusInterview
          ? "border-[#56CDAD] text-[#56CDAD] w-[86px]"
          : t.statusOffered
            ? "border-[#0046BF] text-[#0046BF] w-[76px]"
            : t.statusSuitable
              ? "border-[#FF6550] text-[#FF6550] w-[96px]"
              : t.statusAssesment
                ? "border-[#26A4FF] text-[#26A4FF] w-[107px]"
                : "border-transparent"
    }`}
                    >
                      {t.statusInterview ||
                        t.statusReview ||
                        t.statusOffered ||
                        t.statusSuitable ||
                        t.statusAssesment}
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
      </div>
    </section>
  );
};

export default ApplicationTemplateChunk;
