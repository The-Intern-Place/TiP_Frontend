"use client";
import Image from "next/image";
import { TIP_Logo } from "public";
import React from "react";
import Button from "../button/Button";
import Link from "next/link";

type NavbarProps = {
  bgcolor?: string;
};

const Navbar = (props: NavbarProps) => {
  return (
    <div
      className={`flex justify-between items-center w-full h-full
         max-w-[1350px] mx-auto lg:px-16 xl:px-0 py-3 bg-[${props.bgcolor ?? "#B5CAEC"}]`}
    >
      <Link href={"/"}>
        <Image src={TIP_Logo} width={70} height={70} alt="TIP Logo" />
      </Link>
      <div className="flex gap-10 w-fit">
        <p>Find Jobs</p>
        <p>Find Talents</p>
      </div>
      <div className="grid grid-flow-col w-fit gap-10 items-center text-[#1B1B1B]">
        <Button variant="transparent" fit>
          <Link href={"/login"}>Log in</Link>{" "}
        </Button>
        <Button overideStyles="rounded-none" fit>
          <Link href={"/sign-up"}>Sign Up</Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
