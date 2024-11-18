"use client";

import { useState } from "react";
import { ConversationsChunkProps } from "@/chunks/shared/messages-menu-chunk/MessagesMenuChunk.types";
import Image from "next/image";
import { CustomerSurvey } from "@assets/images";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsPinAngle } from "react-icons/bs";
import { RxPaperPlane } from "react-icons/rx";

interface Props {
  conversation: ConversationsChunkProps | null;
}

const MessageField: React.FC<Props> = ({ conversation }) => {
  const [message, setMessage] = useState("");

  if (!conversation) {
    return (
      <div className="flex max-w-[700px] mr-44 flex-col gap-5 items-center text-center mt-36 mb-56">
        <Image
          className="w-[220px] h-[220px]"
          src={CustomerSurvey}
          alt="Customer Survey"
        />
        <p className="text-grey opacity-50">
          Your message box is patiently awaiting new opportunities. Feel free to
          reach out to people. Let's make your career journey vibrant—start a
          conversation today!
        </p>
      </div>
    );
  }

  const handleSend = () => {
    if (message.trim()) {
      // Logic to send the message
      console.log(`Message sent:", ${message}`);
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col h-full p-4 border-t border-gray-200">
      <div className="flex justify-between items-center p-4 border-b border-gray-300">
        <div className="flex">
          <Image
            src={conversation.profileImage}
            alt="Profile"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="ml-4">
            <div className="text-lg font-semibold">{conversation.name}</div>
            <div className="text-sm text-gray-500">{conversation.jobTitle}</div>
          </div>
        </div>

        <div className="flex space-x-4">
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <BsPinAngle size={20} />
          </button>
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <BsThreeDotsVertical size={20} />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center py-8 text-center text-gray-500">
        <div className="flex">
          <Image
            src={conversation.profileImage}
            alt="Profile"
            width={70}
            height={70}
            className="rounded-full mt-8"
          />
          <div className="flex flex-col items-center py-2">
            <h2 className="mt-3 text-lg font-semibold">{conversation.name}</h2>
            <p className="text-sm">{conversation.jobTitle}</p>
          </div>
        </div>

        <p className="mt-2 text-sm">
          This is the beginning of your direct messages with{" "}
          <strong>{conversation.name}</strong>
        </p>
      </div>

      <div className="flex justify-center my-4">
        <span className="px-3 py-1 text-sm text-gray-500 border rounded-full">
          Today
        </span>
      </div>
      <div className="flex-grow overflow-y-auto">
        {conversation.messages.map((message) => (
          <div key={message.id} className="mb-2">
            <div className="flex">
              {!message.isUser && (
                <Image
                  src={conversation.profileImage}
                  alt={`${conversation.name}`}
                  width={30}
                  height={30}
                  className="rounded-full mr-3"
                />
              )}
              <div className="grid p-3 rounded-lg font-semibold">
                <p>{message.sender}:</p>
              </div>
            </div>
            <div
              className={`p-3 rounded-lg w-5/6 sm:w-4/6 text-sm ${
                message.isUser
                  ? "bg-blue-100 text-blue-800"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center w-full mt-96 border rounded-lg border-gray-300 focus-within:border-blue-500">
        <button className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none">
          📎
        </button>
        <input
          type="text"
          placeholder="Send your message"
          className="flex-grow p-2 mx-2 focus:outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none">
          <span role="img" aria-label="emoji">
            😊
          </span>
        </button>
        <button
          onClick={handleSend}
          className="p-2 text-white rounded-none focus:outline-none"
          style={{ backgroundColor: "#002360" }}
        >
          <RxPaperPlane size={20} />
        </button>
      </div>
    </div>
  );
};

export default MessageField;
