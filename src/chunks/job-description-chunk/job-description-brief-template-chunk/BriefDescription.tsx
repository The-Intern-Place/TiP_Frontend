import Image from "next/image";
import React from "react";

import meetingOne from "public/images/meeting_group_one.svg";
import meetingTwo from "public/images/meeting_group_two.svg";
import meetingThree from "public/images/meeting_group_three.svg";

import arrow_right from "public/images/blue-arrow-right.svg";
import { Logo } from "@assets/icons/Logo";

const BriefDescription = () => {
  return (
    <section className="hidden lg:flex w-full  justify-center ">
      <div className="flex w-full items-center  justify-between  max-w-[1180px]">
        <div className="flex flex-col  max-w-[577px] w-full gap-[32px]">
          <div className="flex  md:items-center gap-3">
            <div className="">
              <Logo />
            </div>

            <div className="flex flex-col w-full">
              <p className="lg:text-[32px] lg:leading-[38px] md:text-lg  font-clash font-[600]">
                Urban Tech
              </p>

              <ul className="flex gap-[16px]">
                <li className="text-[#0046BF] font-epilog font-[600] text-[16px] leading-[25px] ">
                  Read more about Urban
                </li>
                <li>
                  {" "}
                  <Image
                    src={arrow_right}
                    className="w-[24px] h-[24px] rounded-[4px]"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-[520px] w-full ">
            <p className="text-[#515B6F] text-[16px] leading-[30px] font-epilogue font-[400]">
              Urban Tech is a technology company that builds economic
              infrastructure for the internet. Businesses of every size—from new
              startups to public companies—use our software to accept payments
              and manage their businesses online.
            </p>
          </div>
        </div>

        {/* image section */}

        <div className="flex max-w-[492px] gap-[10px] w-full md:h-[276px] ">
          <div className="">
            <Image
              src={meetingOne}
              className="w-[316px] h-[276px] rounded-[4px]"
              alt=""
            />
          </div>

          <div className="flex flex-col justify-between h-full">
            <Image
              src={meetingTwo}
              className="w-[157px] h-[130px] rounded-[4px]"
              alt=""
            />
            <Image
              src={meetingThree}
              className="w-[157px] h-[130px] rounded-[4px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BriefDescription;
