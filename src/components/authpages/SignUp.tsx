"use client";

import { SetStateAction, useEffect, useState } from "react";
import AuthPageLayout from "./AuthPageLayout";
import TextInput from "../inputs/text-input/TextInput";
import CustomDatePicker from "../inputs/select-date-picker/CustomDatePicker";
import SelectInput from "../inputs/select-input/SelectInput";
import axios from "axios";
import { SelectCountryProps } from "../inputs/select-input/SelectInput.types";
import Button from "../button/Button";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
import Link from "next/link";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [isError, setIsError] = useState("");
  const [countryCode, setCountryCode] = useState<string>("");
  const [country, setCountry] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState({
    day: "",
    month: "",
    year: "",
  });

  const handleSelectCountry = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setCountry(e.target.value);

    const countryExists = countries.find((country: SelectCountryProps) => {
      return country?.name === e.target.value;
    });

    if (countryExists)
      setCountryCode((countryExists as SelectCountryProps).dial_code);
  };

  const handleSelectDateOfBirth = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setDateOfBirth((prev) => ({ ...prev, [name]: value }));
  };

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

        <CustomDatePicker
          onChange={handleSelectDateOfBirth}
          dateValue={dateOfBirth}
        />

        <div className="flex flex-col sm:flex-row justify-between items center sm:gap-8 gap-6 w-full">
          <SelectInput
            label="gender"
            name="gender"
            placeholder="Select"
            optionsData={
              <>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </>
            }
          />
          <SelectInput
            label="location"
            name="location"
            placeholder="Select"
            value={country}
            onChange={handleSelectCountry}
            optionsData={
              <>
                {isLoading ? (
                  <option value="Loading...">Loading...</option>
                ) : (
                  <>
                    {countries.map((country: SelectCountryProps, i) => {
                      return (
                        <option value={country.name} key={i}>
                          {country.name}
                        </option>
                      );
                    })}
                  </>
                )}
              </>
            }
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-between items center sm:gap-8 gap-6 w-full">
          <TextInput
            label="country code"
            placeholder="Nigeria (+234)"
            type="text"
            name="firstName"
            value={countryCode && `${country} (${countryCode})`}
            readOnly
            onChange={() => {}}
          />
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

      <div className="relative w-full border border-athsSpecial max-w-[200px] sm:max-w-[300px] lg:max-w-[400px] mt-8 mx-auto">
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
            <IoLogoApple className="text-xl md:text-2xl" />{" "}
            <span className="text-[rgba(27,27,27,0.6)]">
              Sign up with Apple
            </span>
          </button>
        </div>
      </section>

      <div className="mt-8 text-center">
        <p className="font-medium text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-[#0046BF]">
            Login
          </Link>
        </p>
      </div>
    </AuthPageLayout>
  );
};

export default SignUp;
