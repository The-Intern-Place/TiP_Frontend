"use client";
import React from "react";
// import { format } from "date-fns";
// import { Calendar as CalendarIcon } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { Calendar } from "@/components/ui/calendar";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

import { ProfileSchema } from "@/validation/schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import { Input } from "@/components/ui/input";
import TextInput from "@/components/inputs/text-input/TextInput";
import CustomDatePicker from "@/components/inputs/select-date-picker/CustomDatePicker";
import SelectInput from "@/components/inputs/select-input/SelectInput";
import Button from "@/components/button/Button";

const SettingsProfileForm = () => {
  // const [date, setDate] = React.useState<Date>();
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

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setDateValue((prevDateValue) => ({ ...prevDateValue, [name]: value }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Get the selected date values from the Custom DatePicker component
    const dateValue = {
      day: event.target.day.value,
      month: event.target.month.value,
      year: event.target.year.value,
    };
    // Do something with the selected date values
    console.log(dateValue);
  };
  return (
    <React.Fragment>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
        action=""
      >
        <div className="space-y-4">
          {/* <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#1b1b1b] text-base font-epilogue font-semibold">
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-[60px]"
                      type="text"
                      placeholder="Type in your full name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
          <TextInput
            label="Full Name"
            onChange={() => {}}
            type="text"
            placeholder="Type in your full name"
            name="name"
          />

          {/* email and phone no */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#1b1b1b] text-base font-epilogue font-semibold">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-[60px]"
                        type="text"
                        placeholder="Type in your full email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
            <TextInput
              label="Email"
              onChange={() => {}}
              type="text"
              placeholder="Type in your full email"
              name="email"
            />
            {/* <FormField
                control={form.control}
                name="mobile_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#1b1b1b] text-base font-epilogue font-semibold">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-[60px]"
                        type="text"
                        placeholder="+234"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
            <TextInput
              label="Phone Number"
              onChange={() => {}}
              type="text"
              placeholder="+234"
              name="mobile_number"
            />
          </div>
          {/* DOB and gender */}
          <div className="">
            {/* DOB */}
            {/* <FormField
                control={form.control}
                name="date_of_birth"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-[#1b1b1b] text-base font-epilogue font-semibold">
                      Date of birth
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal h-[60px]",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormDescription className="text-[#515B6F] text-base font-epilogue">
                      Your date of birth is used to calculate your age.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
            <CustomDatePicker onChange={() => {}} dateValue={dateValue} />
            {/* Gender */}
            {/* <Select>
                <SelectTrigger className="w-full h-[60px]">
                  <SelectValue placeholder="Select a gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Gender</SelectLabel>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="prefer no to say">
                      Prefer not to say
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select> */}
            <SelectInput
              label="Gender"
              name="gender"
              optionsData={["Male", "Female", "Prefer not to say"]}
              placeholder="Male"
            />
          </div>
        </div>
        <div className="w-full flex justify-end">
          {/* <Button className="bg-blue " type="submit">
              Save changes
            </Button> */}
          <Button overrideStyles="w-[161px]">Save changes</Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default SettingsProfileForm;
