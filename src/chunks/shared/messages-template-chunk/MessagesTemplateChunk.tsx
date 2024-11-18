"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CustomerSurvey } from "@assets/images";
import MessageField from "@/components/messagefield/MessageField";

function MessagesTemplateChunk() {
  const [isMessageSelected, setIsMessageSelected] = useState(false);

  const handleSelectMessage = () => {
    setIsMessageSelected(true);
  };

  return (
    <div className="py-5 grid grid-flow-row gap-10 w-full">
      {!isMessageSelected ? (
        <div className="flex max-w-[700px] mx-auto flex-col gap-5 items-center text-center mt-36 mb-56">
          <Image
            className="w-[220px] h-[220px]"
            src={CustomerSurvey}
            alt="Customer Survey"
          />
          <p className="text-grey opacity-50">
            Your message box is patiently awaiting new opportunities. Feel free
            to reach out to people. Let's make your career journey vibrant—start
            a conversation today!
          </p>
          <button
            onClick={handleSelectMessage}
            className="mt-4 p-2 text-black bg-blue-600 rounded"
          >
            Click to View Messages
          </button>
        </div>
      ) : (
        <div className="flex max-w-[700px] mx-auto flex-col gap-5 items-center text-center mt-10 mb-10">
          <MessageField conversation={null} />
        </div>
      )}
    </div>
  );
}

export default MessagesTemplateChunk;
