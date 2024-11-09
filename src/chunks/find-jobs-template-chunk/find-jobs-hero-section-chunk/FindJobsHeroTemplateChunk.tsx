"use client";
import Image from "next/image";
import React from "react";
import headline from "public/images/headline.svg";
import Navbar from "@/components/navbar/Navbar";
import FindJobsSearchChunk from "../find-jobs-search-chunk/FindJobsSearchChunk";

const FindJobsHeroTemplateChunk = () => {
  return (
    <section>
      <Navbar />
      <div className="bg-[#f8f8f8]">
        {/* hero components */}
        <div className=" w-[95%] max-w-[1350px] mx-auto">
          <div className="flex flex-col  items-center justify-center md:pt-2">
            <div className="flex  flex-col  pt-[3.5rem]  gap-2 items-center mb-4 ">
              {/* find your dream job section */}
              <div className="flex  flex-col md:flex-row items-center justify-center gap-[24px]  top-[205px]">
                <h1 className="text-[48px] font-[600] text-[#002360] leading-[52px] font-clash">
                  Find your{" "}
                </h1>
                <div
                  className="flex flex-col  md:h-[66px] md:w-[255px] h-[44px]  w-[300px]
                md:items-start items-center justify-center mt-0 md:mt-[0.9rem] mx-0"
                >
                  <h1 className="text-[#26A4FF] text-[48px] font-[600] font-clash leading-[52px]">
                    dream job
                  </h1>
                  <Image
                    src={headline}
                    alt="background_pics"
                    className="md:w-[100%] w-[241px] relative h-[14px] md:h-full"
                  />
                </div>
              </div>

              <p
                className="font-[400] md:text-[18px] text-[16px] leading-[30px]  font-epilogue text-[#515B6F] md:leading-[32px]
            text-center pt-1 px-1"
              >
                Find your next career at companies like HubSpot, Nike and
                Dropbox
              </p>
            </div>

            <div className="w-full">
              {/* search Input */}
              <FindJobsSearchChunk isInDashboard={false} />

              {/* popular text */}
              <div className="mt-3 mb-6">
                <p className="opacity-70 font-epilogue text-[16px] font-[400] leading-25px] text-[#1B1B1B]">
                  Popular : UI Designer, UX Researcher, Android, Admin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindJobsHeroTemplateChunk;
