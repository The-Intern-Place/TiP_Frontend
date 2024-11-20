import React from "react";
import useSettingsHeaderChunk from "../settings-header-template-chunk/useSettingsHeaderChunk";
import SettingsUpdateEmail from "./settings-update-email-form/SettingsUpdateEmail";
import SettingsUpdatePassword from "./settings-update-pasword-form/SettingsUpdatePassword";

const SettingsLoginChunk = () => {
  const { findID } = useSettingsHeaderChunk();
  const user = findID(1);
  return (
    <div className="md:mx-7">
      <div className="flex flex-col md:py-6 py-4 md:border-b-[1px] border-b-0">
        <h1 className="text-base font-semibold font-epilogue">Login Details</h1>
        <p className="font-epilogue text-base font-normal leading-6 text-left text-[#1B1B1B99]">
          Your login information can be changed anytime
        </p>
      </div>
      <div className="">
        <SettingsUpdateEmail />
        <SettingsUpdatePassword />
      </div>
    </div>
  );
};

export default SettingsLoginChunk;
