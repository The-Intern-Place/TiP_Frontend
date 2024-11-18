import GetStartedTemplateChunk from "@/chunks/help-centre-template-chunk/get-started-template-chunk/GetStartedTemplateChunk";
import HelpCenterFormTemplateChunk from "@/chunks/help-centre-template-chunk/help-centre-form-template-chunk/HelpCenterFormTemplateChunk";
import SettingsContainer from "@/chunks/settings-template-chunk/settings-container-chunk/SettingsContainer";
import DashboardHeaderChunk from "@/chunks/shared/dashboard-header-chunk/DashboardHeaderChunk";
import DashboardLayout from "@/layouts/dashboard-layout/DashboardLayout";
import React from "react";

const HelpCentre = () => {
  return (
    <DashboardLayout>
      <DashboardHeaderChunk title="Help Center" />
      <div className="border-b border-[#DAD2B8]" />
      <section className="px-7 bg-[#FAFBFC]">
        <div className="w-full mx-auto flex flex-row gap-6">
          <GetStartedTemplateChunk />
          <HelpCenterFormTemplateChunk />
        </div>
      </section>
    </DashboardLayout>
  );
};

export default HelpCentre;
