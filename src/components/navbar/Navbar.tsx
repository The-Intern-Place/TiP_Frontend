import Image from "next/image";
import { TIP_Logo } from "public";
import React from "react";
import Button from "../button/Button";

const Navbar = () => {
  return (
    <div className="flex justify-between mx-auto max-w-[90%] py-6 ">
      <Image src={TIP_Logo} width={100} height={100} alt="TIP Logo" />
      <div className="grid grid-flow-col gap-10 items-center text-[#1B1B1B]">
        <div className="flex gap-6 mr-[10%] w-full">
          <p>Find Jobs</p>
          <p>Find Talents</p>
        </div>
        <Button variant="outlined" title="Sign up" />
        <Button title="Log in" />
      </div>
    </div>
  );
};

export default Navbar;
