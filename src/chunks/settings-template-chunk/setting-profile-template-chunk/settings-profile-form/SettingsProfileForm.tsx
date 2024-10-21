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

const SettingsProfileForm = () => {
  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      name: "",
      email: "",
      date_of_birth: new Date(),
      gender: "",
    },
  });
  const onSubmit = () => {
    console.log("submitted");
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
          <TextInput
            label="Full Name"
            onChange={() => {}}
            type="text"
            placeholder="Type in your full name"
            name="name"
          />

          <div className="flex flex-col md:flex-row gap-4">
            <TextInput
              label="Email"
              onChange={() => {}}
              type="text"
              placeholder="Type in your full email"
              name="email"
            />

            <TextInput
              label="Phone Number"
              onChange={() => {}}
              type="text"
              placeholder="+234"
              name="mobile_number"
            />
          </div>

          <div className="">
            <CustomDatePicker onChange={() => {}} dateValue={dateValue} />

            <SelectInput
              label="Gender"
              name="gender"
              optionsData={["Male", "Female", "Prefer not to say"]}
              placeholder="Male"
            />
          </div>
        </div>
        <div className="w-full flex justify-end">
          <Button overrideStyles="w-[161px] sm:w-[161px]">Save changes</Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default SettingsProfileForm;
