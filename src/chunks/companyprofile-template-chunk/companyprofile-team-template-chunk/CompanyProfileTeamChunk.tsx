"use client";
import CompanyProfileTeamCard from "@/components/cards/companyprofile-team-card/CompanyProfileTeamCard";
import { CompanyProfileTeamCardProps } from "@/components/cards/companyprofile-team-card/CompanyProfileTeamCard.type";
import { companyprofileteamdata } from "@/utils/data/companyprofile";
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
    <div className="flex flex-col justify-between w-full h-full max-w-[1350px] mx-auto px-6 md:px-10 lg:px-16 py-10 xl:px-0 ">
      <div>
        {/* Heading */}

        <div className="flex justify-between md:px-0 pb-3">
          <h1 className="md:text-[32px] md:leading-[38px] text-[24px] leading-[40px] font-[600]  font-clash text-[#25324B]">
            Team
          </h1>
          <span className="hidden md:flex text-[16px] leading-[25px] font-epilogue text-[#0046BF] font-[600]">
            See all
          </span>
        </div>
      </div>
      {/* for medium screen without slider */}
      <div className="md:flex max-w-full hidden gap-[16px] h-full">
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

      <div className="flex w-full md:w-full md:hidden justify-center items-center  gap-[16px]">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1.7}
          loop={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },

            300: {
              slidesPerView: 1,
              spaceBetween: 10,
            },

            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            1024: {
              slidesPerView: 4,
              spaceBetween: 35,
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

        <div className="custom-nexts absolute md:hidden right-[7px]  transform translate-y-[-400%] w-[28px] h-[40px] bg-[#0046BF] mt-[-2px] flex items-center justify-center cursor-pointer z-10">
          <Image src={rightarrow} alt="right-icon" />
        </div>
      </div>
    </div>
  );
};

export default CompanyProfileTeamChunk;
