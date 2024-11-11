"use client";
import React from "react";
import { ProfileSchema } from "@/validation/schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "@/components/inputs/text-input/TextInput";
import CustomDatePicker from "@/components/inputs/select-date-picker/CustomDatePicker";
import SelectInput from "@/components/inputs/select-input/SelectInput";
import Button from "@/components/button/Button";
import { optionsData } from "./useSettingsProfileForm";

const SettingsProfileForm = () => {
  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      date_of_birth: new Date(),
      gender: "",
    },
  });
  const onSubmit = (data: z.infer<typeof ProfileSchema>) => {
    console.log("submitted", data);
  };
  const [dateValue, setDateValue] = React.useState({
    day: "",
    month: "",
    year: "",
  });

  return (
    <React.Fragment>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
        action=""
      >
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-5">
            <TextInput
              overrideStyles=""
              label="First Name"
              onChange={() => {}}
              // {...form.register("first_name")}
              type="text"
              placeholder="Type in your first name"
              name="first_name"
            />
            <TextInput
              overrideStyles=""
              label="Last Name"
              onChange={() => {}}
              // {...form.register("last_name")}
              type="text"
              placeholder="Type in your last name"
              name="last_name"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <TextInput
              label="Email"
              onChange={() => {}}
              // {...form.register("email")}
              type="text"
              placeholder="Type in your full email"
              name="email"
            />

            <TextInput
              label="Phone Number"
              onChange={() => {}}
              // {...form.register("mobile_number")}
              type="text"
              placeholder="+234"
              name="mobile_number"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <CustomDatePicker
              onChange={() => {}}
              // {...form.register("first_name")}
              dateValue={dateValue}
              overrideStyles="md:gap-1 mt-0"
              name="date_of_birth"
            />

            <SelectInput
              overrideStyles="border-[#D6DDEB] border-2"
              label="Gender"
              optionsData={optionsData!.map((option: string, index: any) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
              placeholder="Gender"
              name="gender"
              onChange={() => {}}
              // {...form.register("gender")}
            />
          </div>
        </div>
        <div className="w-full flex justify-end">
          <Button
            type="submit"
            overrideStyles="w-[161px] sm:w-[161px]"
            onClick={() => onsubmit}
          >
            Save changes
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default SettingsProfileForm;
