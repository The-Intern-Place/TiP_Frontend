"use client";
import SettingsContainer from "@/chunks/settings-template-chunk/settings-container-chunk/SettingsContainer";
import React, { useState } from "react";

const Settings = () => {
  const [active, setActive] = useState("profile");

  const handleActive = (section: string) => {
    setActive(section);
  };

  return (
    <SettingsContainer className="">
      <div className="border-b-[1px] md:mx-7 ">
        <div className="flex md:items-start md:justify-start justify-between gap-2 pt-5 md:px-8">
          <h1
            onClick={() => setActive("profile")}
            className={
              "pb-4 px-4 text-base font-normal font-epilogue text-[#7C8493] hover:font-semibold active:font-semibold active:text-black hover:border-b-2 hover:border-blue"
            }
          >
            My Profile
          </h1>
          <h1
            onClick={() => setActive("login")}
            className={
              "pb-4 px-4 text-base font-normal font-epilogue text-[#7C8493] hover:font-semibold active:font-semibold active:text-black hover:border-b-2 hover:border-blue"
            }
          >
            Login Details
          </h1>
          <h1
            onClick={() => handleActive("notifications")}
            className={
              active === "notifications"
                ? "pb-4 px-4 text-base font-normal font-epilogue text-[#7C8493] hover:font-semibold  hover:text-black  hover:border-b-2 hover:border-blue"
                : "pb-4 px-4 text-base font-normal font-epilogue text-[#7C8493]"
            }
          >
            Notifications
          </h1>
        </div>
        {active === "profile" ? (
          <div>Profile</div>
        ) : active === "login" ? (
          <div>Login</div>
        ) : active === "notifications" ? (
          <div>Notifications</div>
        ) : null}
      </div>
    </SettingsContainer>
  );
};

export default Settings;
