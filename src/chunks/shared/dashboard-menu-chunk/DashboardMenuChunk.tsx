"use client";
import Image from "next/image";
import React from "react";
import { TipLogo } from "@assets/images";
import { DashboardMenuChunkProps } from "./DashboardMenuChunk.types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardMenuChunk = (props: DashboardMenuChunkProps) => {
  const pathname = usePathname();
  return (
    <div className="bg-white h-screen lg:w-[302px] md:w-[232px] sm:w-[200px] hidden sm:block overflow-auto max-w-[250px] flex-shrink-0 w-full flex flex-col sticky top-0">
      <Image src={TipLogo} alt="TiP logo" className="py-3 w-16 mx-auto" />
      <div className="flex flex-col gap-4 px-4 py-6">
        {props.options.map((option, key) => (
          <Link
            key={key}
            href={option.id}
            className={`flex items-center gap-4 px-3 py-0.5 ${pathname === option.id ? "bg-[#1976D21A] text-[#1976D2] py-2 rounded" : ""}`}
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
      <div className="flex flex-col gap-4 border-t py-6 px-4 border-[#D6DDEB]">
        {props.subOptions?.map((option, key) => (
          <Link
            key={key}
            href={option.id}
            className="flex items-center gap-4 px-3"
          >
            {option.icon ? (
              option.icon
            ) : (
              <Image src={option.image as string} alt={option.name} />
            )}
            <p className="capitalize">{option.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardMenuChunk;
