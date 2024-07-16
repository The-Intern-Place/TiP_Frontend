import Button from "@/components/button/Button";
import Navbar from "@/components/navbar/Navbar";
import headline from "public/images/headline.svg";
import Image from "next/image";
import React from "react";

const ShortListingServiceChunk = () => {
  return (
    <>
      <Navbar />
      <main className="w-full h-full max-w-[1350px] mt-10 mx-auto mb-6">
        <div className="grid justify-items-center sm:mb-24">
          <div className="flex flex-row justify-center lg:text-[3.5rem] md:text-[45px] text-3xl w-44 sm:w-96 font-semibold leading-10 mb-4 sm:mb-10">
            <h1>TiP</h1>
            <div className="flex flex-col md:h-[66px] md:w-[437px] h-[44px] w-[300px] items-center justify-center gap-2 ml-2 mt-1 sm:mt-1 mr-2">
              <span className="text text-[#26A4FF] -mb-2 sm:mb-1">Shortlisting</span>{" "}
              <Image src={headline} alt="background_pics" className="" />
            </div>

            <h1>Service</h1>
          </div>
          <p className="text sm:w-3/6 mb-3 sm:mb-5 w-5/6">
            We've provide a comprehensive solution that streamlines candidate
            selection, saving you time and ensuring you find the perfect match
            for your internship positions
          </p>
          <Button overrideStyles="border-0 rounded-none w-32 sm:w-44 align-items-center fit">
            Contact Us
          </Button>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="max-w-sm p-6 mt-12">
            <h5 className="mb-2 text-2xl font-bold tracking-tight">
              How It Works
            </h5>

            <p className="mb-6 sm:w-96">
              Our goal is to empower you with help you make informed hiring
              decisions swiftly and effectively, ultimately helping you build a
              talented team that drives your organization forward.
            </p>

            <div className="flex flex-row">
              <Button overrideStyles="border-0 rounded-none w-44 mr-5 fit">
                See FAQs
              </Button>

              <Button overrideStyles="border-2 rounded-none w-44 bg-white  sm:text-[#0046BF] fit">
                <p className="text-[#0046BF]">Reach Us</p>
              </Button>
            </div>
          </div>

          <div className=" grid md:grid-cols-2 sm:gap-4 sm:flex-row mb-4 ml-4 sm:ml-60 gap-4">
            <div className="p-6 w-72 sm:w-72 px-2 rounded-lg">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#1976D2]">
                Step 1
              </h5>

              <p>
                We effectively identify the most suitable candidates for your
                role positions.
              </p>
            </div>
            <div className="p-6 w-72 sm:w-72 px-2 rounded-lg">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#1976D2]">
                Step 2
              </h5>

              <p>
                Initiate the Work map and skills assessment. This step provides
                valuable insights into candidates process and strengths.
              </p>
            </div>
            <div className="p-6 w-72 sm:w-72 px-2  rounded-lg">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#1976D2]">
                Step 3
              </h5>

              <p>
                We review the results and analyze how each candidate's work
                style aligns with the requirements of the role.
              </p>
            </div>
            <div className="p-6 w-72 sm:w-72 px-2  rounded-lg">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#1976D2]">
                Step 4
              </h5>

              <p className="mb-3">
                Finally, we match candidates from our talent pipeline with
                suitable roles based on their skills, and availability.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ShortListingServiceChunk;
