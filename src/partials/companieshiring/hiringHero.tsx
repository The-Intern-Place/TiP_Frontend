"use client";

import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import React from "react";

import headline from "public/headline.svg";
import SelectInput2 from "@/components/inputs/select-input/SelectInput2";
import { LocationIcon, ArrowDown } from "public";

const HiringHero = () => {
  return (
    <section>
      <div className="bg-[#f8f8f8]  h-[514px]">
        <div>
          <Navbar />
        </div>

        {/* hero components */}
        <div className="flex flex-col  items-center justify-center">
          <div className="flex  flex-col  pt-[2rem]  gap-2 items-center">
            <div className="flex  flex-col md:flex-row items-center justify-center gap-3">
              <h1 className="md:text-[48px] text-[30px] font-[600] ">
                Find your{" "}
              </h1>
              <div className="flex flex-col  md:h-[66px] md:w-[437px] h-[44px]  w-[300px]  items-center justify-center">
                <h1 className="text-[#26A4FF]  md:text-[48px] text-[30px] font-[600]">
                  dream companies
                </h1>
                <Image src={headline} alt="background_pics" className="" />
              </div>
            </div>

            <p className="font-[400] text-[18px] text-[#1B1B1B99] leading-[32px] text-center pt-[2rem]">
              Find the dream companies you dream work for
            </p>
          </div>

          {/* search Input */}
          <div className="flex flex-col items-start">
            <div className="flex bg-white items-center md:w-[600px]  lg:w-[1186px] md:h-[104px] w-[350px] h-[80px] mt-[2rem] gap-3 relative mx-2">
              {/* placeholder and search icon */}

              <input
                type="text"
                placeholder="Job title  or Keyword"
                className=" border-b-2 border-gray bg-transparent rounded-none focus:outline-none 
            focus:ring-0  md:w-[485px] w-[100%]  h-[60px] items-center md:ml-[3rem] mr-[1rem] md:mt-7 mt-[0rem] pl-3"
              />

              <button
                className="md:hidden flex bg-[#0046BF] text-white p-3 
               md:w-[107px] h-[40px] w-[60px] mr-[1rem] text-center justify-center items-cente mt-[1rem]"
                aria-label="Search"
              >
                Search
              </button>

              <div className="border-[1px] border-[#1976D2] opacity-20 my-2 md:h-[85px] mr-2 hidden  md:flex" />

              <div
                className="mt-[1.2rem] md:w-[585px] w-[120px] h-[69px] gap-0 
 border-b-[2px] border-gray-300   bg-transparent hidden md:flex"
              >
                <SelectInput2
                  label=""
                  placeholder="Florence, Italy"
                  options={[{ id: "Country", name: "City, Country" }]}
                  overrideStyles="border-none rounded-r-full bg-transparent md:w-full w-[60px] h-[56px] border-b-2 border-gray  "
                  iconLeft={<Image src={LocationIcon} alt="" />}
                  onChange={() => {}}
                  iconRight={
                    <div className="flex relative items-center justify-between gap-3">
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

export default HiringHero;
