import React from "react";
import useSettingsHeaderChunk from "../../settings-header-template-chunk/useSettingsHeaderChunk";
import { LoginSchema } from "@/validation/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

import TextInput from "@/components/inputs/text-input/TextInput";
import Button from "@/components/button/Button";

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

          <div className=" flex flex-col gap-6 md:w-[540px]">
            <React.Fragment>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
                action=""
              >
                <div className="space-y-4">
                  <TextInput
                    label="Old Password"
                    onChange={() => {}}
                    type="password"
                    placeholder="Enter your old password"
                    name="old_password"
                  />

                  <TextInput
                    label="New Password"
                    onChange={() => {}}
                    type="password"
                    placeholder="Enter your new password"
                    name="new_password"
                  />
                </div>
                <div className="w-[194px] flex justify-start ml-auto">
                  <Button fit={false} overrideStyles="">
                    Change Password
                  </Button>
                </div>
              </form>
            </React.Fragment>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsUpdatePassword;
