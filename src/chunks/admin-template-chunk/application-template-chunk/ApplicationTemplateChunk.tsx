"use client";
import Image from "next/image";
import React from "react";
import date from "public/images/date_icon.svg";
import useApplicationTemplateChunk from "./useApplicationTemplateChunk";
import searchicon from "public/images/searchicon.svg";
import filtericon from "public/images/filter_icon.svg";
import FindjobPagination from "@/components/pagination/FindjobPagination";

const ApplicationTemplateChunk = () => {
  const {
    ITEMS_PER_PAGE,
    paginate,
    currentPage,
    data,
    selectedDate,
    handleImageClick,
    alldata,
    filterTabs,
    tableHeaders,
    handleFilterClick,
    dateInputRef,
    handleDateChange,
    getStatusClass,
  } = useApplicationTemplateChunk();

  return (
    <section className="py-5 grid grid-flow-row gap-10 max-w-full h-full">
      <div className="flex justify-between">
        <div className="flex justify-between max-w-full w-full">
          <div>
            <h2 className="text-2xl font-bold leading-[28.8px] text-grey">
              Don’t give up, Tosin
            </h2>
            <p className="text-grey mt-2 opacity-60">
              Here are your applications so far
            </p>
          </div>

          <div className="flex relative items-center gap-[10px] cursor-pointer">
            <div
              className={`border-[1px] border-[#1B1B1B66] gap-[10px] p-[10px] h-[40px] flex 
        items-center justify-center`}
              onClick={handleImageClick}
            >
              <h1 className={`font-semibold leading-[16px] text-grey w-full `}>
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
              className="absolute w-full"
              onChange={handleDateChange}
            />
          </div>
        </div>
      </div>

      <div className="w-full flex border-b-[1px] border-[#D6DDEB] gap-[60px]">
        {filterTabs?.tabs.map((f, key) => (
          <div
            key={key}
            className={`text-center ${
              filterTabs.activeTab === f.id
                ? "gap-[8px] rounded-t-[12px] flex flex-col items-center justify-center text-[#0046BF]"
                : "text-[#515B6F] font-[600] text-center"
            }`}
            onClick={() => handleFilterClick(f)}
          >
            <h1 className="cursor-pointer text-[16px] leading-[25px] font-[600] font-epilogue w-full text-center">
              {f.name} (
              {f.id === "ALL"
                ? alldata.length
                : alldata.filter((data) => data.status === f.id.toLowerCase())
                    .length}
              )
            </h1>

            <div
              className={`${
                filterTabs.activeTab === f.id
                  ? "w-full h-[4px] rounded-t-[12px] flex items-center justify-center bg-[#0046BF]"
                  : "hidden"
              }`}
            />
          </div>
        ))}
      </div>

      <div className="bg-[#FAFBFC] flex flex-col gap-[24px]">
        <div className="flex justify-between items-center w-full">
          <h1 className="font-[600] text-[20px] leading-[24px] font-epilogue text-[#002360]">
            Application History
          </h1>
          <div>
            <div className="flex gap-[8px]">
              <div className="w-[121px] h-[56px] flex items-center justify-center border-[1px] border-[#D6DDEB] bg-[#FFFFFF] gap-[8px]">
                <Image
                  src={searchicon}
                  alt="searchIcon"
                  className=" w-[24px] h-[24px] "
                />
                <h1 className="font-[500] text-[16px] leading-[32px] font-epilogue text-[#1B1B1B]">
                  Search
                </h1>
              </div>

              <div className="w-[121px] h-[56px] flex items-center justify-center border-[1px] border-[#D6DDEB] bg-[#FFFFFF] gap-[8px]">
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

        <section className="overflow-x-auto flex flex-col bg-[#FAFBFC]">
          <table className="min-w-full bg-transparent border-[1px] border-[#D6DDEB]">
            <thead>
              <tr className="border-[1px] border-[#D6DDEB]">
                {tableHeaders.map((header, key) => (
                  <th
                    key={key}
                    className="px-4 border-b h-[88px] text-left font-[600] text-[#202430] leading-[25px] opacity-[50%]"
                  >
                    {header.name}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {data.map((t) => {
                console.log(t);
                const theme = getStatusClass(t.status);
                return (
                  <tr
                    key={t.id}
                    className="border-[1px] h-[88px] border-b text-[#25324B]"
                  >
                    <td className="py-2 px-4 leading-[30px] text-left">
                      {t.id}
                    </td>
                    <td className="h-[88px] px-4 flex items-center leading-[30px]">
                      <Image
                        src={t.img}
                        alt="searchIcon"
                        className="w-[40px] h-[40px] mr-[8px]"
                      />
                      {t.company}
                    </td>
                    <td className="px-4 leading-[30px]">{t.title}</td>
                    <td className="px-4 leading-[30px]">{t.applied}</td>

                    <td className={`px-4 font-semibold`}>
                      <div
                        className={`py-2 px-3 border text-sm leading-[22px] w-fit text-center rounded-full ${theme?.style}`}
                      >
                        {theme?.text}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* pagination */}
          <div className="flex items-center justify-center my-[2rem]">
            <FindjobPagination
              totalItems={alldata.length}
              itemsPerPage={ITEMS_PER_PAGE}
              currentPage={currentPage}
              paginate={paginate}
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default ApplicationTemplateChunk;
