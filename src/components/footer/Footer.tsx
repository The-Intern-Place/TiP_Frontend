import Image from "next/image";
import { TIP_Logo } from "public";
import React from "react";
import Button from "@/components/button/Button";
import TextInput from "../inputs/text-input/TextInput";
import IC_Facebook from "public/icons/IC_Facebook";
import IC_Instagram from "public/icons/IC_Instagram";
import IC_LinkedIn from "public/icons/IC_LinkedIn";
import IC_Twitter from "public/icons/IC_Twitter";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#002360] text-white">
      <div className="w-full h-full max-w-[1350px] mx-auto px-16 py-8 space-y-6 lg:space-y-0 xl:px-0">
        <Image src={TIP_Logo} alt="Logo" className="lg:hidden" />
        <div className="flex flex-wrap md:grid md:grid-flow-col gap-7 w-full">
          <Image src={TIP_Logo} alt="Logo" className="hidden lg:block" />
          <div>
            <ul className="space-y-3">
              <li className="text-lg font-semibold">Candidates</li>
              <li>Job Listings</li>
              <li>Skills Assessment </li>
              <li>Companies Hiring</li>
              <li>CV Services</li>
              <li>
                <Link href={"/career-advice"}>Career Tips</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3">
              <li className="text-lg font-semibold">Employer</li>
              <li>Post A Job</li>
              <li>Shortlisting Services</li>
              <li>Candidate Search</li>
              <li>Advertise</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3">
              <li className="text-lg font-semibold">About</li>
              <li>Founders</li>
              <li>Contact Us </li>
              <li>Terms</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h1 className="text-lg font-semibold">Get Notifications</h1>
            <p>The latest job news and articles will be sent to your inbox. </p>
            <div className="flex gap-3 justify-center items-center">
              <TextInput
                label=""
                overrideStyles="border-none mb-0"
                placeholder="Email Address"
                onChange={() => {}}
              />
              <Button overideStyles="border-0 rounded-none" fit>
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="py-4">
          <hr className="text-white" />
        </div>
        <div className="flex justify-between px-12">
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
