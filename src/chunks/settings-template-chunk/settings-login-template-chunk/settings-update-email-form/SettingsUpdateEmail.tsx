import IC_Check from "@assets/icons/IC_Check";
import React from "react";
import useSettingsHeaderChunk from "../../settings-header-template-chunk/useSettingsHeaderChunk";

import { LoginSchema } from "@/validation/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

import TextInput from "@/components/inputs/text-input/TextInput";
import Button from "@/components/button/Button";

const SettingsUpdateEmail = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      confirm_email: "",
    },
  });
  const { findID } = useSettingsHeaderChunk();
  const user = findID(1);
  const onSubmit = () => {
    console.log("submitted");
  };
  return (
    <div>
      <div className="md:border-b-[1px] border-b-0">
        <div className="md:py-8 flex flex-col md:flex-row md:w-[916px] justify-between">
          <div className="flex flex-col md:w-[270px]">
            <h1 className="hidden md:inline-flex text-base md:text-[18px] font-semibold font-epilogue">
              Update Email
            </h1>
            <p className="hidden md:inline text-base font-normal font-epilogue text-[#515B6F]">
              Update your email address to make sure it’s safe
            </p>
          </div>

          <div className=" flex flex-col gap-6 md:w-[540px]">
            <div className="flex flex-col gap-[6px]">
              <div className="flex gap-[3px]">
                <h1 className="text-base md:text-[18px] font-epilogue text-black font-semibold">
                  {user?.email}
                </h1>
                <IC_Check />
              </div>

              <p className="">Your email has been verified</p>
            </div>

            <React.Fragment>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
                action=""
              >
                <div className="space-y-4">
                  <TextInput
                    label="Update Email"
                    onChange={() => {}}
                    type="text"
                    placeholder="Enter your new email"
                    name="confirm_email"
                  />
                </div>
                <div className="w-full flex justify-start">
                  <Button overrideStyles=" w-[161px] sm:w-[161px]">
                    Update Email
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

export default SettingsUpdateEmail;
