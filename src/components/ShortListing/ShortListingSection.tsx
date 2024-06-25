import React from "react";
import Button from "@/components/button/Button";

function ShortListingSection() {
  return (
    <main className="w-full h-full max-w-[1350px] mt-10 mx-auto mb-6">
      <div className="grid justify-items-center mb-12">
        <h1 className="lg:text-[3.5rem] md:text-[45px] text-4xl font-semibold leading-10 mb-4 ml-8">
          TiP <span className="text text-[#26A4FF]">Shortlisting</span> Service
        </h1>
        <p className="text sm:w-3/6 mb-3 w-5/6">
          We've provide a comprehensive solution that streamlines candidate
          selection, saving you time and ensuring you find the perfect match for
          your internship positions
        </p>
        <Button overrideStyles="border-0 rounded-none w-44 sm:w-44 align-items-center">
          Contact Us
        </Button>
      </div>
      <div className="flex flex-col md:flex-row sm:ml-24">
        <div className="max-w-sm p-6 mt-12">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-center">
            How It Works
          </h5>

          <p className="mb-3">
            Our goal is to empower you with help you make informed hiring
            decisions swiftly and effectively, ultimately helping you build a
            talented team that drives your organization forward.
          </p>

          <div className="flex flex-row">
            <Button overrideStyles="border-0 rounded-none w-44  mr-5">
              See FAQs
            </Button>

            <Button overrideStyles="border-2 rounded-none w-44 bg-white text-[#0046BF] sm:text-[#0046BF]">
              Reach Us
            </Button>
          </div>
        </div>

        <div className=" grid grid-cols-2 md:grid-cols-2 sm:flex-row flex-wrap mb-4 ml-4 gap-4">
          <div className="p-6 w-full sm:w-1/2 mb-4 px-2  rounded-lg">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#0046BF]">
              Step 1
            </h5>

            <p className="mb-3">
              We effectively identify the most suitable candidates for your role
              positions.
            </p>
          </div>
          <div className="p-6 w-full sm:w-1/2 mb-4 px-2  rounded-lg">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#0046BF]">
              Step 2
            </h5>

            <p className="mb-3">
              Initiate the Work map and skills assessment. This step provides
              valuable insights into candidates process and strengths.
            </p>
          </div>
          <div className="p-6 w-full sm:w-1/2 mb-4 px-2  rounded-lg">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#0046BF]">
              Step 3
            </h5>

            <p className="mb-3">
              We review the results and analyze how each candidate's work style
              aligns with the requirements of the role.
            </p>
          </div>
          <div className="p-6 w-full sm:w-1/2 mb-4 px-2  rounded-lg">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#0046BF]">
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
  );
}

export default ShortListingSection;
