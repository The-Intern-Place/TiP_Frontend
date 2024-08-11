import Image from "next/image";
import React from "react";
import good from "public/images/tip-good.svg";

const AdvertisePriceChunk = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-[2rem] mb-[8rem]">
      {/*top heading */}
      <div className="flex items-center justify-center  gap-[10px] mt-[3rem]  mb-[1rem]  md:my-[2rem]">
        <h1
          className="font-[600] text-[#1B1B1B] text-[32px]  py-[2rem]
 leading-[38px] font-clash"
        >
          Pricing Rates
        </h1>
      </div>

      <div className="flex  flex-col md:flex-row justify-center items-center gap-[20px]  lg:gap-[25px]">
        {/* Basic Plan */}
        <div className="bg-[#F9FDFF] w-[87%] rounded-[20px]">
          <div className="lg:w-[350px] rounded-[20px] bg-[#FFFFFF] mx-[1rem] my-[1rem]">
            <div className="flex flex-col gap-[10px] p-[1.5rem] mx-[0.3rem]">
              <h1 className="font-clash font-[600] text-[24px] leading-[40px]  text-[#002360]">
                Basic Plan
              </h1>
              <p>Perfect for small businesses </p>
            </div>

            {/* first divider */}
            <div className="w-[320px]  border-[1px] border-[#D6DDEB] mx-[0.7rem]"></div>

            <ul className="flex flex-col gap-[22px]  p-[1rem] mx-[0.5rem]">
              <li className="gap-[6px] flex items-center ">
                <Image src={good} alt="good" className="w-[32px] h-[32px] " />{" "}
                <h1 className="font-[600] font-epilogue text-[#1B1B1B] text-[14px] leading-[22px]">
                  Up to 10,000 impressions
                </h1>
              </li>
              <li className="gap-[6px] flex items-center ">
                <Image src={good} alt="good" className="w-[32px] h-[32px] " />{" "}
                <h1 className="font-[600] font-epilogue text-[#1B1B1B] text-[14px] leading-[22px]">
                  Up to 10,000 impressions
                </h1>
              </li>

              <li className="gap-[6px] flex items-center ">
                <Image src={good} alt="good" className="w-[32px] h-[32px] " />{" "}
                <h1 className="font-[600] font-epilogue text-[#1B1B1B] text-[14px] leading-[22px]">
                  Up to 10,000 impressions
                </h1>
              </li>

              <li className="gap-[6px] flex items-center ">
                <Image src={good} alt="good" className="w-[32px] h-[32px] " />{" "}
                <h1 className="font-[600] font-epilogue text-[#1B1B1B] text-[14px] leading-[22px]">
                  Up to 10,000 impressions
                </h1>
              </li>

              <li className="gap-[6px] flex items-center ">
                <Image src={good} alt="good" className="w-[32px] h-[32px] " />{" "}
                <h1 className="font-[600] font-epilogue text-[#1B1B1B] text-[14px] leading-[22px]">
                  Up to 10,000 impressions
                </h1>
              </li>

              <li className="gap-[6px] flex items-center ">
                <Image src={good} alt="good" className="w-[32px] h-[32px] " />{" "}
                <h1 className="font-[600] font-epilogue text-[#1B1B1B] text-[14px] leading-[22px]">
                  Up to 10,000 impressions
                </h1>
              </li>
            </ul>

            {/* second divider */}
            <div className="w-[320px] border-[1px] border-[#D6DDEB] mx-[0.7rem]"></div>

            <div className="flex flex-col items-center justify-center  p-[10px]">
              <h1 className="font-[700] text-[#002360] text-[30px] leading-[48px] font-epilogue">
                #20, 000
              </h1>
              <button
                className="bg-[#0046BF] w-[147px] h-[42px] gap-[10px] text-[#FFFFFF] 
leading-[22px] text-[14px] font-[700] font-epilogue  "
              >
                Make a Payment
              </button>
            </div>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="bg-div-custom w-[87%] rounded-[20px]">
          <div className="lg:w-[350px] rounded-[20px]  bg-[#FFFFFF] mx-[1rem] my-[1rem]">
            <div className="flex flex-col gap-[10px] p-[1.5rem] mx-[0.3rem]">
              <h1 className="font-clash font-[600] text-[24px] leading-[40px]  text-[#002360]">
                Premium Plan
              </h1>
              <p>Perfect for small businesses </p>
            </div>

            {/* first divider */}
            <div className="w-[320px]  border-[1px] border-[#D6DDEB] mx-[0.7rem]"></div>

            <ul className="flex flex-col gap-[22px]  p-[1rem] mx-[0.5rem]">
              <li className="gap-[6px] flex items-center ">
                <Image src={good} alt="good" className="w-[32px] h-[32px] " />{" "}
                <h1 className="font-[600] font-epilogue text-[#1B1B1B] text-[14px] leading-[22px]">
                  Up to 10,000 impressions
                </h1>
              </li>
              <li className="gap-[6px] flex items-center ">
                <Image src={good} alt="good" className="w-[32px] h-[32px] " />{" "}
                <h1 className="font-[600] font-epilogue text-[#1B1B1B] text-[14px] leading-[22px]">
                  Up to 10,000 impressions
                </h1>
              </li>

              <li className="gap-[6px] flex items-center ">
                <Image src={good} alt="good" className="w-[32px] h-[32px] " />{" "}
                <h1 className="font-[600] font-epilogue text-[#1B1B1B] text-[14px] leading-[22px]">
                  Up to 10,000 impressions
                </h1>
              </li>

              <li className="gap-[6px] flex items-center ">
                <Image src={good} alt="good" className="w-[32px] h-[32px] " />{" "}
                <h1 className="font-[600] font-epilogue text-[#1B1B1B] text-[14px] leading-[22px]">
                  Up to 10,000 impressions
                </h1>
              </li>

              <li className="gap-[6px] flex items-center ">
                <Image src={good} alt="good" className="w-[32px] h-[32px] " />{" "}
                <h1 className="font-[600] font-epilogue text-[#1B1B1B] text-[14px] leading-[22px]">
                  Up to 10,000 impressions
                </h1>
              </li>

              <li className="gap-[6px] flex items-center ">
                <Image src={good} alt="good" className="w-[32px] h-[32px] " />{" "}
                <h1 className="font-[600] font-epilogue text-[#1B1B1B] text-[14px] leading-[22px]">
                  Up to 10,000 impressions
                </h1>
              </li>
            </ul>

            {/* second divider */}
            <div className="w-[320px]  border-[1px] border-[#D6DDEB] mx-[0.7rem]"></div>

            <div className="flex flex-col items-center justify-center  p-[10px]">
              <h1 className="font-[700] text-[#002360] text-[30px] leading-[48px] font-epilogue">
                #50, 000
              </h1>
              <button
                className="bg-[#0046BF] w-[147px] h-[42px] gap-[10px] text-[#FFFFFF] 
leading-[22px] text-[14px] font-[700] font-epilogue  "
              >
                Make a Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertisePriceChunk;
