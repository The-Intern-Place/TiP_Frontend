"use client";
import Image from "next/image";
import React from "react";
import headline from "public/images/headline.svg";
import Navbar from "@/components/navbar/Navbar";
import Button from "@/components/button/Button";

const FoundersHeroTemplateChunk = () => {
  return (
    <section>
      <Navbar bgcolor="#f8f8f8" />
      <div className="bg-[#f8f8f8]  md:h-[360px] w-[100%] ">
        {/* hero components */}
        <div className="flex flex-col  items-center justify-center md:pt-2">
          <div className="flex  flex-col  pt-[3.5rem]  gap-2 items-center  justify-center  ">
            {/* mre about job section */}
            <div className="flex flex-row items-center  gap-[5px] ">
              <h1 className="md:text-[48px] text-[30px] font-[600] text-[#1B1B1B] leading-[42px] md:leading-[52px] font-clash">
                More about{" "}
              </h1>
              <div
                className="flex flex-col 
              md:items-start items-center justify-center mt-0 md:mt-[0.9rem] mx-0"
              >
                <h1 className="text-[#26A4FF] md:text-[48px] text-[30px] font-[600] font-clash md:42px leading-[52px]">
                  TIP
                </h1>
                <Image
                  src={headline}
                  alt="background_pics"
                  className="md:w-[79px] w-[50px] relative h-[5px]"
                />
              </div>
            </div>

            <p
              className="font-[400] text-[18px] w-full font-epilogue text-[#1B1B1B]
           leading-[32px] text-center pt-1 px-1 lg:px-0 lg:w-[782px]"
            >
              Join us at The Intern Place, and let's build a brighter future
              together. Whether you're a job seeker ready to take the next step
              or an employer looking to attract top talent, we're here to help
              you succeed.
            </p>
          </div>

          {/* button */}

          <Button
            overrideStyles=" bg-[#0046BF] text-white p-3   h-[42px] rounded-none
             max-w-[139px] md:h-[50px]  mx-3 mt-[1rem] text-[14px] leading-[22px] font-epilogue"
            aria-label="Search"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FoundersHeroTemplateChunk;
