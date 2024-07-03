"use client";
import HiringCategoryCard from "@/components/cards/hiring-category-card/HiringCategoryCard";
import React from "react";
import Hiring_Design from "public/icons/Hiring_Design";
import Fintech_Icon from "public/icons/Hiring_Fintech";
import Hosting_Icon from "public/icons/Hiring_Hosting";
import Business_Icon from "public/icons/Hiring_Business";
import Developer_Icon from "public/icons/Hiring_Developer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HiringCategory = () => {
  const hiringcategorydata = [
    {
      icon: (
        <Hiring_Design className="hover:stroke-white stroke-[#1976D2] group-hover:fill-white  " />
      ),
      title: "Design",
    },

    {
      icon: (
        <Fintech_Icon className="hover:stroke-white stroke-[#1976D2] hover:fill-white group-hover:fill-white" />
      ),

      title: "Fintech",
    },

    {
      icon: (
        <Hosting_Icon className="hover:stroke-white hover:fill-white stroke-[#1976D2]  group-hover:fill-white" />
      ),
      title: "Hosting",
    },

    {
      icon: (
        <Business_Icon className="hover:stroke-white hover:fill-white stroke-[#1976D2] group-hover:fill-white " />
      ),
      title: "Business Service",
    },

    {
      icon: (
        <Developer_Icon className="hover:stroke-white hover:fill-white stroke-[#1976D2] group-hover:fill-white" />
      ),
      title: "Developer",
    },
  ];

  return (
    <section
      className="bg-[#F8F8FD] 
    flex justify-center items-center w-full h-full mx-auto
     "
    >
      <div className="flex flex-col">
        {/* heading text */}

        <h1 className="text-grey text-[32px] font-[600]   leading-[38px] pt-[2rem]   p-1">
          Companies by Category
        </h1>

        {/* body */}
        <div className="w-[360px] sm:w-[850px] md:w-[740px] lg:w-[1218px] mx-0 items-center flex justify-center">
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

export default HiringCategory;
