"use client";

import React from "react";

import { perksandbenefit } from "@/utils/data/job-description";

function Perksandbenefits() {
  return (
    <div className="w-full h-full max-w-[1350px] mt-10  mb-6 gap-[24px]">
      <div className="mb-3 ml-4">
        <h1 className="font-bold text-3xl">Perks & Benefits</h1>
        <p className="">This job comes with several perks benefits</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full  p-[10px]">
        {perksandbenefit.map((p) => (
          <div
            key={p.id}
            className=" rounded-[4px] gap-[24px] md:max-w-[274px] w-full"
          >
            <p.Icon />
            <h2 className="text-gray-900 text-3xl font-extrabold mb-2 mt-4">
              {p.title}
            </h2>
            <p className="text-lg font-normal  w-full text-grayishBlue mb-4 mt-4">
              {p.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Perksandbenefits;
