"use client";
import Button from "@/components/button/Button";
import ArticleCard from "@/components/cards/article-card/ArticleCard";
import TextInput from "@/components/inputs/text-input/TextInput";
import Navbar from "@/components/navbar/Navbar";
import { advices } from "@/utilities/data/career-advice";
import Image from "next/image";
import { SearchBlue, Underline } from "public";
import IC_CardsOption from "public/icons/IC_CardsOption";
import IC_TilesOption from "public/icons/IC_TilesOption";
import React, { useState } from "react";

const page = () => {
  const [cardType, setCardType] = useState<string>("tiles");

  const handleCardStyleChange = (type: string) => {
    setCardType(type);
  };

  return (
    <div className="">
      <Navbar bgcolor="#FAFBFC" />
      <section className="bg-[#FAFBFC]">
        <div className="flex justify-center items-center mx-auto flex-col gap-5 py-9">
          <div className="bg-[#FAFBFC] lg:w-[782px] text-center">
            <h1 className="lg:text-5xl text-[36px]  font-semibold">
              TiP{" "}
              <span className="text-[#26A4FF] relative">
                Career{" "}
                <span className="absolute lg:top-14 top-10 -left-0">
                  <Image alt="" src={Underline} width={200} height={200} />
                </span>
              </span>{" "}
              advice
            </h1>
            <p className="text-center px-10 lg:px-0 text-center py-4 leading-[36px] text-[#1B1B1B]">
              Discover helpful articles, videos, and webinars to guide you in
              your job search and career growth. Dive in and find the advice you
              need to succeed!
            </p>
          </div>
          <div className="bg-white py-3 px-5 w-full md:w-[500px]">
            <div className="grid grid-flow-row grid-rows-[auto_max-content] md:grid-rows-[auto] md:grid-flow-col md:grid-cols-[max-content_auto_max-content] md:gap-6 gap-4 lg:h-[50px] items-center ">
              <Image
                src={SearchBlue}
                alt=""
                className="hidden md:block"
                width={20}
                height={20}
              />
              <div className="md:hidden">
                <TextInput
                  name="search"
                  onChange={() => {}}
                  placeholder="Search"
                  iconLeft={
                    <Image src={SearchBlue} alt="" width={20} height={20} />
                  }
                  label=""
                />
              </div>
              <input
                className="border-b hidden md:block border-[#D6DDEB] h-12 placeholder:text-epilogue placeholder:pl-2 focus:outline-none focus:ring-0 "
                placeholder="Search keyword"
              />
              <Button overrideStyles="rounded-none border-0 fit">Search</Button>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-between items-center w-full h-full max-w-[1350px] mx-auto md:px-12 px-8 lg:px-16 xl:px-0 overflow-auto">
        <div className="pb-14 w-full space-y-4">
          <div className="flex justify-between">
            <section>
              <h2 className="font-semibold text-[#1B1B1B] text-[32px]">
                Articles
              </h2>
              <p>Dive in and find the advice you need to succeed!</p>
            </section>
            <section className="flex gap-3 items-center">
              <div className="" onClick={() => handleCardStyleChange("tiles")}>
                <IC_TilesOption
                  className={`cursor-pointer ${cardType === "tiles" ? "fill-[#4640DE] stroke-[#4640DE] opacity-1" : "fill-[#1B1B1B] opacity-[0.6]"}`}
                />
              </div>
              <div className="" onClick={() => handleCardStyleChange("cards")}>
                <IC_CardsOption
                  className={`cursor-pointer ${cardType === "cards" ? "fill-[#4640DE] stroke-[#4640DE] opacity-1" : "fill-[#1B1B1B] opacity-[0.6]"}`}
                />
              </div>
            </section>
          </div>
          <div
            className={`grid ${cardType === "tiles" ? "lg:grid-cols-3 md:grid-cols-2 grid-cols-1" : "md:grid-cols-2 grid-cols-1"} gap-5`}
          >
            {advices.map((advice, key) => (
              <div key={key}>
                <ArticleCard
                  date={advice.date}
                  description={advice.description}
                  title={advice.title}
                  views={advice.views}
                  cardType={cardType}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
