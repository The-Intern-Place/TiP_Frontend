import { TIP_Logo, TipLogo } from "@assets/images";
import React from "react";
import { sideBarData } from "../../../../src/utils/data/sideBar";
import Link from "next/link";
import Image from "next/image";

const SidebarChunk = (Props: { className: string }) => {
  return (
    <div className={Props.className}>
      {/* Logo */}
      <div className=" flex flex-col items-center justify-center gap-1 py-10">
        <Image src={TipLogo} alt="TiP" width={65} height={69.2} />
        <h3 className="">The Intern Place</h3>
      </div>
      {/* Nav */}
      <div className=" w-full flex flex-col gap-[40px]">
        {sideBarData?.topNav?.map((item: any, index: any) => (
          <div
            className="flex items-center gap-3 py-3 px-4 hover:bg-[#1976D21A] "
            key={index}
          >
            <div>{item?.icon}</div>
            <Link
              className="text-base font-normal font-epilogue text-black hover:text-[#1976D2]"
              href={item?.link}
            >
              {item?.title}
            </Link>
            {item?.notification && (
              <div className="py-[10px] px-[10px] bg-[#1976D2]">
                {item?.notification}
              </div>
            )}
            {/* <div
              className={`py-[10px] px-[10px] ${item?.notification && `bg-[#1976D2]`} `}
            >
              {item?.notification}
            </div> */}
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col gap-[40px] border-t pt-5">
        {sideBarData?.bottomNav?.map((item: any, index: any) => (
          <div
            className="flex items-center gap-3 py-3 px-4 hover:bg-[#1976D21A]"
            key={index}
          >
            <div>{item?.icon}</div>
            <Link
              className="text-base font-normal font-epilogue text-black hover:text-[#1976D2]"
              href={item?.link}
            >
              {item?.title}
            </Link>
            {item?.notification && (
              <div className="py-[10px] px-[10px] bg-[#1976D2]">
                {item?.notification}
              </div>
            )}
            {/* <div
              className={`py-[10px] px-[10px] ${item?.notification && `bg-[#1976D2]`} `}
            >
              {item?.notification}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarChunk;
