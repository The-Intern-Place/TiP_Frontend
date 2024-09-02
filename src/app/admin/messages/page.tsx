import MessagesTemplateChunk from "@/chunks/admin-template-chunk/messages-template-chunk/MessagesTemplateChunk";
import MessagesHeaderChunk from "@/chunks/shared/messages-header-chunk/MessagesHeaderChunk";
import DashboardLayout from "@/layouts/dashboard-layout/DashboardLayout";
import MessagesLayout from "@/layouts/mesages-layout/MessagesLayout";
import React from "react";

const Messages = () => {
  return (
    <DashboardLayout>
      <MessagesHeaderChunk title="Messages" />
      <div className="border-b border-[#DAD2B8]" />
      <section className="border-[1px] mt-4">
        <MessagesLayout>
          <MessagesTemplateChunk />
        </MessagesLayout>
      </section>
    </DashboardLayout>
  );
};

export default Messages;
