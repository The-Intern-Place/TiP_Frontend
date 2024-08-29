import React from "react";
import { Tosin } from "@assets/images";
import Image from "next/image";

import {
  educations,
  experiences,
  sideprofiledata,
} from "@/utils/data/dashboardprofile";
import { ExperienceProfileCardProps } from "@/components/cards/dashboard-profile-card/experience-profile-card/ExperienceProfileCard.type";
import ExperienceProfileCard from "@/components/cards/dashboard-profile-card/experience-profile-card/ExperienceProfileCard";
import addicon from "public/images/plus_Icon.svg";
import { EducationProfileCardProps } from "@/components/cards/dashboard-profile-card/educations-profile-card/EducationProfileCard.type";
import EducationProfileCard from "@/components/cards/dashboard-profile-card/educations-profile-card/EducationsProfileCard";

import editicon from "public/images/edit_Icon.svg";
import portfolio from "public/images/portfolio (1).svg";
import portfoliotwo from "public/images/portfolio (2).svg";
import portfoliothree from "public/images/portfolio (3).svg";

import greenflag from "public/images/greenflag_icon.svg";
import righticon from "public/images/bluerighticon.svg";

import location from "public/images/location.svg";

const ProfileTemplateChunk = () => {
  return (
    <section className="flex gap-[24px] py-[1.5rem]">
      <div className="flex flex-col max-w-[728px] w-full">
        {/* details section */}
        <div className=" flex p-[24px] gap-[24px] bg-[#FFFFFF] border-[1px]">
          <div className="w-[140px] h-[140px] rounded-[196px]">
            <Image
              src={Tosin}
              alt="tosin"
              className="w-[140px] h-[140px] rounded-[196px] "
            />
          </div>

          <div className="flex justify-between w-full gap-[10px]">
            <div className="flex flex-col gap-[8px]">
              <h1 className="text-[24px] leeading-[40px] text-[#002360] font-clash font-[600]">
                Tosin Eme
              </h1>
              <p className="text-[#515B6F] font-[400] text-[18px] leading-[28px] font-epilogue">
                Product Designer
              </p>
              <div className="flex gap-[8px] items-center">
                <Image
                  src={location}
                  alt="location_flag"
                  className="w-[24px]  h-[24px]"
                />
                <p className="text-[#515B6F] font-[400] text-[18px] leading-[28px] font-epilogue">
                  Lagos, Nigeria
                </p>
              </div>
              <div className="border-[1px] border-[#CCCCF5] w-[137px] h-[50px] flex items-center justify-center">
                {" "}
                <h1 className="text-[#4640DE] font-[700] font-epilogue text-[16px] leading-[25px]">
                  Edit Profile
                </h1>
              </div>
            </div>

            <div className="flex ">
              <Image
                src={greenflag}
                alt="green_flag"
                className="w-[24px]  h-[24px]"
              />
              <h1 className="text-[16px] leeading-[25px] text-[#56CDAD] font-clash font-[600] uppercase">
                Open for opportunities
              </h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[16px] border-[1px] border-[#D6DDEB] p-[24px] bg-[#FFFFFF] ">
          <div className="flex max-w-full items-center w-full justify-between ">
            <h1 className="font-epilogue font-[600] text-[20px] leading-[24px] text-[#002360]">
              About Me
            </h1>

            <div className="w-[40px] h-[40px] border-[1px] border-[#D6DDEB flex items-center justify-center">
              <Image
                src={addicon}
                alt="experience_image"
                className="w-[20px] h-[20px]"
              />
            </div>
          </div>

          <p className="font-[400] font-epilogue text-[#515B6F] text-[16px] leading-[30px]">
            I’m a product designer + filmmaker currently working remotely at
            Twitter from beautiful Manchester, United Kingdom. I’m passionate
            about designing digital products that have a positive impact on the
            world.
          </p>

          <p className="font-[400] font-epilogue text-[#515B6F] text-[16px] leading-[30px]">
            For 10 years, I’ve specialised in interface, experience &
            interaction design as well as working in user research and product
            strategy for product agencies, big tech companies & start-ups.
          </p>
        </div>

        {/* experience */}

        <div className="border-[1px] border-[#D6DDEB] w-full pt-[24px] pr-[1px] pb-[24px] pl-[1px]  bg-[#FFFFFF]">
          <div className="flex max-w-full items-center w-full justify-between pl-[24px] pr-[24px]">
            <h1 className="font-epilogue font-[600] text-[20px] leading-[24px] text-[#002360]">
              Experiences
            </h1>

            <div className="w-[40px] h-[40px] border-[1px] border-[#D6DDEB flex items-center justify-center">
              <Image
                src={addicon}
                alt="experience_image"
                className="w-[20px] h-[20px]"
              />
            </div>
          </div>

          <div className="">
            {experiences.map((e: ExperienceProfileCardProps, i: number) => (
              <ExperienceProfileCard
                key={i}
                id={e.id}
                img={e.img}
                title={e.title}
                subtitle={e.subtitle}
                date={e.date}
                condition={e.condition}
                description={e.description}
              />
            ))}
          </div>
        </div>

        {/* Educations */}

        <div className="border-[1px] border-[#D6DDEB] w-full pt-[24px] pr-[1px] pb-[24px] pl-[1px] bg-[#FFFFFF]">
          <div className="flex max-w-full items-center w-full justify-between pl-[24px] pr-[24px]">
            <h1 className="font-epilogue font-[600] text-[20px] leading-[24px] text-[#002360]">
              Educations
            </h1>

            <div className="w-[40px] h-[40px] border-[1px] border-[#D6DDEB flex items-center justify-center">
              <Image
                src={addicon}
                alt="experience_image"
                className="w-[20px] h-[20px]"
              />
            </div>
          </div>

          <div className="flex flex-col">
            {educations.map((e: EducationProfileCardProps, i: number) => (
              <EducationProfileCard
                key={i}
                id={e.id}
                img={e.img}
                title={e.title}
                subtitle={e.subtitle}
                date={e.date}
                description={e.description}
              />
            ))}

            <h1 className="flex tect-center items-center justify-center text-[#1976D2] font-epilogue font-[600] text-[16px] leading-[25px]">
              Show 2 more educations
            </h1>
          </div>
        </div>

        {/* skills */}

        <div className="flex flex-col bg-[#FFFFFF] border-[1px] border-[#D6DDEB] gap-[16px] p-[24px]">
          <div className="flex max-w-full items-center w-full justify-between ">
            <h1 className="font-epilogue font-[600] text-[20px] leading-[24px] text-[#002360]">
              Skills
            </h1>

            <div className="flex gap-[8px]">
              <div className="w-[40px] h-[40px] border-[1px] border-[#D6DDEB flex items-center justify-center">
                <Image
                  src={addicon}
                  alt="experience_image"
                  className="w-[20px] h-[20px]"
                />
              </div>

              <div className="w-[40px] h-[40px] border-[1px] border-[#D6DDEB flex items-center justify-center">
                <Image
                  src={editicon}
                  alt="experience_image"
                  className="w-[20px] h-[20px]"
                />
              </div>
            </div>
          </div>

          <ul className="flex flex-wrap gap-[10px]">
            <li className="w-[148px] h-[38px] bg-[#F8F8FD] gap-[16px] pt-[4px] pr-[12px] pb-[4px] pl-[12px]">
              <h1 className="font-epilogue font-[400] text-[#1976D2] text-[16px] leading-[30px] text-center">
                Communication
              </h1>
            </li>
            <li className="w-[98px] h-[38px] bg-[#F8F8FD] gap-[16px] pt-[4px] pr-[12px] pb-[4px] pl-[12px]">
              <h1 className="font-epilogue font-[400] text-[#1976D2] text-[16px] leading-[30px] text-center">
                Analytics
              </h1>
            </li>
            <li className="w-[144px] h-[38px] bg-[#F8F8FD] gap-[16px] pt-[4px] pr-[12px] pb-[4px] pl-[12px]">
              <h1 className="font-epilogue font-[400] text-[#1976D2] text-[16px] leading-[30px] text-center">
                Facebook Ads
              </h1>
            </li>
            <li className="w-[168px] h-[38px] bg-[#F8F8FD] gap-[16px] pt-[4px] pr-[12px] pb-[4px] pl-[12px]">
              <h1 className="font-epilogue font-[400] text-[#1976D2] text-[16px] leading-[30px] text-center">
                Content Planning
              </h1>
            </li>
            <li className="w-[195px] h-[38px] bg-[#F8F8FD] gap-[16px] pt-[4px] pr-[12px] pb-[4px] pl-[12px]">
              <h1 className="font-epilogue font-[400] text-[#1976D2] text-[16px] leading-[30px] text-center ">
                Community Manager
              </h1>
            </li>
          </ul>
        </div>

        {/* PortFolios */}
        <div className="bg-[#FFFFFF] flex flex-col p-[24px] gap-[16px]">
          <div className="flex max-w-full items-center w-full justify-between ">
            <h1 className="font-epilogue font-[600] text-[20px] leading-[24px] text-[#002360]">
              Portfolios
            </h1>

            <div className="w-[40px] h-[40px] border-[1px] border-[#D6DDEB flex items-center justify-center">
              <Image
                src={addicon}
                alt="experience_image"
                className="w-[20px] h-[20px]"
              />
            </div>
          </div>

          <ul className="flex  gap-[24px] max-w-full">
            <li className="flex flex-col w-[203px] gap-[10px]">
              <Image
                src={portfolio}
                alt="experience_image"
                className="w-[203px] h-[152px]"
              />
              <h1 className="font-[500] text-[16px] leading-[32px] text-[#25324B] font-epilogue">
                Funiro - Landing Page for furniture shop
              </h1>
            </li>

            <li className="flex flex-col w-[203px] gap-[10px]">
              <Image
                src={portfoliotwo}
                alt="experience_image"
                className="w-[203px] h-[152px]"
              />
              <h1 className="font-[500] text-[15.7px] leading-[32px] text-[#25324B] font-epilogue w-full">
                Growthly - SaaS Analytics & Sales Website
              </h1>
            </li>

            <li className="flex flex-col w-[203px] gap-[10px]">
              <Image
                src={portfoliothree}
                alt="experience_image"
                className="w-[203px] h-[152px]"
              />
              <h1 className="font-[500] text-[16px] leading-[32px] text-[#25324B] font-epilogue">
                Clinically - clinic & health care website
              </h1>
            </li>
          </ul>

          <div className="gap-[8px] pt-[2px] pr-[10px] pb-[2px] pl-[10px]  items-center flex  justify-end w-full ">
            <h1 className="text-[16px] leading-[25px] text-[#1976D2] font-epilogue">
              See all
            </h1>

            <Image
              src={righticon}
              alt="right-icon"
              className="w-[16px] h-[11px] "
            />
          </div>
        </div>
      </div>

      {/* sidebar section */}
      <div>
        <div className="flex flex-col gap-[24px] max-w-[352px] w-full">
          {sideprofiledata.map((a) => (
            <div
              className="border-[1px] border-[#D6DDEB] bg-[#FFFFFF] p-[24px] gap-[16px] h-[306px] flex flex-col"
              key={a.id}
            >
              <div>
                <h1 className="text-[#002360] font-[600] text-[20px] leading-[24px] font-epilogue">
                  {a.title}
                </h1>
              </div>

              <div className="flex flex-col gap-[16px]">
                <ul className="flex gap-[16px]">
                  <li className="w-[24px] h-[24px]" key="imgFirst">
                    <Image
                      src={a.imgMail || a.imgFirst}
                      alt="icon"
                      className="w-[24px] h-[24px]"
                    />
                  </li>
                  <li key="firstText">
                    <span className="text-[#515B6F] font-epilogue text-[16px] leading-[30px] font-[400]">
                      {a.labelFirst}
                    </span>{" "}
                    <br />
                    <h1 className="text-[#002360] text-[16px] leading-[30px] font-[400] font-epilogue">
                      {a.firstText}
                    </h1>
                    {a.instaText && (
                      <h1 className="font-[400] text-[16px] leading-[30px] font-epilogue text-[#0046BF]">
                        {a.instaText}
                      </h1>
                    )}
                  </li>
                </ul>

                <ul className="flex gap-[16px]">
                  <li className="w-[24px] h-[24px]" key="imgSecond">
                    <Image
                      src={a.imgPhone || a.imgSecond}
                      alt="icon"
                      className="w-[24px] h-[24px]"
                    />
                  </li>
                  <li key="secondText">
                    <span className="text-[#515B6F] font-epilogue text-[16px] leading-[30px] font-[400]">
                      {a.labelSecond}
                    </span>{" "}
                    <br />
                    <h1 className="text-[#002360] text-[16px] leading-[30px] font-[400] font-epilogue">
                      {a.secondText}
                    </h1>
                    {a.twitterText && (
                      <h1 className="font-[400] text-[16px] leading-[30px] font-epilogue text-[#0046BF]">
                        {a.twitterText}
                      </h1>
                    )}
                  </li>
                </ul>

                <ul className="flex gap-[16px]">
                  <li className="w-[24px] h-[24px]" key="imgThird">
                    <Image
                      src={a.imgLang || a.imgThird}
                      alt="icon"
                      className="w-[24px] h-[24px]"
                    />
                  </li>
                  <li key="thirdText">
                    <span className="text-[#515B6F] font-epilogue text-[16px] leading-[30px] font-[400]">
                      {a.labelThird}
                    </span>{" "}
                    <br />
                    <h1 className="text-[#002360] text-[16px] leading-[30px] font-[400] font-epilogue">
                      {a.thirdText}
                    </h1>
                    {a.webText && (
                      <h1 className="font-[400] text-[16px] leading-[30px] font-epilogue text-[#0046BF]">
                        {a.webText}
                      </h1>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileTemplateChunk;
