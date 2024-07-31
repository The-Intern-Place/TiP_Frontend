import Image from "next/image";
import React from "react";

import companyPics from "public/images/tip_company.svg";
import Link from "next/link";
import { companyprofileherodata } from "@/utils/data/compnayprofile";
import { CompanyProfileHeroCardProps } from "@/components/cards/companyprofile-hero-card/CompanyProfileHeroCard.type";
import CompanyProfileHeroCard from "@/components/cards/companyprofile-hero-card/CompanyProfileHeroCard";

const CompanyProfileHeroChunk = () => {
  return (
    <section className="flex md:justify-center justify-start items-start md:items-center w-full overflow-hidden py-[2rem] md:py-0 md:h-[40vh]  lg:h-[50vh] bg-[#FAFBFC]">
      <div className="flex flex-col md:flex-row  items-start justify-start md:items-center md:justify-center gap-[24px] p-[10px]  w-[100%] ">
        {/* img div */}

        <div className="flex items-center justify-between md:justify-start ">
          <div className="md:w-[160px] md:h-[160px] md:rounded-[126px] w-[56px] h-[56px] bg-[#D1E1FD] rounded-[44px]">
            <Image
              src={companyPics}
              alt="company_profile"
             
            />
          </div>

          {/* button for smaller screen */}
          <div className="md:hidden block absolute right-[15px] top-[139px]">
            <button
              className=" flex rounded-none bg-[#FFFFFF] text-[#1976D2] text-[16px] items-center gap-[8px] justify-center 
    leading-[25px] text-center border-[1px] border-[#1976D2] h-[34px]   pt-[4px] pr-[12px] pb-[4px] pl-[12px]"
            >
              43 Jobs
            </button>
          </div>
        </div>

        {/* text div */}
        <div className="flex flex-col  gap-[20px] ">
          <div className="flex flex-col gap-[12px] items-start ">
            <div className="flex items-start md:justify-start md:items-center justify-between w-full gap-[20px]">
              <h1 className="text-[#002360] text-[48px] leading-[52px] font-[600] font-clash gap-[20px] flex">
                Urban Tech
              </h1>
              <button className="hidden md:flex rounded-none bg-[#FFFFFF] text-[#0046BF] text-[16px] items-center gap-[8px] justify-center leading-[25px] text-center border-[1px] border-blue h-[34px]   pt-[4px] pr-[12px] pb-[4px] pl-[12px]">
                3 Jobs
              </button>
            </div>

            <Link
              href="#"
              className="text-light-blue font-[600] md:text-[16px] md:leading-[25px]"
            >
              https://gourbantech.com
            </Link>
          </div>

          {/* mapping with herodata */}
          <div className="flex flex-col md:flex-row flex-wrap gap-[16px] lg:gap-[40px]">
            {companyprofileherodata.map(
              (c: CompanyProfileHeroCardProps, i: number) => (
                <CompanyProfileHeroCard
                  id={c.id}
                  key={i}
                  img={c.img}
                  text={c.text}
                  title={c.title}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfileHeroChunk;
