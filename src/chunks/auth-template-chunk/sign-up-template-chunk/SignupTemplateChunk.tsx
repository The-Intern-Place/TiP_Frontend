"use client";
import Button from "@/components/button/Button";
import ControlledSelect from "@/components/inputs/select-input/ControlledSelect";
import ControlledInput from "@/components/inputs/text-input/ControlledInput";
import AuthPageLayout from "@/layouts/auth-layout/AuthPageLayout";
import Link from "next/link";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import useSignupTemplateChunk from "./useSignupTemplateChunk";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

const SignupTemplateChunk = () => {
  const {
    form: {
      handleSubmit,
      control,
      formState: { isValid },
    },
    handleSubmitForm,
    signingUp,
    countryOptions,
  } = useSignupTemplateChunk();

  return (
    <>
      <Head>
        <title>The Intern Place | Sign Up</title>
        <meta name="description" content={"The Intern Place"} />
      </Head>
      <AuthPageLayout heading="Get Started">
        <form
          className="w-full py-2 mt-5 space-y-5"
          onSubmit={handleSubmit(handleSubmitForm)}
        >
          <div className="flex flex-col sm:flex-row justify-between items center sm:gap-8 gap-6 w-full">
            <ControlledInput
              label="first name"
              placeholder="Jane"
              control={control}
              type="text"
              name="firstName"
            />
            <ControlledInput
              label="last name"
              placeholder="Doe"
              control={control}
              type="text"
              name="lastName"
            />
          </div>
          <ControlledInput
            label="email address"
            control={control}
            placeholder="user@example.com"
            type="email"
            name="email"
          />

          <ControlledInput
            label="create password"
            placeholder="Password (8 or more characters)"
            control={control}
            type="password"
            name="password"
          />

          <div className="flex flex-col sm:flex-row justify-between items center sm:gap-8 gap-6 w-full">
            <ControlledSelect
              label="code"
              name="code"
              placeholder="Nigeria (+234)"
              control={control}
              options={countryOptions}
            />
            <ControlledInput
              label="mobile number"
              placeholder="080XXXXXXXXX"
              type="text"
              name="phone"
              control={control}
            />
          </div>

          <div className="w-full mt-5">
            <Button loading={signingUp} disabled={!isValid}>
              Continue
            </Button>
          </div>
        </form>
        <div className="relative w-full border border-athsSpecial max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] xl:max-w-[400px] mt-8 mx-auto">
          <p className="w-fit absolute p-[5px] uppercase bg-white left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] text-sm">
            {" "}
            or
          </p>
        </div>
        <section className="flex brandAuthBtns w-full mt-8">
          <div className="border-2 border-athsSpecial w-full sm:max-w-[274px] rounded-lg h-[60px] overflow-hidden">
            <button
              className="w-full h-full flex gap-4 text-sm md:text-base items-center justify-center"
              aria-label="company-logo"
            >
              <FcGoogle className="text-xl md:text-2xl" />{" "}
              <span className="text-[rgba(27,27,27,0.6)]">
                Sign up with Google
              </span>
            </button>
          </div>

          <div className="border-2 border-athsSpecial w-full sm:max-w-[274px] rounded-lg h-[60px] overflow-hidden">
            <button
              className="w-full h-full flex gap-4 text-sm md:text-base items-center justify-center"
              aria-label="company-logo"
            >
              <span className="w-[32px] flex justify-center items-center h-[32px] rounded-[50%] bg-light-blue text-white overflow-hidden">
                <FaLinkedinIn className="text-xl" />
              </span>{" "}
              <span className="text-[rgba(27,27,27,0.6)]">
                Sign up with LinkedIn
              </span>
            </button>
          </div>
        </section>
        <div className="mt-6 text-center">
          <p className="font-medium text-sm text-[rgba(27,27,27,0.6)]">
            Already have an account?{" "}
            <Link href="/login" className="text-[#0046BF]">
              Login
            </Link>
          </p>
        </div>
        <div className="mt-6 text-center">
          <p className="font-medium text-sm text-[rgba(27,27,27,0.6)]">
            By clicking &apos;Continue&apos;, you acknowledge that you have read
            and accept the{" "}
            <Link href="#" className="text-[#0046BF]">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-[#0046BF]">
              Privacy Policy.
            </Link>
          </p>
        </div>
        <Toaster />
      </AuthPageLayout>
    </>
  );
};

export default SignupTemplateChunk;
