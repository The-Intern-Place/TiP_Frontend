"use client";

import React, { useState } from "react";
import MessagesMenuChunk from "@/chunks/shared/messages-menu-chunk/MessagesMenuChunk";
// import MessagesTemplateChunk from '@/chunks/shared/messages-template-chunk/MessagesTemplateChunk'
import MessageField from "@/components/messagefield/MessageField";
import { conversationsData } from "./useMessagesData";



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
