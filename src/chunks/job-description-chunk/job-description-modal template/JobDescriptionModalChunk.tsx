// JobDescriptionModalChunk.tsx
import React from "react";
import { JobDescriptionCardProps } from "@/components/cards/job-description-card/Job-description-tag/JobDescriptionCard.types";
import { Logo } from "@assets/icons/Logo";
import Image from "next/image";
import close from "public/images/close.png";
import { textarea_icon } from "@/utils/data/job-description";
import Button from "@/components/button/Button";

import bluelinks from "public/images/bIuelink_con.svg";

const JobDescriptionModalChunk = (props: JobDescriptionCardProps) => {
  const { title, company, location, duration, setIsModal } = props;

  const handleCloseModal = () => {
    if (setIsModal) setIsModal(false);
  };

  return (
    <section className="flex flex-col bg-white  w-full md:p-[15px]">
      <div className="flex flex-col items-center justify-center w-full gap-[24px]">
        <div
          onClick={handleCloseModal}
          className="w-[24px] h-[24px] absolute right-[50px] top-[20px]"
        >
          <Image
            src={close}
            alt="close_icon"
            className="w-[24px] h-[24px] cursor-pointer"
          />
        </div>

        <div className="w-full h-full flex flex-col items-center justify-center md:items-start md:justify-start md:flex-row  mt-[4rem]">
          <div className="">
            <Logo />
          </div>

          <div className="flex flex-col">
            <h1 className="text-center md:text-start">{title}</h1>
            <ul className="flex gap-[16px]">
              <li>{company}</li>
              <li>{location}</li>
              <li>{duration}</li>
            </ul>
          </div>
        </div>

        <hr className="bg-[#D6DDEB] max-w-[550px] w-full flex items-center justify-center" />

        <div className="flex flex-col p-[10px]">
          <div className="flex flex-col gap-[2px]">
            <h1 className="font-clash font-[400] text-[34px] leading-[40px] text-[#002360]">
              Submit your application
            </h1>
            <p className="font-epilogue font-[400] text-[16px] leading-[30px] text-[#515B6F99]">
              The following is required and will only be shared with Nomad
            </p>
          </div>

          <div className="flex flex-col">
            <form className="w-full h-full flex flex-col gap-[25px]">
              <div className="flex flex-col gap-[4px]">
                <h1 className=" font-[600] text-16[px] leading-[25px] text-[#515B6F]">
                  Full name
                </h1>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="font-[400] text-[16px] leading-[30px] text-[#515B6F99] font-epilogue border-[1px] h-[49px] border-[#D6DDEB] px-[16px] "
                />
              </div>

              <div className="flex flex-col gap-[4px]">
                <h1 className=" font-[600] text-16[px] leading-[25px] text-[#515B6F]">
                  Email address
                </h1>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="font-[400] text-[16px] leading-[30px] text-[#515B6F99] font-epilogue border-[1px] h-[49px] border-[#D6DDEB] px-[16px] "
                />
              </div>

              <div className="flex flex-col gap-[4px]">
                <h1 className=" font-[600] text-16[px] leading-[25px] text-[#515B6F]">
                  Phone Number
                </h1>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="font-[400] text-[16px] leading-[30px] text-[#515B6F99] font-epilogue border-[1px] h-[49px] border-[#D6DDEB] px-[16px] "
                />
              </div>

              <div className="flex flex-col gap-[4px]">
                <h1 className=" font-[600] text-16[px] leading-[25px] text-[#515B6F]">
                  Current of previous job title
                </h1>
                <input
                  type="text"
                  placeholder="What’s your current or previous job title?"
                  className="font-[400] text-[16px] leading-[30px] text-[#515B6F99] font-epilogue border-[1px] h-[49px] border-[#D6DDEB] px-[16px] "
                />
              </div>

              <h1 className="font-clash font-[400] text-[34px] leading-[40px] text-[#002360] uppercase">
                LInks
              </h1>

              <div className="flex flex-col gap-[4px]">
                <h1 className=" font-[600] text-16[px] leading-[25px] text-[#515B6F]">
                  LinkedIn URL
                </h1>
                <input
                  type="text"
                  placeholder="Link to your LinkedIn URL"
                  className="font-[400] text-[16px] leading-[30px] text-[#515B6F99] font-epilogue border-[1px] h-[49px] border-[#D6DDEB] px-[16px] "
                />
              </div>

              <div className="flex flex-col gap-[4px]">
                <h1 className=" font-[600] text-16[px] leading-[25px] text-[#515B6F]">
                  Current of previous job title
                </h1>
                <input
                  type="text"
                  placeholder="Link to your portfolio URL"
                  className="font-[400] text-[16px] leading-[30px] text-[#515B6F99] font-epilogue border-[1px] h-[49px] border-[#D6DDEB] px-[16px] "
                />
              </div>

              <div className="flex flex-col gap-[4px]">
                <h1 className=" font-[600] text-16[px] leading-[25px] text-[#515B6F]">
                  Additional information
                </h1>
                <div className="border-[1px] border-[#D6DDEB]">
                  <textarea
                    placeholder="Add a cover letter or anything else you want to share"
                    className="font-[400] text-[16px] leading-[30px] text-[#515B6F99] font-epilogue 
       border-[1px] h-[152px] border-[#D6DDEB] px-[16px]   w-full"
                  />

                  <ul className="flex gap-[7px]">
                    {textarea_icon.map((t) => (
                      <li  key={t.id}>
                        {" "}
                        <Image
                          src={t.pics}
                          alt="emoji_icon"
                          className="w-[24px] h-[24px]"
                        />{" "}
                      </li>
                    ))}
                  </ul>

                  <ul className="flex justify-between items-center">
                    <li>
                      <h1 className=" font-[400] text-[16px] leading-[30px] text-[#515B6F99] font-epilogue">
                        Maximum 500 characters
                      </h1>
                    </li>

                    <li>
                      <h1 className=" font-[400] text-[16px] leading-[30px] text-[#515B6F99] font-epilogue">
                        0 / 500
                      </h1>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-between items-center rounded-[4px]">
                <h1 className=" font-[500] text-[16px] leading-[32px] text-[#1B1B1B] font-epilogue">
                  Attach your resume
                </h1>

                <div className="flex  items-center justify-center gap-[10px] bg-[#F6FAFF] border-[1px] border-[#0046BF] h-[64px] w-[220px] outline-[#0046BF]   outline-dashed">
                  <Image
                    src={bluelinks}
                    alt="emoji_icon"
                    className="w-[24px] h-[24px]"
                  />
                  <h1 className=" font-[500] text-[16px] leading-[32px] text-[#515B6F] font-epilogue">
                    Attach Resume/CV
                  </h1>
                  <input
                    type="file"
                    placeholder="Attach Resume/CV"
                    className="font-[400] text-[16px] leading-[30px] text-[#515B6F99] font-epilogue border-[1px] h-[49px] border-[#D6DDEB] px-[16px] hidden "
                  />
                </div>
              </div>

              <div className="w-full">
                <Button overrideStyles="">
                  <h1>SUbmit Application</h1>
                </Button>
              </div>

              <h1>
                By sending the request you can confirm that you accept our Terms
                of Service and Privacy Policy
              </h1>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDescriptionModalChunk;
