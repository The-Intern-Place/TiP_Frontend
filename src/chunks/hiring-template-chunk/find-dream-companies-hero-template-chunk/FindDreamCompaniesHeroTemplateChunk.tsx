"use client";
import Image from "next/image";
import React from "react";
import Navbar from "@/components/navbar/Navbar";
import headline from "public/images/headline.svg";
import SelectInput2 from "@/components/inputs/select-input/SelectInput2";
import { LocationIcon, ArrowDown } from "@assets/images";
import searchicon from "public/images/searchicon.svg";
import IC_Search from "public/icons/IC_Search";
import Button from "@/components/button/Button";

const FindDreamCompaniesHeroTemplateChunk = () => {
  return (
    <section>
      <div className="bg-[#f8f8f8] md:h-[514px] ">
        <div>
          <Navbar />
        </div>
        {/* hero components */}
        <div className="flex flex-col  items-center justify-center">
          <div className="flex  flex-col  pt-[3.5rem]  gap-2 items-center  ">
            <div className="flex  flex-col md:flex-row items-center justify-center   gap-[16px]">
              <h1 className="md:text-[48px] leading-[52px] text-[48px] font-[600] font-clash">
                Find your{" "}
              </h1>

              <div className="flex flex-col  md:h-[66px] md:w-[437px] h-[44px]  w-[300px] mt-[1.5rem] md:my-0  items-center justify-center  md:mt-[1rem]">
                <h1 className="text-[#26A4FF] font-clash text-center md:text-start  md:text-[48px] text-[48px] leading-[52px] font-[600]">
                  dream companies
                </h1>
                <Image src={headline} alt="background_pics" className="" />
              </div>
            </div>

            <p className="font-[400] text-[18px] text-[#1B1B1B99] leading-[32px] text-center pt-[2rem] px-1">
              Find the dream companies you dream work for
            </p>
          </div>
          {/* search Input */}
          <div className="flex flex-col max-w-[1350px] w-full h-full mx-auto px-6 md:px-10 lg:px-24 xl:px-0">
            {/* search Inoput for large screen */}

            <div className="hidden md:flex gap-4 bg-white items-center justify-center p-4 mt-[2rem]">
              {/* placeholder and search icon */}
              <div className="flex items-center lg:w-[485px] w-[100%] px-1 gap-[16px]">
                <Image
                  src={searchicon}
                  alt="searchIcon"
                  className=" md:w-[24px] w-[20px] md:h-[24px] h-20px]    "
                />

                <input
                  type="text"
                  placeholder="Job title  or Keyword"
                  className=" border-b-[1px] border-gray  bg-transparent rounded-none focus:outline-none focus:ring-0  w-full h-[60px] items-center"
                />
              </div>

              {/* divider */}
              <div className="border-[1px] border-gray md:h-[60px] hidden md:flex" />

              {/* florence,italy  */}
              <div className=" md:w-[555px] w-[120px] bg-transparent hidden md:flex">
                <SelectInput2
                  label=""
                  placeholder="Florence, Italy"
                  options={[{ id: "Country", name: "City, Country" }]}
                  overrideStyles="focus:outline-0 border-r-0 border-l-0 border-t-0 rounded-none bg-transparent border-b-[1px] border-gray rounded-br-none rounded-bl-none"
                  iconLeft={<Image src={LocationIcon} alt="" />}
                  onChange={() => {}}
                  iconRight={
                    <Image
                      src={ArrowDown}
                      alt=""
                      className="absolute right-2 top-3 text-[#25324B]"
                    />
                  }
                />
              </div>

              {/* button */}
              <Button overrideStyles="rounded-none" fit>
                Search
              </Button>
            </div>

            {/* smaller search button */}
            <div className="flex md:hidden bg-white mt-1  rounded-[50px] h-[54px] w-full  pr-2">
              <div className="flex relative w-full md:w-fit">
                <input
                  type="text"
                  placeholder="Search Job or Keyword"
                  className="border-none bg-transparent rounded-none pl-6 focus:outline-none focus:ring-0 placeholder:text-sm md:placeholder:text-base w-full md:w-fit h-[54px] md:h-full"
                />
                <div
                  className={`my-auto flex absolute right-0 px-1.5 h-full items-center justify-center text-xs text-gray-500 disabled:bg-gray-100 flex-shrink-0 md:hidden`}
                >
                  <button
                    className="rounded-full bg-[#002360] text-white p-3"
                    aria-label="Search"
                  >
                    <IC_Search className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="border border-[#1976D2] opacity-20 my-2 hidden md:flex" />
              <div>
                <SelectInput2
                  label=""
                  placeholder="Location"
                  options={[{ id: "business", name: "Business" }]}
                  overrideStyles="border-none rounded-r-full bg-transparent w-full hidden md:flex focus:outline-0"
                  iconLeft={<Image src={LocationIcon} alt="" />}
                  onChange={() => {}}
                  iconRight={
                    <div className="flex relative items-center justify-between gap-3">
                      <Image
                        src={ArrowDown}
                        alt=""
                        className="absolute top lg:-left-[3rem] -left-[2.5rem] w-6 h-6"
                      />
                      <button
                        className="rounded-full bg-[#002360] text-white p-3"
                        aria-label="Search"
                      >
                        <IC_Search className="w-5 h-5" />
                      </button>
                    </div>
                  }
                />
              </div>
            </div>

            {/* popular text */}
            <div className="md:pt-[1rem] text-center sm:text-start p-2">
              <p className="text-[16px] font-[400] font-epilogue md:block hidden leading-[25px] text-grey">
                Popular : UI Designer, UX Researcher, Android, Admin
              </p>

              <p className="text-[14px] font-[400] font-epilogue block md:hidden text-center leading-[30px] text-grey">
                Popular: Product Designer Intern, Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindDreamCompaniesHeroTemplateChunk;
