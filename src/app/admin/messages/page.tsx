// import MessagesTemplateChunk from "@/chunks/shared/messages-template-chunk/MessagesTemplateChunk";
import MessagesChunk from "@/chunks/admin-template-chunk/messages-chunk/messagesChunk";
import MessagesHeaderChunk from "@/chunks/shared/messages-header-chunk/MessagesHeaderChunk";
import DashboardLayout from "@/layouts/dashboard-layout/DashboardLayout";
// import MessagesLayout from "@/layouts/mesages-layout/MessagesLayout";
import React from "react";

const Messages = () => {
  return (
    <DashboardLayout>
      <MessagesHeaderChunk title="Messages" />
      <div className="border-b border-[#DAD2B8]" />
      <section className="border-[1px] mt-4">
        <MessagesChunk />
        {/* <MessagesTemplateChunk /> */}
      </section>
    </DashboardLayout>
  );
};

export default Messages;
