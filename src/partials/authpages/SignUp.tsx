"use client";
import { useEffect, useState } from "react";
import AuthPageLayout from "./AuthPageLayout";
import axios from "axios";
import Button from "../../components/button/Button";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";
import ControlledInput from "@/components/inputs/text-input/ControlledInput";
import { useForm } from "react-hook-form";
import { ListItem } from "@/components/inputs/select-input/SelectInput.types";
import ControlledSelect from "@/components/inputs/select-input/ControlledSelect";
import { signUpResolver } from "@/validation/auth.schema";
import { useSignUpMutation } from "@/services/auth.service";
import { ISignUpInput } from "@/interfaces/user.interface";
import { setToken } from "@/helpers/auth";

const SignUp = () => {
  const [countries, setCountries] = useState([]);
  const [handleSignUpSubmit] =
    useSignUpMutation();

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<ISignUpInput>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      code: "",
    },
    mode: "onChange",
    resolver: signUpResolver,
  });

  const countryOptions: ListItem[] =
    countries?.map((country: any) => {
      return {
        id: country.dial_code as string,
        name: `${country.name} (${country.dial_code})`,
      };
    }) ?? [];

  useEffect(() => {
    const handleGetAllCountries = async () => {
      try {
        const request = await axios.get(
          `${process.env.NEXT_PUBLIC_COUNTRIES_API}`,
        );

        const res = await request.data;
        if (res.data) {
          setCountries(res.data);
        }
      } catch (error) {}
    };

    handleGetAllCountries();
  }, []);

  const handleSignup = async (data: ISignUpInput) => {
    try {
      const payload = {
        fname: data.firstName,
        lname: data.lastName,
        email: data.email,
        password: data.password,
        dateOfBirth: "1990-05-15T08:00:00",
        gender: "female",
        location: "Nigeria",
        countryCode: data.code,
        phoneNumber: data.phone,
      };
      const res = await handleSignUpSubmit(payload).unwrap();
      if (res?.status === "success") {
        setToken(res?.token);
      }
    } catch (error) {}
  };

  return (
    <AuthPageLayout heading="Get Started">
      <form
        className="w-full py-2 mt-5 space-y-5"
        onSubmit={handleSubmit(handleSignup)}
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
          <Button disabled={!isValid}>Continue</Button>
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
    </AuthPageLayout>
  );
};

export default SignUp;
