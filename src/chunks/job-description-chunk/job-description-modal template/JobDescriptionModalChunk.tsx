// JobDescriptionModalChunk.tsx
import React from "react";
import { JobDescriptionCardProps } from "@/components/cards/job-description-card/Job-description-tag/JobDescriptionCard.types";
import { Logo } from "@assets/icons/Logo";
import Image from "next/image";
import close from "public/images/tip_close.svg";
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
          className="w-[24px] h-[24px] absolute md:right-[50px] right-[25px] top-[35px]"
        >
          <Image
            src={close}
            alt="close_icon"
            className="w-[14px] h-[14px] cursor-pointer"
          />
        </div>

        <div className="w-full h-full flex flex-col gap-[24px] items-center justify-center md:items-start md:justify-start md:flex-row  mt-[4rem]">
          <div className="">
            <Logo />
          </div>

          <div className="flex flex-col text-center md:text-start gap-[8px]">
            <h1 className="md:text-[24px] md:leading-[40px] text-[32px] leading-8 font-[600] text-blueGray ">
              {title}
            </h1>
            <ul className="flex items-center justify-center gap-[16px]">
              <li className=" md:leading-[32px] text-lg  font-[400] text-grayishBlue">
                {" "}
                {company}
              </li>
              <li className=" md:leading-[32px] text-lg  font-normal text-grayishBlue flex items-center">
                {" "}
                <div className="w-[4px] h-[4px] min-w-[4px] min-h-[4px] bg-coolGray mx-2 md:mx-1"></div>{" "}
                {location}
              </li>
              <li className=" md:leading-[32px] text-lg  font-normal text-grayishBlue flex items-center">
                {" "}
                <div className="w-[4px] h-[4px] min-w-[4px] min-h-[4px] bg-coolGray mx-2 md:mx-1"></div>{" "}
                {duration}
              </li>
            </ul>
          </div>
        </div>

        <hr className="bg-[#D6DDEB] max-w-[550px] w-full flex items-center justify-center" />

        <div className="flex flex-col p-[10px]">
          <div className="flex flex-col gap-[2px]">
            <h1 className="font-clash font-semibold md:text-[34px] md:leading-[40px] text-xl text-royalBlue ">
              Submit your application
            </h1>
            <p className="font-epilogue  text-base leading-[30px] text-semiBlue">
              The following is required and will only be shared with Nomad
            </p>
          </div>

          <div className="flex flex-col pt-[1.5rem]">
            <form className="w-full h-full flex flex-col gap-[25px]">
              <div className="flex flex-col gap-[4px]">
                <h1 className=" font-semibold text-base  text-grayishBlue">
                  Full name
                </h1>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="text-base leading-[30px] text-semiBlue font-epilogue border-[1px] h-[49px] border-pastelBlue px-4 "
                />
              </div>

              <div className="flex flex-col gap-[4px]">
                <h1 className=" font-semibold text-base  text-grayishBlue">
                  Email address
                </h1>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="font-[400] text-[16px] leading-[30px] text-[#515B6F99] font-epilogue border-[1px] h-[49px] border-[#D6DDEB] px-[16px] "
                />
              </div>

              <div className="flex flex-col gap-[4px]">
              <h1 className=" font-semibold text-base  text-grayishBlue">
                  Phone Number
                </h1>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="font-[400] text-[16px] leading-[30px] text-[#515B6F99] font-epilogue border-[1px] h-[49px] border-[#D6DDEB] px-[16px] "
                />
              </div>

              <div className="flex flex-col gap-[4px]">
              <h1 className=" font-semibold text-base  text-grayishBlue">
                  Current of previous job title
                </h1>
                <input
                  type="text"
                  placeholder="What’s your current or previous job title?"
                  className="font-[400] text-[16px] leading-[30px] text-[#515B6F99] font-epilogue border-[1px] h-[49px] border-[#D6DDEB] px-[16px] "
                />
              </div>

              <h1 className="font-epilogue font-[700] text-[18px] md:leading-[32px] leading-[28px] text-[#002360] uppercase">
                Links
              </h1>

              <div className="flex flex-col gap-[4px]">
              <h1 className=" font-semibold text-base text-grayishBlue">
                  LinkedIn URL
                </h1>
                <input
                  type="text"
                  placeholder="Link to your LinkedIn URL"
                  className="font-[400] text-[16px] leading-[30px] text-[#515B6F99] font-epilogue border-[1px] h-[49px] border-[#D6DDEB] px-[16px] "
                />
              </div>

              <div className="flex flex-col gap-[4px]">
              <h1 className=" font-semibold text-base  text-grayishBlue">
                  Current of previous job title
                </h1>
                <input
                  type="text"
                  placeholder="Link to your portfolio URL"
                  className="font-[400] text-[16px] leading-[30px] text-[#515B6F99] font-epilogue border-[1px] h-[49px] border-[#D6DDEB] px-[16px] "
                />
              </div>

              <div className="flex flex-col gap-[4px]">
              <h1 className=" font-semibold text-base  text-grayishBlue">
                  Additional information
                </h1>

                <div className="flex flex-col ">
                  <textarea
                    placeholder="Add a cover letter or anything else you want to share"
                    className="font-normal text-base leading-[30px] text-semiBlue font-epilogue 
       border-[1px] h-[152px] border-pastelBlue p-[10px] outline-none   w-full"
                  />

                  <ul className="flex items-center gap-[7px] border-[1px] h-[48px]  border-[#D6DDEB] p-[3px]">
                    {textarea_icon.map((t) => (
                      <li key={t.id} className="">
                        {" "}
                        <Image
                          src={t.pics}
                          alt="emoji_icon"
                          className="w-[24px] h-[24px]"
                        />{" "}
                      </li>
                    ))}
                  </ul>

                  <ul className="flex justify-between items-center  pt-[0.5rem]">
                    <li>
                      <h1 className=" font-normal text-base leading-[30px] text-semiBlue font-epilogue">
                        Maximum 500 characters
                      </h1>
                    </li>

                    <li>
                      <h1 className=" font-normal text-base leading-[30px] text-semiBlue font-epilogue">
                        0 / 500
                      </h1>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center rounded-[4px] w-full gap-[16px]">
                <h1 className=" font-semibold text-base leading-8 text-grey font-epilogue">
                  Attach your resume
                </h1>

                <div className="flex  items-center justify-center gap-[10px] bg-[#F6FAFF] border-[1px] border-[#0046BF] h-[64px] md:w-[220px] w-full outline-[#0046BF] rounded-[1px]  outline-dashed">
                  <Image
                    src={bluelinks}
                    alt="emoji_icon"
                    className="w-[24px] h-[24px]"
                  />
                  <h1 className=" font-medium text-[16px] leading-8 text-grayishBlue font-epilogue">
                    Attach Resume/CV
                  </h1>
                  <input
                    type="file"
                    placeholder="Attach Resume/CV"
                    className="font-normal text-base leading-[30px] text-semiBlue font-epilogue border-[1px] h-[49px] border-pastelBlue px-4 hidden "
                  />
                </div>
              </div>

              <div className="w-full">
                <Button overrideStyles="">
                  <h1>Submit Application</h1>
                </Button>
              </div>

              <h1 className=" font-normal text-base leading-[30px] text-grayishBlue">
                By sending the request you can confirm that you accept our{" "}
                <span className="text-light-blue">Terms of Service </span> and{" "}
                <span className="text-light-blue">Privacy Policy</span>
              </h1>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDescriptionModalChunk;
