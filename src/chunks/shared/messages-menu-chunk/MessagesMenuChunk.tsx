import Image from "next/image";
import Link from "next/link";
import { MessagesMenuChunkProps } from "./MessagesMenuChunk.types";
import searchicon from "public/images/searchicon.svg";
import React from "react";

const MessagesMenuChunk = (props: MessagesMenuChunkProps) => {
  return (
    <div className="sm:bg-white sm:border-[1px] lg:w-[502px] md:w-[232px] sm:w-[200px] sm:block overflow-auto max-w-[550px] flex-shrink-0 w-full flex flex-col sticky top-0">
      <div className="flex items-center border-[1px] rounded-lg border-gray w-[50%] lg:px-1 gap-[16px] pt-0  pb-0 lg:pl-[16px] mx-8 mt-5">
        <Image
          src={searchicon}
          alt="searchIcon"
          className=" md:w-[24px] w-[20px] md:h-[24px] h-[20px] ml-[0.4rem] md:ml-0"
        />
        <input
          type="text"
          placeholder="Search"
          className=" bg-transparent focus:outline-none 
            focus:ring-0  lg:w-[485px]  w-full h-[60px] items-center"
        />
      </div>
      <div className="flex flex-col gap-4 px-7 py-6">
        {props.options.map((option, key) => (
          <Link
            key={key}
            href={option.id}
            className="flex items-center gap-4 px-3 py-1"
          >
            {option.icon ? (
              option.icon
            ) : (
              <Image src={option.image as string} alt={option.name} />
            )}
            <p className="capitalize w-full">{option.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MessagesMenuChunk;
