import Image from "next/image";
import { TIP_Logo } from "public";
import React from "react";
import Button from "@/components/button/Button";
import TextInput from "../inputs/text-input/TextInput";

const Footer = () => {
  return (
    <footer className="bg-[#0046BF] text-white">
      <div className="container mx-auto max-w-[90%] py-16">
        <div className="grid grid-flow-col grid-cols-[auto,auto,max-content] pb-6">
          <Image src={TIP_Logo} alt="Logo" />
          <div>
          <ul className="space-y-3">
            <li className="text-2xl font-semibold">About</li>
            <li>Founders</li>
            <li>Contact Us </li>
            <li>Terms</li>
            <li>Privacy Policy</li>
          </ul>
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl font-semibold">Get Notifications</h1>
            <p>Get the latest job news sent to your inbox. </p>
            <TextInput
              label=""
              iconRight={
                <div className="">
                  <Button variant="secondary">Subscribe</Button>
                </div>
              }
            />
          </div>
        </div>
        <hr className="text-white" />
      </div>
    </footer>
  );
};

export default Footer;
