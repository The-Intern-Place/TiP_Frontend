import Navbar from "@/components/navbar/Navbar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "The Intern Place | Terms",
  description: "The Intern Place",
};

const page = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center bg-[#FAFBFC]">
      {/* Navbar section */}
      <div className="w-full">
        <Navbar bgcolor="#FAFBFC" />
      </div>

      <div
        className="flex flex-col md:items-center md:justify-center items-start justify-start md:max-w-[1192px] md:h-[700px]  px-2
 bg-[#FFFFFF] rounded-[20px] h-full w-full md:my-[5rem] my-[3rem] py-[3rem] md:py-[5rem] md:px-[4rem]"
        style={{ boxShadow: "10px 20px 20px 10px #0000001A" }}
      >
        {/* heading */}
        <div className="flex flex-col items-start md:items-center text-left md:text-center  ">
          <h1 className="font-clash my-4 font-[600] text-[32px] leading-[38px] text-[#1B1B1B]">
            Terms of Service
          </h1>

          <p className="font-epilogue font-[400] md:text-[18px] leading-[32px] text-[#1B1B1B] md:gap-[10px] py-[2rem] max-w-[1020px] w-full  text-start">
            At The Intern Place, we make job searching easy and efficient. We
            provide up-to-date job listings and career information tailored for
            Africans, ensuring you have access to the latest opportunities. Our
            user-friendly platform connects employers with the right candidates,
            streamlining the hiring process for everyone. If you intend to use
            our service, please take a moment to read our terms of service
            below.
          </p>
        </div>

        <div className="max-w-[715px] w-full md:p-4">
          {/* first box */}
          <div className="gap-[6px] mb-8">
            <h1 className="text-light-blue font-[600] font-clash text-[24px] leading-[40px]">
              Use of Service
            </h1>
            <p className="text-grey font-[400] font-epilogue text-[18px] leading-[32px]">
              Our platform connects interns and entry-level job seekers with
              employers. Users must provide accurate information.
            </p>
          </div>

          {/* second box */}
          <div className="gap-[10px] mb-8">
            <h1 className="text-light-blue font-[600] font-clash text-[24px] leading-[40px]">
              User Conduct
            </h1>
            <p className="text-grey font-[400] font-epilogue text-[18px] leading-[32px]">
              Users must not engage in illegal activities or provide false
              information.
            </p>
          </div>

          {/* third box */}
          <div className="gap-[10px] mb-4">
            <h1 className="text-light-blue font-[600] font-clash text-[24px] leading-[40px]">
              Liability
            </h1>
            <p className="text-grey font-[400] font-epilogue text-[18px] leading-[32px]">
              We are not liable for any issues arising from the use of our
              platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
