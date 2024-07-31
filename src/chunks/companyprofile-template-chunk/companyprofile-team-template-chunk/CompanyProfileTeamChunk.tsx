"use client";
import CompanyProfileTeamCard from "@/components/cards/companyprofile-team-card/CompanyProfileTeamCard";
import { CompanyProfileTeamCardProps } from "@/components/cards/companyprofile-team-card/CompanyProfileTeamCard.type";
import { companyprofileteamdata } from "@/utils/data/compnayprofile";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import rightarrow from "public/images/righticon.svg";
import Image from "next/image";

const CompanyProfileTeamChunk = () => {
  return (
    <section
      className="flex flex-col overflow-x-hidden gap-[11px] 
md:items-center items-start "
    >
      <div className=" md:pt-[30px] lg:pr-[124px] md:pb-[30px] lg:pl-[124px] pt-[24px] pr-[0px] pb-[24px] pl-[0px] flex flex-col gap-[16px] p-[10px]">
        {/* Heading */}

        <div className="flex justify-between px-[10px] md:px-0 ">
          <h1 className="md:text-[32px] md:leading-[38px] text-[24px] leading-[40px] font-[600]  font-clash text-[#25324B]">
            Team
          </h1>
          <span className="hidden md:flex text-[16px] leading-[25px] font-epilogue text-[#0046BF] font-[600]">
            See all
          </span>
        </div>

        {/* for medium screen without slider */}
        <div className="md:flex w-[100%] hidden  gap-[16px]">
          {companyprofileteamdata.map(
            (c: CompanyProfileTeamCardProps, i: number) => (
              <CompanyProfileTeamCard
                key={i}
                id={c.id}
                img={c.img}
                title={c.title}
                text={c.text}
              />
            ),
          )}
        </div>

        {/* adding slider and visible in mobile screen */}

        <div className="flex w-[380px]  md:hidden justify-center items-center  gap-[16px]">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1.7}
            loop={true}
            navigation={{
              nextEl: ".custom-nexts",
              prevEl: ".custom-prev",
            }}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },

              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },

              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            scrollbar={{ draggable: true }}
          >
            {companyprofileteamdata.map(
              (c: CompanyProfileTeamCardProps, i: number) => (
                <SwiperSlide key={i} id={c.id} className="">
                  <CompanyProfileTeamCard
                    key={i}
                    id={c.id}
                    img={c.img}
                    title={c.title}
                    text={c.text}
                  />
                </SwiperSlide>
              ),
            )}
          </Swiper>

          <div
            className="custom-nexts absolute md:hidden right-[7px]  transform translate-y-[-420%] w-[28px] h-[40px] bg-[#0046BF]
mt-[-10px] flex items-center justify-center cursor-pointer z-10"
          >
            <Image src={rightarrow} alt="right-icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfileTeamChunk;
