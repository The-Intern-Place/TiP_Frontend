import Image from "next/image";
import React from "react";

import companyOne from "public/images/companypicone.svg";
import companyTwo from "public/images/companypictwo.svg";
import companyThree from "public/images/companypicthree.svg";
import companyFour from "public/images/companypicfour.svg";

import companyOneA from "public/images/companypiconeA.svg";
import companyTwoA from "public/images/companypictwoA.svg";
import companyThreeA from "public/images/companypicthreeA.svg";
import companyFourA from "public/images/companypicfourA.svg";

import squareX from "public/images/squareX.svg";
import squareLinkdin from "public/images/squareLinkdin.svg";

import html from "public/images/html.svg";
import css from "public/images/css.svg";
import javascript from "public/images/javascript.svg";

import r_arrow from "public/images/r_arrow2.svg";

const CompnayProfileContentChunk = () => {
  return (
    <section className="flex flex-col justify-center items-center md:flex-row lg:gap-[64px] ">
      <div
        className="flex flex-col justify-center pt-[24px]  lg:flex-row md:gap-[64px] md:pt-[30px] lg:pr-[124px]  p-[20px] gap-[24px]
   md:pb-[30px] lg:pl-[124px] "
      >
        {/* company prfoile */}
        <div className="flex flex-col gap-[40px] ">
          <div className="flex flex-col gap-[16px]">
            <h1 className="text-[24px] leading-[29px] md:text-[32px] md:leading-[38px] text-[#1B1B1B]  font-clash font-[600]">
              Company Profile
            </h1>
            <p className="text-[16px] leading-[30px]  text-[#515B6F]  font-epilogue font-[400]  ">
              Stripe is a software platform for starting and running internet
              businesses. Millions of businesses rely on Stripe’s software tools
              to accept payments, expand globally, and manage their businesses
              online. Stripe has been at the forefront of expanding internet
              commerce, powering new business models , and supporting the latest
              platforms, from marketplaces to mobile commerce sites. We believe
              that growing the GDP of the internet is a problem rooted in code
              and design, not finance. Stripe is built for developers, makers,
              and creators. We work on solving the hard technical problems
              necessary to build global economic infrastructure—from designing
              highly reliable systems to developing advanced machine learning
              algorithms to prevent fraud.
            </p>
          </div>

          {/* contact */}
          <div className="md:gap-[24px] gap-[16px] flex flex-col">
            <h1 className="text-[24px] leading-[29px] md:text-[32px] md:leading-[38px] text-[#1B1B1B]  font-clash font-[600]">
              Contact
            </h1>
            <ul className="flex flex-col md:flex-row md:gap-[40px] gap-[16px]">
              <li
                className="flex border-[1px] border-[#1976D2] p-[8px] gap-[16px] text-[#1976D2] text-[16px] leading-[25px] 
        font-epilogue font-[500] items-center justify-center w-[240px]  md:w-[204px]"
              >
                <Image
                  src={squareX}
                  alt="company_pics"
                  className="w-[24px] h-[24px]  "
                />{" "}
                twitter.com/stripe{" "}
              </li>
              <li
                className="flex border-[1px] border-[#1976D2] p-[8px] gap-[16px] text-[#1976D2] text-[16px] leading-[25px] 
        font-epilogue font-[500] items-center justify-center w-[332px] md:w-[250px] lg:w-[292px]"
              >
                <Image
                  src={squareLinkdin}
                  alt="company_pics"
                  className="w-[24px] h-[24px] "
                />{" "}
                linkedin.com/company/stripe
              </li>
            </ul>
          </div>

          {/* photo */}
          <div className="md:flex hidden md:flex-row gap-[12px] ">
            <div className="w-[326px] h-[307px] md:w-[355px] md:h-[450px] ">
              <Image
                src={companyOne}
                alt="company_pics"
                className="w-full h-full object-cover md:w-[355px] md:h-[450px] "
              />
            </div>

            <ul className="flex md:flex-col md:gap-[8px] gap-[12px] ">
              <li className="w-[101px] h-[107px] md:w-[284px] md:h-[143px] ">
                {" "}
                <Image
                  src={companyTwo}
                  alt="company_pics"
                  className="w-[101px] h-[107px] md:w-[284px] md:h-[143px] "
                />
              </li>
              <li className="w-[101px] h-[107px] md:w-[284px] md:h-[143px] ">
                {" "}
                <Image
                  src={companyThree}
                  alt="company_pics"
                  className="w-[101px] h-[107px] md:w-[284px] md:h-[143px] "
                />
              </li>
              <li className="w-[101px] h-[107px] md:w-[284px] md:h-[143px] ">
                {" "}
                <Image
                  src={companyFour}
                  alt="company_pics"
                  className="w-[101px] h-[107px] md:w-[284px] md:h-[143px] "
                />
              </li>
            </ul>
          </div>

          {/* photo for mobile view */}
          <div className="flex flex-col  md:hidden gap-[12px] ">
            <div className="w-[326px] h-[307px] md:w-[355px] md:h-[450px] ">
              <Image
                src={companyOneA}
                alt="company_pics"
                className="w-full h-full object-cover md:w-[355px] md:h-[450px] "
              />
            </div>

            <ul className="flex md:flex-col md:gap-[8px] gap-[12px] ">
              <li className="w-[101px] h-[107px] md:w-[284px] md:h-[143px] ">
                {" "}
                <Image
                  src={companyTwoA}
                  alt="company_pics"
                  className="w-[101px] h-[107px] md:w-[284px] md:h-[143px] "
                />
              </li>
              <li className="w-[101px] h-[107px] md:w-[284px] md:h-[143px] ">
                {" "}
                <Image
                  src={companyThreeA}
                  alt="company_pics"
                  className="w-[101px] h-[107px] md:w-[284px] md:h-[143px] "
                />
              </li>
              <li className="w-[101px] h-[107px] md:w-[284px] md:h-[143px] ">
                {" "}
                <Image
                  src={companyFourA}
                  alt="company_pics"
                  className="w-[101px] h-[107px] md:w-[284px] md:h-[143px] "
                />
              </li>
            </ul>
          </div>
        </div>

        {/* Partners */}
        <div className="flex flex-col  gap-[20px]">
          <h1 className="text-[24px] leading-[29px] md:text-[32px] md:leading-[38px] text-[#1B1B1B]  font-clash font-[600]">
            Partners
          </h1>
          <p className="text-[16px] leading-[30px]  text-[#515B6F]  font-epilogue font-[400] ">
            Learn about the companies that have partnered with Urban Tech.
          </p>

          <ul className="flex gap-[8px]">
            <li className="font-[400] font-epilogue text-[#25324B] md:leading-[30px] leading-[25px] flex flex-col p-[12px] gap-[10px] text-center">
              {" "}
              <Image
                src={html}
                alt="company_pics"
                className="w-[74px] h-[74px]  "
              />{" "}
              HTML 5
            </li>
            <li className="font-[400] font-epilogue text-[#25324B] md:leading-[30px] leading-[25px] flex flex-col p-[12px] gap-[10px] text-center">
              {" "}
              <Image
                src={css}
                alt="company_pics"
                className="w-[74px] h-[74px]  "
              />{" "}
              CSS 3
            </li>
            <li className="font-[400] font-epilogue text-[#25324B] md:leading-[30px] leading-[25px] flex flex-col p-[12px] gap-[10px] text-center">
              {" "}
              <Image
                src={javascript}
                alt="company_pics"
                className="w-[74px] h-[74px]  "
              />{" "}
              JavaScript
            </li>
          </ul>

          <ul>
            <li className="flex gap-[16px] font-epilogue font-[600] text-[16px] leading-[25px] text-[#0046BF] items-center">
              View tech stack{" "}
              <Image
                src={r_arrow}
                alt="right_arrow"
                className="w-[24px] h-[24px]"
                width={24}
                height={24}
              />{" "}
            </li>
          </ul>

          {/* divider */}
          <div className="border-[1px] border-[#D6DDEB] md:w-[376px] w-[327px]"></div>

          <h1 className="text-[24px] leading-[29px] md:text-[32px] md:leading-[38px] text-[#1B1B1B]  font-clash font-[600]">
            Office Location
          </h1>
          <p className="text-[16px] leading-[30px]  text-[#1B1B1B]  font-epilogue font-[600]   ">
            Nigeria
          </p>

          {/* divider */}
          <div className="border-[1px] border-[#D6DDEB] md:w-[376px] w-[327px]"></div>
        </div>
      </div>
    </section>
  );
};

export default CompnayProfileContentChunk;
