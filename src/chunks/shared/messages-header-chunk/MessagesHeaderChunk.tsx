"use client";
import React from "react";
import { MessagesHeaderChunkProps } from "./MessagesHeaderChunk.types";
import Nomad from "public/images/Nomad.svg";
import {
  ArrowDown,
  MobileHamburger,
  Notification,
  Tosin,
} from "@assets/images";
import Link from "next/link";
import Image from "next/image";
import DropDownController from "@/components/controller/drop-down-controller/DropDownController";

const MessagesHeaderChunk = (props: MessagesHeaderChunkProps) => {
  return (
    <>
      <div className="bg-[#FAFBFC] sm:flex items-center w-full md:py-8 sm:py-5 sm:px-4 md:px-7 hidden">
        <h1 className="text-[#1976D2] lg:text-[32px] md:text-[28px] sm:text-[20px] font-bold">
          {props.title}
        </h1>
        <div className="flex md:gap-8 gap-2 items-center ml-auto">
          {props.action}
          <Link href={""}>
            <Image src={Notification} alt="Notification icon" />
          </Link>
          <DropDownController
            options={[
              {
                id: "profiles-switch",
                name: "",
                readonly: true,
                component: () => (
                  <div className="flex items-center justify-between w-full">
                    <p className="text-[#25324B] font-epilogue text-base">
                      Switch profiles
                    </p>
                    <Image src={ArrowDown} className="rotate-180" alt="" />
                  </div>
                ),
              },
              {
                id: "profile",
                name: "Tosin Eme",
                description: "Product Designer",
                icon: <Image src={Tosin} alt="tosin" />,
              },
              {
                id: "company",
                name: "Nomad",
                description: "Company",
                icon: <Image src={Nomad} width={50} height={50} alt="nomad" />,
              },
            ]}
          >
            <div className="flex items-center gap-2.5">
              <Image src={Tosin} alt="tosin" />
              <div>
                <h3 className="md:text-base sm:text-sm">Tosin Eme</h3>
                <p className="md:text-base sm:text-sm">Product Designer</p>
              </div>
              <Image src={ArrowDown} alt="" />
            </div>
          </DropDownController>
        </div>
      </div>

      <div className="flex justify-between items-center gap-4 px-3 py-5 block sm:hidden">
        <Image src={MobileHamburger} alt="hamburger" />
        <h1 className="text-[#1976D2] text-[32px] md:text-[28px] sm:text-[20px] font-bold">
          {props.title}
        </h1>
        <Link href={""}>
          <Image src={Notification} alt="Notification icon" />
        </Link>
      </div>
    </>
  );
};

export default MessagesHeaderChunk;
