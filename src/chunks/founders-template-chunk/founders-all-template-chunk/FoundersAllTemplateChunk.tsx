import Image from "next/image";
import React from "react";

import ceo from "public/images/Ibunkun Amosu.svg";
import linkdin from "public/images/LinkedIn.svg";
import x from "public/images/X.svg";

import mission_gilf from "/public/images/tip_gilf.gif";
import story_gilf from "/public/images/tip_gilf1.gif";
import vision_gilf from "/public/images/tip_gilf3.gif";
import { FounderOfferData } from "@/utils/data/founders";
import { FoundersOfferCardProps } from "@/components/cards/founders-offer-card/FoundersOfferCard.type";
import FoundersOfferCard from "@/components/cards/founders-offer-card/FoundersOfferCard";

const FoundersAllTemplateChunk = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center mb-[3rem]">
      {/* vission,story section */}
      <div className="flex flex-col justify-center items-center  max-w-[1084px]  w-full mt-[3rem] p-2  lg:px-[4rem] md:pl-[4rem] lg:pl-[15rem] ">
        {/* story section */}
        <div className="flex    md:items-center  justify-end md:h-[200px] md:w-[702px] lg:w-[842px]  w-[100%] lg:h-[200px]  gap-[10px]   lg:ml-[14rem]">
          <div>
            <h1 className="text-[72px] text-light-blue font-[600] leading-[79px]">
              1
            </h1>
          </div>

          {/* divider */}
          <div className="border-[2px] border-light-blue md:h-[200px]  md:mx-[1.5rem]"></div>

          <div className=" md:h-[198px] gap-[30px]">
            <div className="flex  items-center gap-[20px]">
              <div className="w-[32px] h-[32px] rounded-[50%]  flex bg-[#D6DDEB] cursor-pointer ">
                <Image src={story_gilf} alt="" className="" />
              </div>

              <ul className="flex gap-[10px]">
                <li className="text-grey font-clash font-[600] text-[24px] leading-[42px]">
                  Our
                </li>
                <li className="text-light-blue font-clash font-[600] text-[24px] leading-[42px]">
                  Story
                </li>
              </ul>
            </div>

            <p className="font-epilogue text-[18px] leading-[32px] text-grey font-[400] gap-[10px] pt-[1.4rem]">
              The Intern Place began as a social media page on August 9, 2020.
              We aimed at making career information accessible to job seekers.
              In response to growing demand from employers to post jobs on our
              page, we launched our job website in February, 2023 to provide
              equal access to top companies and job{" "}
            </p>
          </div>
        </div>

        {/* mission section */}

        <div className="flex  md:items-center justify-start lg:w-[822px] lg:h-[263px] md:h-[450px] md:w-[702px] w-[100%] mt-[3rem] md:mt-0   gap-[10px]  lg:mr-[23rem] ">
          <div className=" md:h-[198px] gap-[30px]">
            <div className="w-[32px] h-[32px] items-center rounded-[50%] gap-[20px] flex bg-[#D6DDEB] cursor-pointer">
              <Image src={mission_gilf} alt="" className="" />

              <ul className="flex gap-[10px]">
                <li className="text-grey font-clash font-[600] text-[24px] leading-[42px]">
                  Our
                </li>
                <li className="text-light-blue font-clash font-[600] text-[24px] leading-[42px]">
                  Mission
                </li>
              </ul>
            </div>

            <p className="font-epilogue text-[18px] leading-[32px] text-grey font-[400] gap-[10px] pt-[2.5rem]">
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
            <div className="border-[2px] border-light-blue lg:h-[200px] md:h-[230px] h-full mx-[0.6rem]  md:mx-[1.5rem]"></div>

            <h1 className="text-[72px]  text-[#26A4FF] font-[600] leading-[79px]">
              2
            </h1>
          </div>
        </div>

        {/* vission section */}
        <div className="flex  md:items-center  justify-end md:w-[704px] lg:h-[200px] md:mt-[5rem] mt-[3rem] lg:w-[824px]  gap-[10px] md:mb-0 mmb-[4rem] lg:ml-[10rem]">
          <div>
            <h1 className="text-[72px] text-[#002360] font-[600] leading-[79px]">
              3
            </h1>
          </div>

          {/* divider */}
          <div className="border-[2px] border-light-blue md:h-[200px] md:mx-[1.5rem]"></div>

          <div className=" md:h-[198px] gap-[30px]">
            <div className="flex  items-center gap-[20px]">
              <div className="w-[30px] h-[30px] rounded-[50%] justify-center items-center flex bg-[#D6DDEB] cursor-pointer">
                <Image
                  src={vision_gilf}
                  alt=""
                  className="w-[25px] h-[25px] "
                />
              </div>

              <ul className="flex gap-[10px]">
                <li className="text-grey font-clash font-[600] text-[24px] leading-[42px]">
                  Our
                </li>
                <li className="text-light-blue font-clash font-[600] text-[24px] leading-[42px]">
                  Story
                </li>
              </ul>
            </div>

            <p className="font-epilogue text-[18px] leading-[32px] text-grey font-[400] gap-[10px] pt-[1.4rem]">
              We envision a world where African talent is recognized and valued
              globally, where skilled professionals can connect with
              opportunities that match their potential, and where businesses can
              seamlessly access the diverse talent they need to thrive.
            </p>
          </div>
        </div>
      </div>

      {/*What we offer */}
      <div className="flex flex-col items-center lg:my-[5rem] mt-[4rem] md:mt-auto md:my-[3rem]">
        {/* Heading */}
        <div className="gap-[10px] py-[3rem]">
          <h1 className="font-clash font-[600] text-[32px] leading-[38px] text-[#1B1B1B]">
            What We Offer
          </h1>
        </div>

        {/* mapping through */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[30px]  ">
          {FounderOfferData.map((o: FoundersOfferCardProps, i: number) => (
            <FoundersOfferCard
              key={i}
              img={o.img}
              secondimg={o.secondimg}
              thirdimg={o.thirdimg}
              fourthimg={o.fourthimg}
              title={o.title}
              description={o.description}
            />
          ))}
        </div>
      </div>

      {/* About CEO */}
      <div className="flex md:flex-row flex-col md:justify-evenly items-center md:gap-[30px] py-[5rem] md:py-[3rem]   max-w-[1095px]">
        {/* Image */}

        <div className="md:w-[350px] md:h-[350px] w-[300px] h-[300px]">
          <Image src={ceo} alt="ibunkun_pics" className="w-full h-full" />
        </div>

        {/* text */}
        <div className="gap-[30px] max-w-[715px] max-h-[324px]  text-center md:text-start  my-2 md:my-0 w-full">
          <h1 className="font-clash font-[600] text-[24px] leading-[40px] text-light-blue">
            Founder
          </h1>
          <p className="font-clash font-[400] text-[18px] leading-[32px] md:my-[2.2rem] text-grey gap-[10px]">
            Ibunkun Amosu is the visionary founder behind The Intern Place. With
            a passion for empowering young professionals and a deep
            understanding of the African job market, Ibunkun has dedicated his
            career to bridging the gap between emerging talent and top
            employers. His mission is to make The Intern Place the go-to talent
            partner for businesses looking to access a diverse and highly
            skilled workforce.
          </p>

          <ul className="gap-[24px] md:max-w-[88px] w-[100%] flex items-center justify-center">
            <li className="w-[32px] h-[32px]">
              {" "}
              <Image
                src={linkdin}
                alt="ibunkun_pics"
                className="w-full h-full"
              />
            </li>
            <li className="w-[32x] h-[32px]">
              {" "}
              <Image src={x} alt="ibunkun_pics" className="w-full h-full" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FoundersAllTemplateChunk;
