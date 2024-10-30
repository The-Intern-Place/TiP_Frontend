"use client";

import React, { useState } from "react";
import MessagesMenuChunk from "@/chunks/shared/messages-menu-chunk/MessagesMenuChunk";
// import MessagesTemplateChunk from '@/chunks/shared/messages-template-chunk/MessagesTemplateChunk'
import MessageField from "@/components/message field/MessageField";
import { ConversationsChunkProps } from "@/chunks/shared/messages-menu-chunk/MessagesMenuChunk.types";

const conversationsData: ConversationsChunkProps[] = [
  {
    id: 1,
    name: "Bolu Shakur",
    profileImage: "/images/alice-profile.jpg",
    time: "10:30 AM",
    messages: [
      {
        id: 1,
        text: "Hi Tosin, we read your cover letter and were very impressed. We’ll like to schedule an interview session if that’s okay with you.",
        sender: "Bolu Shakur",
        time: "15 mins ago",
        isUser: undefined,
      },
      {
        id: 2,
        text: "Get back to us as soon as possible",
        sender: "Bolu Shakur",
        time: "",
        isUser: undefined,
      },
    ],
    jobTitle: "HR at Oceanview",
    isUser: false,
  },
  {
    id: 2,
    name: "Obama Daisy",
    profileImage: "/images/bob-profile.jpg",
    time: "9:45 AM",
    messages: [
      {
        id: 1,
        text: "Hey!",
        sender: "Bob",
        time: "",
        isUser: undefined,
      },
      {
        id: 2,
        text: "Long Time No See",
        sender: "Bob",
        time: "",
        isUser: undefined,
      },
    ],
    jobTitle: "",
    isUser: false,
  },
  {
    id: 3,
    name: "Charlie Cox",
    profileImage: "/images/charlie-profile.jpg",
    time: "Yesterday",
    messages: [
      {
        id: 1,
        text: "Good Morning!",
        sender: "Charlie",
        time: "",
        isUser: undefined,
      },
      {
        id: 2,
        text: "Let's catch up later.",
        sender: "Charlie",
        time: "",
        isUser: undefined,
      },
    ],
    jobTitle: "",
    isUser: false,
  },
  {
    id: 4,
    name: "Gift Prince",
    profileImage: "/images/diana-profile.jpg",
    time: "Tuesday",
    messages: [
      {
        id: 1,
        text: "Hello!",
        sender: "Diana",
        time: "",
        isUser: undefined,
      },
      {
        id: 2,
        text: "See you soon.",
        sender: "Diana",
        time: "",
        isUser: undefined,
      },
    ],
    jobTitle: "",
    isUser: false,
  },
];

const MessagesChunk: React.FC = () => {
  const [selectedConversationId, setSelectedConversationId] = useState<
    number | null
  >(null);

  const selectedConversation =
    conversationsData.find((c) => c.id === selectedConversationId) || null;
  return (
    <div className="flex h-full">
      {/* Messages List - hidden on mobile when a conversation is selected */}
      <div
        className={`lg:block ${selectedConversationId ? "hidden" : "block w-full"}`}
      >
        <MessagesMenuChunk
          conversations={conversationsData}
          onSelectConversation={setSelectedConversationId}
          selectedConversationId={selectedConversationId}
        />
      </div>

      {/* Message Field - shown on mobile when a conversation is selected */}
      <div
        className={`flex-grow ${selectedConversationId ? "block" : "hidden lg:block"} h-full overflow-y-auto`}
      >
        <MessageField conversation={selectedConversation} />
      </div>
    </div>
  );
};

export default MessagesChunk;
