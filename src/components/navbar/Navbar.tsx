import Image from "next/image";
import { TIP_Logo } from "public";
import React from "react";
import Button from "../button/Button";

const Navbar = () => {
  return (
    <div className="flex justify-between mx-auto max-w-[90%] py-6">
      <Image src={TIP_Logo} width={100} height={100} alt="TIP Logo" />
      <div className="grid grid-flow-col gap-6 items-center text-[#1B1B1B]">
        <p>Find Jobs</p>
        <p>Find Talents</p>
        <Button variant="outlined">Sign up</Button>
        <Button>Log in</Button>
      </div>
    </div>
  );
};

export default Navbar;
