import React from "react";
import useSettingsHeaderChunk from "../../settings-header-template-chunk/useSettingsHeaderChunk";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { LoginSchema } from "@/validation/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { Button } from "@/components/ui/button";

const SettingsUpdatePassword = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      old_password: "",
      new_password: "",
    },
  });
  const onSubmit = () => {
    console.log("submitted");
  };
  return (
    <div>
      <div className="md:border-b-[1px] border-b-0">
        <div className="md:py-8 flex flex-col md:flex-row md:w-[916px] justify-between">
          <div className="flex flex-col md:w-[270px]">
            <h1 className="hidden md:inline-flex text-base md:text-[18px] font-semibold font-epilogue">
              Update Password
            </h1>
            <p className="hidden md:inline text-base font-normal font-epilogue text-[#515B6F]">
              Manage your password to make sure it is safe
            </p>
          </div>

          {/* personal info form */}
          <div className=" flex flex-col gap-6 md:w-[540px]">
            {/* email check */}
            {/* <div className="flex flex-col gap-[6px]">
              <div className="flex gap-[3px]">
                <h1 className="text-base md:text-[18px] font-epilogue text-black font-semibold">
                  {user?.email}
                </h1>
                <IC_Check />
              </div>

              <p className="">Your email has been verified</p>
            </div> */}
            <Form {...form}>
              <React.Fragment>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                  action=""
                >
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="old_password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#1b1b1b] text-base font-epilogue font-semibold">
                            Old Password
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="h-[60px]"
                              type="password"
                              placeholder="Enter your old password"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription className="text-[#515B6F] text-base font-epilogue">
                            Minimum of 8 characters including numbers and
                            symbols
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="new_password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#1b1b1b] text-base font-epilogue font-semibold">
                            Old Password
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="h-[60px]"
                              type="password"
                              placeholder="Enter your new password"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription className="text-[#515B6F] text-base font-epilogue">
                            Minimum of 8 characters including numbers and
                            symbols
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-full flex justify-start">
                    <Button className="bg-blue " type="submit">
                      Change Password
                    </Button>
                  </div>
                </form>
              </React.Fragment>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsUpdatePassword;
