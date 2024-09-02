import React from "react";
import useMessagesLayout from "./useMessagesLayout";
import MessagesMenuChunk from "@/chunks/shared/messages-menu-chunk/MessagesMenuChunk";
import { IMessagesLayoutProps } from "./MessagesLayout.types";

const MessagesLayout = (props: IMessagesLayoutProps) => {
  const { messageOptions } = useMessagesLayout();
  return (
    <main className="items-start min-h-screen">
      <MessagesMenuChunk options={messageOptions} />
      <div className="w-full bg-[rgb(250,251,252)]">{props.children}</div>
    </main>
  );
};

export default MessagesLayout;
