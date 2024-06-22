"use client";

import { SetStateAction, useEffect, useState } from "react";
import AuthPageLayout from "./AuthPageLayout";
import TextInput from "../../components/inputs/text-input/TextInput";
import CustomDatePicker from "../../components/inputs/select-date-picker/CustomDatePicker";
import SelectInput from "../../components/inputs/select-input/SelectInput";
import axios from "axios";
import { SelectCountryProps } from "../../components/inputs/select-input/SelectInput.types";
import Button from "../../components/button/Button";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useAppDispatch } from "@/redux/store";
import { signUpAction } from "@/redux/actions/authActions";
import { ISignUpData } from "@/utilities/types/types";
import { FaLinkedinIn } from "react-icons/fa6";

const SignUp = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [isError, setIsError] = useState("");
  const [countryCode, setCountryCode] = useState<string>("");
  const [country, setCountry] = useState("");

  const handleSubmitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  useEffect(() => {
    const handleGetAllCountries = async () => {
      try {
        setIsLoading(true);
        const request = await axios.get(
          `${process.env.NEXT_PUBLIC_COUNTRIES_API}`
        );

        const res = await request.data;
        setIsLoading(false);
        if (res.data) {
          setCountries(res.data);
        }

        if (res.error) {
          setIsError("Failed to load data.");
        }
      } catch (error) {
        console.log(error);
      }
    };

    handleGetAllCountries();
  }, []);

  const handleSubmit = async () => {
    // Dummy Data
    const payload: ISignUpData = {
      fname: "John",
      lname: "Doe",
      email: "john.doe@example.com",
      password: "1234567890",
      dateOfBirth: "1990-05-15T08:00:00",
      gender: "male",
      location: "Nigeria",
      countryCode: "+234",
      phoneNumber: "99999999999",
    };

    dispatch(signUpAction(payload));
  };

  return (
    <AuthPageLayout heading="Get Started">
      <form className="w-full py-2 mt-5 space-y-5" onSubmit={handleSubmitForm}>
        <div className="flex flex-col sm:flex-row justify-between items center sm:gap-8 gap-6 w-full">
          <TextInput
            label="first name"
            placeholder="Jane"
            type="text"
            name="firstName"
            onChange={() => {}}
          />
          <TextInput
            label="last name"
            placeholder="Doe"
            type="text"
            name="lastName"
            onChange={() => {}}
          />
        </div>
        <TextInput
          label="email address"
          placeholder="user@example.com"
          type="email"
          name="emailAddress"
          onChange={() => {}}
        />

        <TextInput
          label="create password"
          placeholder="Password(8 or more characters)"
          type="password"
          iconRight={<div></div>}
          name="password"
          onChange={() => {}}
        />

        <div className="flex flex-col sm:flex-row justify-between items center sm:gap-8 gap-6 w-full">
          <div className="hidden md:block">
            <SelectInput
              label="code"
              name="code"
              placeholder="Nigeria (+234)"
              optionsData={
                <>
                  {isLoading ? (
                    <option value="Loading...">Loading...</option>
                  ) : (
                    <>
                      {countries.map((country: any, i) => {
                        return (
                          <option
                            value={country.dial_code}
                            key={i}
                            className="text-[#575757]"
                          >
                            {country.name} ({country.dial_code})
                          </option>
                        );
                      })}
                    </>
                  )}
                </>
              }
            />
          </div>

          <div className="md:hidden max-w-[100px] w-full">
            <SelectInput
              label="code"
              name="code"
              placeholder="+234"
              optionsData={
                <>
                  {isLoading ? (
                    <option value="Loading...">Loading...</option>
                  ) : (
                    <>
                      {countries.map((country: any, i) => {
                        return (
                          <option
                            value={country.dial_code}
                            key={i}
                            className="text-[#575757]"
                          >
                            {country.dial_code}
                          </option>
                        );
                      })}
                    </>
                  )}
                </>
              }
            />
          </div>

          <TextInput
            label="mobile number"
            placeholder="080XXXXXXXXX"
            type="text"
            name="mobileNumber"
            onChange={() => {}}
          />
        </div>

        <div className="w-full mt-5">
          <Button>Continue</Button>
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
