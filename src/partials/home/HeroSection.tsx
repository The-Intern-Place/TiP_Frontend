import SelectInput2 from "@/components/inputs/select-input/SelectInput2";
import Image from "next/image";
import { LocationIcon, ArrowDown, HeroImg } from "public";
import IC_Search from "public/icons/IC_Search";
import React from "react";

const HeroSection = () => {
  return (
    <div className="lg:flex justify-around gap-5 items-center w-full h-full max-w-[1350px] mx-auto px-6 md:px-10 lg:px-16 xl:px-0 pt-10">
      <div className="lg:space-y-6 space-y-3">
        <div className="lg:space-y-8 space-y-2">
          <h1 className="lg:text-[3.5rem] md:text-[45px] text-4xl font-semibold leading-10">
            Build Your <span className="text-[#1976D2]">Career.</span>
          </h1>
          <h1 className="lg:text-[3.5rem] md:text-[45px] text-4xl font-semibold leading-10">
            Build Your <span className="text-[#1976D2] w-full">Company.</span>
          </h1>
        </div>
        <p className="max-w-[600px]">
          TiP aims to be the leading internship talent community, connecting
          highly qualified and diverse candidates with global opportunities. Our
          mission is to ensure equal access to internships and entry-level jobs
          for students and graduates worldwide.
        </p>

        <div className="flex bg-white  rounded-full w-full md:w-[450px]">
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
              overrideStyles="border-none rounded-r-full bg-transparent w-full hidden md:flex"
              iconLeft={<Image src={LocationIcon} alt="" />}
              onChange={() => {}}
              iconRight={
                <div className="flex relative items-center justify-between gap-3">
                  <Image
                    src={ArrowDown}
                    alt=""
                    className="absolute top lg:-left-[3.5rem] -left-[2.5rem] w-6 h-6"
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
      </div>

      <Image
        src={HeroImg}
        width={450}
        height={400}
        alt="Hero Image"
        className="lg:block hidden"
      />
    </div>
  );
};

export default HeroSection;
