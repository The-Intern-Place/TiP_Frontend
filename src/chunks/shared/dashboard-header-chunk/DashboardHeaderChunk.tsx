"use client";
import React from "react";
import { DashboardHeaderChunkProps } from "./DashboardHeaderChunk.types";
import Nomad from "public/images/Nomad.svg";
import {
  ApplicationNotification,
  ArrowDown,
  MobileHamburger,
  Notification,
  Tosin,
} from "@assets/images";
import Link from "next/link";
import Image from "next/image";
import DropDownController from "@/components/controller/drop-down-controller/DropDownController";
import IC_Search from "@assets/icons/IC_Search";

const DashboardHeaderChunk = (props: DashboardHeaderChunkProps) => {
  return (
    <>
      <div className="bg-[#FAFBFC] sm:flex items-center w-full py-5 sm:px-4 md:px-7 hidden">
        <h1 className="text-[#1976D2] lg:text-[32px] md:text-[28px] sm:text-[20px] font-bold">
          {props.title}
        </h1>
        <div className="flex md:gap-8 gap-2 items-center ml-auto">
          {props.action}
          {props.company && (
            <Link
              href={""}
              className="border-2 relative border-[#1976D2] rounded-full p-2"
            >
              <Image src={ApplicationNotification} alt="Notification icon" />
              <p className="absolute top-1 right-1 bg-[#1976D2] rounded-[40%] text-white p-[2px] text-[8px]">
                3
              </p>
            </Link>
          )}
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
            {!props.company ? (
              <div className="flex items-center gap-2.5">
                <Image src={Tosin} alt="tosin" />
                <div>
                  <h3 className="md:text-base sm:text-sm">Tosin Eme</h3>
                  <p className="md:text-base sm:text-sm">Product Designer</p>
                </div>
                <Image src={ArrowDown} alt="" />
              </div>
            ) : (
              <div className="flex items-center gap-2.5">
                <Image src={Nomad} width={50} height={50} alt="nomad" />
                <div>
                  <h3 className="md:text-base sm:text-sm font-bold">Nomad</h3>
                  <p className="md:text-base sm:text-sm">Company</p>
                </div>
                <Image src={ArrowDown} alt="" />
              </div>
            )}
          </DropDownController>
        </div>
      </div>

      <div className="flex items-center gap-4 px-3 py-5  sm:hidden">
        <Image src={MobileHamburger} alt="hamburger" />
        <div className="relative w-full">
          <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <IC_Search color="black" />
          </span>
          <input
            className="bg-white rounded-full w-full px-6 py-4"
            placeholder="Search"
          />
        </div>
        <Link href={""}>
          <Image src={Notification} alt="Notification icon" />
        </Link>
      </div>
    </>
  );
};

export default DashboardHeaderChunk;
