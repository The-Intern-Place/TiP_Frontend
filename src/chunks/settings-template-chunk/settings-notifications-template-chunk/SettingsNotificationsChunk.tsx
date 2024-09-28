import React from "react";
import SettingsNotificationCheckboxForm from "./settings-notification-checkbox-form/SettingsNotificationCheckboxForm";

const SettingsNotificationsChunk = () => {
  return (
    <div className="md:mx-7">
      <div className="flex flex-col md:py-6 py-4 md:border-b-[1px] border-b-0">
        <h1 className="text-base font-semibold font-epilogue">Notifications</h1>
        <p className="font-epilogue text-base font-normal leading-6 text-left text-[#1B1B1B99]">
          Notification preferences can be updated any time
        </p>
      </div>
      {/* Notification Checkbox */}
      <div className="">
        <SettingsNotificationCheckboxForm />
      </div>
    </div>
  );
};

export default SettingsNotificationsChunk;
