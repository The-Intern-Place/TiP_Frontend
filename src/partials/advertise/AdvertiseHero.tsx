import React from "react";
import Image from "next/image";
import { Underline } from "@assets/images";

const AdvertiseHero = () => {
  return (
    <section className="bg-[#FAFBFC]">
      <div className="flex justify-center items-center mx-auto flex-col gap-5 py-9">
        <div className="bg-[#FAFBFC] lg:w-[782px] text-center gap-[24px]">
          <h1 className="lg:text-5xl text-[36px] md:text- leading-[52px]  font-[600] font-clash">
            <span className="text-[#26A4FF] relative">
              Advertise{" "}
              <span
                className="absolute lg:top-14 top-10 md:right-0 right-1 items-center 
               md:items-end "
              >
                <Image
                  alt=""
                  src={Underline}
                  className="md:w-[170px] h-[14px] "
                />
              </span>
            </span>{" "}
            with TiP{" "}
          </h1>

          {/* text */}
          <p
            className="text-center md:px-10 px-[1rem] lg:px-0 font-[400] font-epilogue  py-4  w-[100%] leading-[32px] text-[16px ]
           md:leading-[36px] leading-[32px] md:text-[18px] text-[#1B1B1B] md:mt-[2rem]"
          >
            Advertising with The Intern Place provides businesses with an
            effective way to reach a highly relevant audience, enhance their
            brand presence, and drive engagement with their opportunities and
            services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdvertiseHero;
