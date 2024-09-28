import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

const SettingsNotificationCheckboxForm = () => {
  return (
    <div className="">
      <div className="md:border-b-[1px] border-b-0">
        <div className="md:py-8 flex flex-col md:flex-row md:w-[916px] justify-between">
          <div className="flex flex-col md:w-[270px]">
            <h1 className="hidden md:inline-flex text-base md:text-[18px] font-semibold font-epilogue">
              Notifications
            </h1>
            <p className="hidden md:inline text-base font-normal font-epilogue text-[#515B6F]">
              Customize your preferred notification setting
            </p>
          </div>
          {/* checkboxes */}
          <div className=" flex flex-row gap-6 md:w-[540px]">
            <Checkbox id="terms1" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Applications
              </label>
              <p className="text-sm text-muted-foreground">
                These notifications for jobs you have applied to.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SettingsNotificationCheckboxForm;
