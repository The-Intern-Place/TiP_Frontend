"use client";

import React from "react";
import AuthPageLayout from "./AuthPageLayout";
import TextInput from "../../components/inputs/text-input/TextInput";
import Button from "../../components/button/Button";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";

const Login = () => {
  const handleSubmitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };
  return (
    <AuthPageLayout heading="Welcome Back!">
      <form className="w-full py-2 mt-5 space-y-5" onSubmit={handleSubmitForm}>
        <TextInput
          label="email address"
          placeholder="user@example.com"
          type="email"
          overrideStyles="rounded-lg"
          onChange={() => {}}
        />

        <TextInput
          label="password"
          placeholder="Password(8 or more characters)"
          type="password"
          iconRight={<div></div>}
          onChange={() => {}}
        />

        <div className="w-full mt-4 md:mt-5 mb-7 md:mb-10 flex justify-end">
          <Link
            href="#"
            className="text-base md:text-lg text-light-blue capitalize"
          >
            forgot password?
          </Link>
        </div>

        <div className="w-full mt-5">
          <Button>Login</Button>
        </div>
      </form>

      <div className="relative w-full border border-athsSpecial max-w-[200px] sm:max-w-[300px] lg:max-w-[400px] mt-8 mx-auto">
        <p className="w-fit absolute p-[5px] uppercase bg-white left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] text-sm">
          {" "}
          or
        </p>
      </div>

      <section className="flex brandAuthBtns w-full mt-8">
        <div className="border-2 border-athsSpecial w-full lg:max-w-[274px] rounded-lg h-[60px] overflow-hidden">
          <button
            className="w-full h-full flex gap-4 text-sm md:text-base items-center justify-center"
            aria-label="company-logo"
          >
            <FcGoogle className="text-xl md:text-2xl" />{" "}
            <span className="text-[rgba(27,27,27,0.6)]">
              Sign in with Google
            </span>
          </button>
        </div>

        <div className="border-2 border-athsSpecial w-full lg:max-w-[274px] rounded-lg h-[60px] overflow-hidden">
          <button
            className="w-full h-full flex gap-4 text-sm md:text-base items-center justify-center"
            aria-label="company-logo"
          >
            <span className="w-[32px] flex justify-center items-center h-[32px] rounded-[50%] bg-light-blue text-white overflow-hidden">
              <FaLinkedinIn className="text-xl" />
            </span>{" "}
            <span className="text-[rgba(27,27,27,0.6)]">
              Sign in with LinkedIn
            </span>
          </button>
        </div>
      </section>

      <div className="mt-8 text-center">
        <p className="font-medium text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="text-[#0046BF]">
            Sign up
          </Link>
        </p>
      </div>
    </AuthPageLayout>
  );
};

export default Login;
