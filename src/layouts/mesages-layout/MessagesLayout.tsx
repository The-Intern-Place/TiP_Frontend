"use client";

import React from "react";

import MessagesMenuChunk from "@/chunks/shared/messages-menu-chunk/MessagesMenuChunk";
import { IMessagesLayoutProps } from "./MessagesLayout.types";

const MessagesLayout = (props: IMessagesLayoutProps) => {
  return (
    <main className="items-start min-h-screen">
      <MessagesMenuChunk
        conversations={[]}
        onSelectConversation={function (): void {
          throw new Error("Function not implemented.");
        }}
        selectedConversationId={null}
      />
      <div className="w-full bg-[rgb(250,251,252)]">{props.children}</div>
    </main>
  );
};

export default MessagesLayout;
