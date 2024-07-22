import Image from "next/image";
import React from "react";

import mission_gilf from "/public/images/tip_gilf.gif";
import story_gilf from "/public/images/tip_gilf1.gif";
import vision_gilf from "/public/images/tip_gilf3.gif";

const FoundersAllTemplateChunk = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      {/* vission,story section */}
      <div className="flex flex-col justify-center items-center  max-w-[1084px] w-full mt-[3rem] p-2  lg:px-[4rem] md:pl-[4rem] lg:pl-[15rem] ">
        {/* story section */}
        <div className="flex md:items-center  justify-end md:h-[200px] md:w-[702px] lg:w-[842px] sm:w-[500px] w-full lg:h-[200px]  gap-[10px]   lg:ml-[14rem]">
          <div>
            <h1
              className="md:text-[72px] text-[32px]  pt-[2rem] md:pt-0
             text-light-blue font-[600] md:leading-[79px] leading-[48px]"
            >
              1
            </h1>
          </div>

          {/* divider */}
          <div className="border-[2px] border-light-blue md:h-[200px] h-[130px]  md:mx-[1.5rem]"></div>

          <div className=" md:h-[198px] gap-[30px]">
            <div className="flex  items-center gap-[12px] md:gap-[20px]">
              <div className="w-[32px] h-[32px] rounded-[50%]  flex bg-[#D6DDEB] cursor-pointer ">
                <Image src={story_gilf} alt="" className="" />
              </div>

              <ul className="flex gap-[10px] items-center">
                <li className="text-grey font-clash font-[600] md:text-[24px] md:leading-[42px] text-[20px] leading-[24px]">
                  Our
                </li>
                <li className="text-light-blue font-clash font-[600] md:text-[24px] md:leading-[42px] text-[20px] leading-[24px]">
                  Story
                </li>
              </ul>
            </div>

            <p className="font-epilogue md:text-[18px] md:leading-[32px] text-[14px] leading-[30px] text-grey font-[400] gap-[10px] pt-[1.4rem]">
              The Intern Place began as a social media page on August 9, 2020.
              We aimed at making career information accessible to job seekers.
              In response to growing demand from employers to post jobs on our
              page, we launched our job website in February, 2023 to provide
              equal access to top companies and job{" "}
            </p>
          </div>
        </div>

        {/* mission section */}

        <div
          className="flex  md:items-center justify-start lg:w-[822px] lg:h-[263px] 
        md:h-[450px] md:w-[702px] sm:w-[500px] w-full mt-[3rem] md:mt-0   gap-[12px]  lg:mr-[23rem] "
        >
          <div className=" md:h-[198px] gap-[30px]">
            <div className="w-[32px] h-[32px] items-center rounded-[50%] md:gap-[20px] gap-[12px] flex bg-[#D6DDEB] cursor-pointer">
              <Image src={mission_gilf} alt="" className="" />

              <ul className="flex gap-[10px]">
                <li className="text-grey font-clash font-[600] md:text-[24px] md:leading-[42px] text-[20px]  leading-[24px]">
                  Our
                </li>
                <li className="text-light-blue font-clash font-[600] md:text-[24px] md:leading-[42px] text-[20px] leading-[24px]">
                  Mission
                </li>
              </ul>
            </div>

            <p
              className="font-epilogue md:text-[18px] md:leading-[32px] text-[14px] leading-[30px] text-grey font-[400] gap-[10px] 
            pt-[1.4rem] md:pt-[2.5rem]"
            >
              The Intern Place is the leading internship talent community that
              connects employers with highly qualified and diverse candidates,
              helping them find the best talent to grow their team within budget
              and business need. We democratize access to internships and
              entry-level jobs, empowering students and graduate to build skills
              and experience to become part of the future talent pipeline in the
              technology industry.
            </p>
          </div>

          <div className="flex md:items-center md:mt-[7rem] lg:mt-[6rem]">
            {/* divider */}
            <div className="border-[2px] border-light-blue lg:h-[200px] md:h-[230px] h-[132px]  mr-[0.5rem] md:mx-[1.5rem]"></div>

            <h1 className="md:pt-0 pt-[2.3rem] md:text-[72px] md:leading-[79px] text-[32px] leading-[48px]  text-[#26A4FF] font-[600] ">
              2
            </h1>
          </div>
        </div>

        {/* vission section */}
        <div
          className="flex  md:items-center  justify-end md:w-[704px] sm:w-[500px] w-full
        lg:h-[200px] md:mt-[5rem] mt-[3rem] lg:w-[824px]  gap-[10px] md:mb-0 mmb-[4rem] lg:ml-[10rem]"
        >
          <div>
            <h1 className="md:text-[72px] pt-[2.2rem] md:pt-0 md:leading-[79px] md:text-[#002360] text-[#1976D2] font-[600] text-[32px] leading-[48px]">
              3
            </h1>
          </div>

          {/* divider */}
          <div className="border-[2px] border-light-blue md:h-[200px] h-[137px] mr-[0.5rem] md:mr-0 md:mx-[1.5rem]"></div>

          <div className=" md:h-[198px] gap-[30px]">
            <div className="flex  items-center gap-[20px]">
              <div className="w-[30px] h-[30px] rounded-[50%] justify-center items-center flex bg-[#D6DDEB] cursor-pointer">
                <Image
                  src={vision_gilf}
                  alt=""
                  className="w-[25px] h-[25px] "
                />
              </div>

              <ul className="flex gap-[10px] items-center">
                <li className="text-grey font-clash font-[600] md:text-[24px] md:leading-[42px] text-[20px] leading-[24px]">
                  Our
                </li>
                <li className="text-light-blue font-clash font-[600] text-[24px] leading-[42px]">
                  Story
                </li>
              </ul>
            </div>

            <p className="font-epilogue md:text-[18px] text-[14px] leading-[30px] md:leading-[32px] text-grey font-[400] gap-[10px] pt-[1.4rem]">
              We envision a world where African talent is recognized and valued
              globally, where skilled professionals can connect with
              opportunities that match their potential, and where businesses can
              seamlessly access the diverse talent they need to thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersAllTemplateChunk;
