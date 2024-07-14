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
      <div className="flex flex-col items-center max-w-[1350px] xl:px-0 w-full h-full mx-auto px-6 md:px-10 lg:px-16 xl:px-0 pt-10">
        {/* heading text */}
        <h1 className="text-grey text-[32px] font-[600]   leading-[38px] pt-[2rem]   p-1">
          Companies by Category
        </h1>
        {/* body */}
        <div className="w-full mx-0 items-center flex justify-center">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true, el: ".custom-pagination" }}
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            scrollbar={{ draggable: true }}
          >
            {hiringcategorydata.map((h, i) => (
              <SwiperSlide
                key={i}
                className="flex flex-col md:flex-row items-center gap-[5px] 
                lg:gap-[32px] justify-center my-[3rem] w-[350px] h-full"
              >
                <HiringCategoryCard key={i} title={h.title} icon={h.icon} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CompaniesCategoryChunk;
