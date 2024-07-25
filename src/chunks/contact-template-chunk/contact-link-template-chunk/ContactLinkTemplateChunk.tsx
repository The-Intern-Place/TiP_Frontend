import React from "react";
import IC_Facebook from "@assets/icons/IC_Facebook";
import IC_Instagram from "@assets/icons/IC_Instagram";
import IC_LinkedIn from "@assets/icons/IC_LinkedIn";
import { IC_Mail } from "@assets/icons/IC_Mail";
import { IC_Phone } from "@assets/icons/IC_Phone";
import IC_Twitter from "@assets/icons/IC_Twitter";
import Link from "next/link";

function ContactLinkTemplateChunk() {
  return (
    <div className="mt-5 space-y-4">
      <p className="flex justify-center text-3xl font-bold tracking-tight sm:text-2xl font-clash">
        Our Links
      </p>
      <div className="lg:block flex justify-center flex-col items-center">
        <Link className="flex items-center mb-4" href={"#"}>
          <IC_Mail />
          <span className="text-sm font-semibold text-[#1976D2] ml-3">
            theinternplacejobs@gmail.com
          </span>
        </Link>
        <Link className="flex lg:justify-start justify-center " href={"#"}>
          <IC_Phone />
          <span className="text-sm text-[#1976D2] font-semibold ml-3">
            09032884485
          </span>
        </Link>
        <ul className="flex mt-5 space-x-4">
          <li className="bg-[#1976D2] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
            <IC_Facebook />
          </li>
          <li className="bg-[#1976D2] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
            <IC_LinkedIn />
          </li>
          <li className="bg-[#1976D2] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
            <IC_Instagram />
          </li>
          <li className="bg-[#1976D2] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
            <IC_Twitter />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactLinkTemplateChunk;
