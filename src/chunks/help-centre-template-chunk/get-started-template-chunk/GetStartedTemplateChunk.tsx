"use client";
import React, { useEffect, useState } from "react";
import { IoClose, IoSearchOutline } from "react-icons/io5";
import useGetStartTemplateChunk, { jobFaqs } from "./useGetStartTemplateChunk";
import Link from "next/link";
import { useNavigation } from "react-day-picker";
import { useRouter } from "next/navigation";

const GetStartedTemplateChunk = () => {
  const { jobSearchFAQs, subNav } = useGetStartTemplateChunk();
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [filteredSearch, setFilteredSearch] = useState<jobFaqs[]>([]);
  const [isActive, setIsActive] = useState<string>("/getting-started");
  const handleClick = (url: string) => {
    setIsActive(url);
  };

  useEffect(() => {
    console.log("useEffect triggered");
    console.log("searchText:", searchText);
    console.log("jobSearchFAQs:", jobSearchFAQs);

    const filtered: jobFaqs[] = jobSearchFAQs.filter((item: jobFaqs) =>
      item?.question.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredSearch(filtered);
  }, [searchText]);
  return (
    <div className="hidden sm:flex flex-col gap-3 px-4 border-t-[1px] border-r-[1px]  border-[#D6DDEB]">
      <div className="">
        <h1 className="font-epilogue font-semibold text-base text-[#515B6F] my-6">
          Type your question or search keyword
        </h1>
        <div className="hidden md:inline-flex flex-row max-w-3xl w-full relative ">
          {searchText ? (
            <IoClose
              onClick={() => setSearchText("")}
              className="absolute top-2.5 left-4 text-xl text-[#515B6F99]"
            />
          ) : (
            <IoSearchOutline className="absolute top-2.5 left-4 text-xl text-[#515B6F99]" />
          )}
          <input
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            type="text"
            className="w-full flex-1 rounded-[12px] border-0 py-2 text-gray-900 text-lg placeholder:text-base placeholder:tracking-wide shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-normal focus:ring-1 px-12   focus:ring-inset focus:ring-darkText sm:text-sm sm:leading-6 "
            placeholder="Search"
            value={searchText}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start justify-start py-5">
        {subNav?.map((nav, index) => (
          <div
            className="w-full border-b-[1px] border-[#D6DDEB] py-3"
            key={index}
          >
            <Link
              className={`font-semibold ${isActive === nav?.url ? `text-blue` : "text-[#515B6F]"}  text-[18px] font-epilogue`}
              href={nav?.url}
              onClick={() => handleClick(nav?.url)}
            >
              {nav?.button}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetStartedTemplateChunk;
