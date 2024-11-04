import MessagesTemplateChunk from "@/chunks/shared/messages-template-chunk/MessagesTemplateChunk";
import MessagesChunk from "@/chunks/admin-template-chunk/messages-chunk/MessagesChunk";
import MessagesHeaderChunk from "@/chunks/shared/messages-header-chunk/MessagesHeaderChunk";
import MessagesLayout from "@/layouts/mesages-layout/MessagesLayout";
import React from "react";

const Messages = () => {
  return (
    <>
      <MessagesHeaderChunk title="Messages" />
      <div className="border-b border-[#DAD2B8]" />
      <section className="border-[1px] mt-4">
        <MessagesLayout>
          <MessagesTemplateChunk />
        </MessagesLayout>
        <MessagesChunk />
      </section>
    </>
  );
};
export default Messages;
