import Image from "next/image";
import { TechTalents } from "public";
import React from "react";

const TalentsSection = () => {
  return (
    <div className="flex justify-between items-center w-full h-full max-w-[1350px] mx-auto px-6 md:px-10 lg:px-16 xl:px-0">
      <div className="my-14 w-full">
        <div className="flex flex-wrap lg:flex-nowrap gap-4">
          <Image src={TechTalents} width={700} height={500} alt="talents" />
          <div className="lg:-ml-28 lg:pt-16">
            <h1 className="text-4xl text-[#5297DB] font-semibold">
              World of Talents at your reach
            </h1>
            <div className="py-6 space-y-4">
              <h1 className="text-2xl text-[#5297DB] font-semibold">
                Create your company
              </h1>
              <p>
                Create a company profile, assign staffs and find talents for
                your company. Setup a profile in less than 7 minutes.
              </p>
            </div>
            <div>
              <h1 className="text-2xl text-[#5297DB] font-semibold">
                Hire top talents
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentsSection;
