"use client";

import React from "react";
import AIcon from "@assets/icons/AIcon";
import CupIcon from "@assets/icons/CupIcon";
import HolIcon from "@assets/icons/HolIcon";
import MedIcon from "@assets/icons/MedIcon";
import PalmsIcon from "@assets/icons/PalmsIcon";
import TrainIcon from "@assets/icons/TrainIcon";
import VidIcon from "@assets/icons/VidIcon";

function Perksandbenefits() {
  return (
    <div className="w-full h-full max-w-[1350px] mt-10  mb-6 gap-[24px]">
      <div className="mb-3 ml-4">
        <h1 className="font-bold text-3xl">Perks & Benefits</h1>
        <p className="">This job comes with several perks benefits</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[24px] w-full  p-[10px]">
        <div className=" rounded-[4px] gap-[24px] md:max-w-[274px] w-full">
          <MedIcon />
          <h2 className="text-gray-900 text-3xl font-extrabold mb-2 mt-4">
            Full Healthcare
          </h2>
          <p className="text-lg font-normal  w-full text-[#515B6F] mb-4 mt-4">
            We believe in thriving communities and that starts with our team
            being happy and healthy.
          </p>
        </div>

        <div className=" rounded-[4px] gap-[24px] md:max-w-[274px] w-full">
          <HolIcon />
          <h2 className="text-gray-900 text-3xl font-extrabold mb-2 mt-4">
            Unlimited Vacation
          </h2>
          <p className="text-lg font-normal   text-[#515B6F] mb-4 mt-4">
            We believe you should have a flexible schedule that makes space for
            family, wellness, and fun.
          </p>
        </div>

        <div className=" rounded-[4px] gap-[24px] md:max-w-[274px] w-full">
          <VidIcon />
          <h2 className="text-gray-900 text-3xl font-extrabold mb-2 mt-4">
            Skiill Development
          </h2>
          <p className="text-lg font-normal  w-full text-[#515B6F] mb-4 mt-4 ">
            We believe in always learning and leveling up our skills. Whether
            it's a conference or online course..
          </p>
        </div>

        <div className=" rounded-[4px] gap-[24px] md:max-w-[274px] w-full">
          <AIcon />
          <h2 className="text-gray-900 text-3xl font-extrabold mb-2 mt-4">
            Team Summit
          </h2>
          <p className="text-lg font-normal  w-full text-[#515B6F] mb-4 mt-4">
            Every 6 months we have a full team summit where we have fun,
            reflect, and plan for the upcoming quarter.
          </p>
        </div>

        <div className=" rounded-[4px] gap-[24px] md:max-w-[274px] w-full">
          <CupIcon />
          <h2 className="text-gray-900  text-3xl font-extrabold mb-2 mt-4">
            Remote Working
          </h2>
          <p className="text-lg font-normal   text-[#515B6F] mb-4 mt-4">
            You know how you perform your best. Work from home, coffee shop or
            anywhere when you feel like it.
          </p>
        </div>

        <div className=" rounded-[4px] gap-[24px] md:max-w-[274px] w-full">
          <TrainIcon />
          <h2 className="text-gray-900 text-3xl font-extrabold mb-2 mt-4">
            Commuter Benefits
          </h2>
          <p className="text-lg font-normal  w-full text-[#515B6F] mb-4 mt-4">
            We’re grateful for all the time and energy each team member puts
            into getting to work every day.
          </p>
        </div>

        <div className=" rounded-[4px] gap-[24px] md:max-w-[274px] w-full">
          <PalmsIcon />
          <h2 className="text-gray-900  text-3xl font-extrabold mb-2 mt-4">
            We Give Back
          </h2>
          <p className="text-lg font-normal  text-[#515B6F] mb-4">
            We anonymously match any donation our employees make (up to $/€ 600)
            so they can support the organizations they care about most—times
            two.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Perksandbenefits;
