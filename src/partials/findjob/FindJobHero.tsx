"use client";
import MobileNavbar from "@/components/navbar/MobileNavbar";
import Navbar from "@/components/navbar/Navbar";

import Image from "next/image";
import React from "react";
import headline from "public/headline.svg";
import SelectInput2 from "@/components/inputs/select-input/SelectInput2";
import { LocationIcon, ArrowDown } from "public";
import searchicon from "public/searchicon.svg";

const FindJobHero = () => {
  return (
    <section>
      <div className="bg-[#f8f8f8]  md:h-[514px] ">
        <div>
          <Navbar />
          <MobileNavbar />
        </div>

        {/* hero components */}
        <div className="flex flex-col  items-center justify-center">
          <div className="flex  flex-col  pt-[3.5rem]  gap-2 items-center  ">
            <div className="flex  flex-col md:flex-row items-center justify-center gap-3">
              <h1 className="md:text-[48px] text-[30px] font-[600] ">
                Find your{" "}
              </h1>
              <div
                className="flex flex-col  md:h-[66px] md:w-[255px] h-[44px]  w-[300px]
                md:items-start items-center justify-center mt-0 md:mt-[0.9rem] mx-0"
              >
                <h1 className="text-[#26A4FF]  md:text-[48px] text-[30px] font-[600]">
                  dream job
                </h1>
                <Image
                  src={headline}
                  alt="background_pics"
                  className="md:w-[100%] w-[150px] relative h-[94px] md:h-full"
                />
              </div>
            </div>

            <p className="font-[400] text-[18px] text-[#1B1B1B99] leading-[32px] text-center pt-[2rem] px-1">
              Find your next career at companies like HubSpot,Nike and Dropbox
            </p>
          </div>

          <div className="flex flex-col items-start gap-[20px]">
            {/* search Input */}
            <div
              className="flex bg-white items-center md:w-[600px]  lg:w-[1086px] md:h-[104px] w-[100%] mx-2 h-[80px]
             mt-[2rem] gap-3 relative "
            >
              {/* placeholder and search icon */}
              <div className="flex items-center md:w-[485px] w-[100%] px-1 gap-[16px] pt-0  pb-0 pl-[16px]">
                <Image
                  src={searchicon}
                  alt="searchIcon"
                  className=" md:w-[24px] w-[20px] md:h-[24px] h-20px]    "
                />

                <input
                  type="text"
                  placeholder="Job title  or Keyword"
                  className=" border-b-[1px] border-gray  bg-transparent rounded-none focus:outline-none 
            focus:ring-0  md:w-[485px] sm:w-[255px]  w-full h-[60px] items-center  md:mt-2 mt-[0rem] "
                />

                <button
                  className="md:hidden flex bg-[#0046BF] text-white p-3 
               md:w-[107px] h-[45px] w-[60px] mr-[1rem] text-center justify-center items-cente mt-[1rem]"
                  aria-label="Search"
                >
                  Search
                </button>
              </div>

              {/* divider */}
              <div className="border-[1px] border-gray my-1 md:h-[66px] mx-3  hidden  md:flex" />

              {/* florence,italy  */}
              <div className=" md:w-[555px] w-[120px] h-[69px] bg-transparent hidden md:flex  mt-[1rem]">
                <SelectInput2
                  label=""
                  placeholder="Florence, Italy"
                  options={[{ id: "Country", name: "City, Country" }]}
                  overrideStyles="border-r-0 border-l-0 border-t-0 rounded-r-full bg-transparent md:w-full w-[60px] h-[56px] border-b-[1px] border-gray  "
                  iconLeft={<Image src={LocationIcon} alt="" />}
                  onChange={() => {}}
                  iconRight={
                    <div className="flex relative items-center justify-between gap-3 border-none border-b-0">
                      <Image
                        src={ArrowDown}
                        alt=""
                        className="absolute top -left-[5.5rem] w-6 h-6 "
                      />
                      <button
                        className=" bg-[#0046BF] text-white p-3 
               md:w-[107px] h-[50px] w-[60px]"
                        aria-label="Search"
                      >
                        Search
                      </button>
                    </div>
                  }
                />
              </div>
            </div>

            {/* popular text */}
            <div
              className="pt-[1rem] text-center sm:text-start p-2 
          "
            >
              <p className="opacity-70  text-[16px] font-[400] leading-25px] text-[#1B1B1B]">
                Popular : UI Designer, UX Researcher, Android, Admin
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindJobHero;
