import React from "react";
import Image from "next/image";
// import useMessagesTemplateChunk from "./useMessagesTemplateChunk";
import { CustomerSurvey } from "@assets/images";
import MessageField from "@/components/message field/MessageField";

function MessagesTemplateChunk() {
  //   const data = useMessagesTemplateChunk();
  return (
    <div className="py-5 grid grid-flow-row gap-10 w-full">
      {/* <div className="flex border-b-2">
        <Image
          className="w-[20px] h-[20px]"
          src={CustomerSurvey}
          alt="Customer Survey"
        />
        <div>
          <h2 className="text-2xl font-bold leading-[28.8px] text-grey">
            Hello Tosin
          </h2>
          <p className="text-grey opacity-60">
            Discover exciting opportunities. Dive in!
          </p>
        </div>
      </div> */}
      <div className="flex max-w-[700px] mx-auto flex-col gap-5 items-center text-center mt-36 mb-56">
        <Image
          className="w-[220px] h-[220px]"
          src={CustomerSurvey}
          alt="Customer Survey"
        />
        <p className="text-grey opacity-50">
          Your message box is patiently awaiting new opportunities. Feel free to
          reach out to people. Let's make your career journey vibrant—start a
          conversation today!"
        </p>
      </div>
      {/* {!data.user && (
        <div className="flex max-w-[700px] mx-auto flex-col gap-5 items-center text-center">
          <Image
            className="w-[220px] h-[220px]"
            src={CustomerSurvey}
            alt="Customer Survey"
          />
          <p className="text-grey opacity-50">
            It looks like you're all set up, but your feed is empty! To receive
            tailored job recommendations, please update your profile with your
            preferences and skills. Let's make sure you find the perfect
            opportunities!
          </p>
        </div>
      )} */}
      <div className="hidden">
        <MessageField />
      </div>
    </div>
  );
}

export default MessagesTemplateChunk;
