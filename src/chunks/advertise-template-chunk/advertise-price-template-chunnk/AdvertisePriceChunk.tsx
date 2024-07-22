import Image from "next/image";
import React from "react";

import { priceImpression } from "@/utils/data/adveertise";
import Button from "@/components/button/Button";

const AdvertisePriceChunk = () => {
  return (
    <section className="flex flex-col items-center justify-center md:mt-[2rem] mb-[3rem] md:mb-[8rem]">
      {/*top heading */}
      <div className="flex items-center justify-center  gap-[10px] mt-[3rem]  mb-[1rem]  md:my-[2rem]">
        <h1 className="font-[600] text-[#1B1B1B] text-[32px] leading-[38px] font-clash">
          Pricing Rates
        </h1>
      </div>

      <div className="flex  flex-col md:flex-row justify-center items-center gap-[20px]  lg:gap-[25px]">
        {/* Basic Plan */}
        <div className="bg-[#F9FDFF] w-[100%]   rounded-[20px]">
          <div className="lg:w-[350px] rounded-[20px] border-[1px] bg-[#FFFFFF] border-[#D6DDEB] mx-[1rem] my-[1rem]">
            <div className="flex flex-col p-[1.5rem] mx-[0.3rem]">
              <h1 className="font-clash font-[600] text-[24px] leading-[40px]  text-[#002360]">
                Basic Plan
              </h1>
              <p className="font-[500] text-[16px] leading-[32px] font-epilogue text-[#1B1B1B99] ">
                Perfect for small businesses{" "}
              </p>
            </div>

            {/* first divider */}
            <div className="md:w-[320px] w-[90%]  border-[1px] border-[#D6DDEB] mx-[0.7rem]"></div>

            {priceImpression.map((p) => (
              <ul
                key={p.id}
                className="flex flex-col gap-[22px]  p-[1rem] mx-[0.5rem]"
              >
                <li className="gap-[6px] flex items-center ">
                  <Image src={p.img} alt="good" className="w-5 h-5 " />{" "}
                  <h1 className="font-[600] font-epilogue text-[#1B1B1B] text-[14px] leading-[22px]">
                    {p.text}
                  </h1>
                </li>
              </ul>
            ))}

            {/* second divider */}
            <div className="md:w-[320px] w-[90%]  border-[1px] border-[#D6DDEB] mx-[0.7rem]"></div>

            <div className="flex flex-col items-center justify-center  gap-[10px] my-[2rem]  ">
              <h1 className="font-[700] text-[#002360] text-[30px] leading-[48px] font-epilogue">
                #20,000
              </h1>

              <Button overrideStyles="rounded-none " fit>
                Make a payment{" "}
              </Button>
            </div>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="bg-div-custom w-[100%]   rounded-[20px]">
          <div className="lg:w-[350px] rounded-[20px] border-[1px] bg-[#FFFFFF] border-[#D6DDEB] mx-[1rem] my-[1rem]">
            <div className="flex flex-col p-[1.5rem] mx-[0.3rem]">
              <h1 className="font-clash font-[600] text-[24px] leading-[40px]  text-[#002360]">
                Premium Plan
              </h1>
              <p className="font-[500] text-[16px] leading-[32px] font-epilogue text-[#1B1B1B99]">
                Ideal for large businesses{" "}
              </p>
            </div>

            {/* first divider */}
            <div className="md:w-[320px]  border-[1px] border-[#D6DDEB] mx-[0.7rem]"></div>
            {priceImpression.map((p) => (
              <ul
                key={p.id}
                className="flex flex-col gap-[22px]  p-[1rem] mx-[0.5rem] w-[100%]"
              >
                <li className="gap-[6px] flex items-center ">
                  <Image src={p.img} alt="good" className="w-5 h-5" />{" "}
                  <h1 className="font-[600] font-epilogue text-[#1B1B1B] text-[14px] leading-[22px]">
                    {p.text}
                  </h1>
                </li>
              </ul>
            ))}

            {/* second divider */}
            <div className=" md:w-[320px] w-[90%] border-[1px] border-[#D6DDEB] mx-[0.7rem]"></div>

            <div className="flex flex-col items-center justify-center  gap-[10px] my-[2rem]">
              <h1 className="font-[700] text-[#002360] md:text-[30px] md:leading-[48px] font-epilogue">
                #50,000
              </h1>

              <Button overrideStyles="rounded-none " fit>
                Make a payment{" "}
              </Button>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertisePriceChunk;
