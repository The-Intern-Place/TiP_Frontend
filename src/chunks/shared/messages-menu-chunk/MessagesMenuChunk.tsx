"use client";

import Image from "next/image";
import { ConversationsChunkProps } from "./MessagesMenuChunk.types";
import searchicon from "public/images/searchicon.svg";
import React, { useState } from "react";

interface Props {
  conversations: ConversationsChunkProps[];
  onSelectConversation: (_id: number) => void;
  selectedConversationId: number | null;
}

const MessagesMenuChunk: React.FC<Props> = ({
  conversations,
  onSelectConversation,
  selectedConversationId,
}) => {
  // State to store read conversations with latest message
  const [readConversations, setReadConversations] = useState<{
    [id: number]: string;
  }>({});

  // eslint-disable-next-line no-unused-vars
  const handleConversationClick = (_id: number, lastMessage: string) => {
    // Mark conversation as read with the latest message
    setReadConversations((prev) => ({
      ...prev,
      [_id]: lastMessage,
    }));
    // Call parent handler
    onSelectConversation(_id);
  };

  return (
    <div className="sm:bg-white sm:border-[1px] lg:w-[502px] md:w-[232px] sm:w-[200px] sm:block overflow-auto max-w-[550px] flex-shrink-0 w-full flex flex-col sticky top-0">
      <div className="flex items-center border-[1px] rounded-lg border-gray w-[50%] lg:px-1 gap-[16px] pt-0 pb-0 lg:pl-[16px] mx-8 mt-5">
        <Image
          src={searchicon}
          alt="searchIcon"
          className="md:w-[24px] w-[20px] md:h-[24px] h-[20px] ml-[0.4rem] md:ml-0"
        />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent focus:outline-none focus:ring-0 lg:w-[485px] w-full h-[60px] items-center"
        />
      </div>
      <div className="flex flex-col max-h-full gap-4 px-7 py-6">
        {conversations.map((conversation) => {
          const lastMessage =
            conversation.messages[conversation.messages.length - 1].text;
          const lastMessageTime = conversation.time || "N/A";
          return (
            <div
              key={conversation.id}
              onClick={() =>
                handleConversationClick(conversation.id, lastMessage)
              }
              className={`p-4 rounded-lg cursor-pointer flex items-center gap-4 ${
                conversation.id === selectedConversationId
                  ? "bg-[#ECF2FE]"
                  : "bg-transparent"
              }`}
            >
              <Image
                src={conversation.profileImage}
                alt={`${conversation.name} profile`}
                className="w-10 h-10 rounded-full"
                width={40}
                height={40}
              />
              <div className="flex-grow">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">
                    {conversation.name}
                  </span>
                  <span className="text-xs text-gray-400">
                    {lastMessageTime}
                  </span>
                </div>
                {/* Show the latest message if conversation hasn't been read */}
                <div className="text-sm text-gray-500">
                  {readConversations[conversation.id] || "New Message"}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MessagesMenuChunk;
