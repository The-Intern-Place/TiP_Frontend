import Image from "next/image";
import { TIP_Logo } from "@assets/images";
import React from "react";
import Button from "@/components/button/Button";
import TextInput from "../inputs/text-input/TextInput";
import Link from "next/link";
import IC_Facebook from "public/icons/IC_Facebook";
import IC_Instagram from "public/icons/IC_Instagram";
import IC_LinkedIn from "public/icons/IC_LinkedIn";
import IC_Twitter from "public/icons/IC_Twitter";

const Footer = () => {
  return (
    <footer className="bg-[#002360] text-white w-full">
      <div className="w-full h-full max-w-[1350px] mx-auto lg:px-16 md:px-10 px-6 py-8 space-y-6 lg:space-y-0 xl:px-0">
        <Image src={TIP_Logo} alt="Logo" className="lg:hidden" />
        <div className="flex flex-wrap md:grid md:grid-flow-col lg:gap-7 gap-3 w-full">
          <Image src={TIP_Logo} alt="Logo" className="hidden lg:block" />
          <div className="flex flex-col gap-4">
            <ul className="space-y-3">
              <li className="text-lg font-semibold">Candidates</li>
              <li>Job Listings</li>
              <li>Skills Assessment </li>
              <li>
                <Link href={"/hiring"}>Companies Hiring</Link>
              </li>
              <li>CV Services</li>
              <li>
                <Link href={"/career-advice"}>Career Tips</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3">
              <li className="text-lg font-semibold">Employer</li>
              <li className="pb-3">Post A Job</li>
              <li>
                {" "}
                <Link href="/short-listing">Shortlisting Services</Link>
              </li>
              <li>Candidate Search</li>
              <li>
                {" "}
                <Link href="/advertise">Advertise</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 w-full mt-2 md:mt-0">
            <ul className="space-y-3">
              <li className="text-lg font-semibold">About</li>
              <li className="pb-3">
                <Link href="/founders">
                  {" "}
                  <Link href="/founders"> Founders</Link>
                </Link>
              </li>
              <li>
                {" "}
                <Link href="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link href="/terms">Terms</Link>
              </li>
              <li>
                <Link href="/policy">Privacy Policy</Link>
              </li>
              <li className="pb-3">
                <Link href="/founders">Founders</Link>
              </li>
              <li>
                {" "}
                <Link href="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link href="/terms">Terms</Link>
              </li>
              <li>
                <Link href="/policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-lg font-semibold">Get Notifications</h1>
            <p>The latest job news and articles will be sent to your inbox. </p>
            <div className="flex gap-3 justify-center items-center">
              <TextInput
                label=""
                overrideStyles="border-none mb-0"
                placeholder="Email Address"
                onChange={() => {}}
              />
              <Button
                overrideStyles="border-0 rounded-none hidden md:block"
                fit
              >
                Subscribe
              </Button>
              <Button
                overrideStyles="border-0 p-0 rounded-none block md:hidden"
                fit
              >
                <Image src="/send.svg" alt="" width="30" height="30" />
              </Button>
            </div>
          </div>
        </div>
        <div className="py-4">
          <hr className="text-white" />
        </div>
        <div className="flex md:flex-row flex-col md:gap-0 gap-4 items-center justify-between md:px-12">
          <h4>© 2024 The Intern Place</h4>
          <div className="flex gap-3">
            <IC_Facebook />
            <IC_Instagram />
            <IC_LinkedIn />
            <IC_Twitter />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
