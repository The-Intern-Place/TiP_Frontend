"use client";
import HiringCategoryCard from "@/components/cards/hiring-category-card/HiringCategoryCard";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import IC_HiringDesign from "@assets/icons/IC_HiringDesign";
import IC_Hosting from "@assets/icons/IC_Hosting";
import IC_Fintech from "@assets/icons/IC_Fintech";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import IC_Business from "@assets/icons/IC_Business";
import IC_Developer from "@assets/icons/IC_Developer";
import Image from "next/image";

import rightarrow from "public/images/righticon.svg";

const CompaniesCategoryChunk = () => {
  const hiringcategorydata = [
    {
      icon: (
        <IC_HiringDesign className="hover:stroke-white stroke-[#1976D2] group-hover:fill-white  " />
      ),
      title: "Design",
    },

    {
      icon: (
        <IC_Fintech className="hover:stroke-white stroke-[#1976D2] hover:fill-white group-hover:fill-white" />
      ),

      title: "Fintech",
    },

    {
      icon: (
        <IC_Hosting className="hover:stroke-white hover:fill-white stroke-[#1976D2]  group-hover:fill-white" />
      ),
      title: "Hosting",
    },

    {
      icon: (
        <IC_Business className="hover:stroke-white hover:fill-white stroke-[#1976D2] group-hover:fill-white " />
      ),
      title: "Business Service",
    },

    {
      icon: (
        <IC_Developer className="hover:stroke-white hover:fill-white stroke-[#1976D2] group-hover:fill-white" />
      ),
      title: "Developer",
    },
  ];

  return (
    <section className="bg-[#F8F8FD] flex justify-center items-center w-full">
      <div className="flex flex-col  max-w-[1350px]  w-full h-full mx-auto px-6 md:px-10 lg:px-16 xl:px-0 pt-10">
        {/* heading text */}
        <h1 className="text-grey text-[32px] font-[600]   leading-[38px] pt-[2rem]   p-1">
          Companies by Category
        </h1>
        {/* body */}
        <div className="w-full mx-0 items-center flex justify-center relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={3}
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
                slidesPerView: 2,
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
            {hiringcategorydata.map((h, i) => (
              <SwiperSlide
                key={i}
                className="flex flex-col md:flex-row items-center gap-[5px] 
                lg:gap-[32px] justify-center my-[3rem] h-full"
              >
                <HiringCategoryCard key={i} title={h.title} icon={h.icon} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div
            className="custom-next md:absolute md:right-[10px] right-0 transform translate-y-1/2 w-[48px] h-[50px] bg-[#0046BF]
mt-[40px] flex items-center justify-center cursor-pointer"
          >

          <div className="custom-next z-50 absolute md:right-[-25px] right-[-15px] p-2 md:p-0 transform -translate-y-1/2 md:w-[48px] md:h-[50px] bg-[#0046BF] mt-[40px] flex items-center justify-center cursor-pointer">

            <Image src={rightarrow} alt="right-icon" />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default CompaniesCategoryChunk;
