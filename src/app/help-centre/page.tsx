import GetStartedTemplateChunk from "@/chunks/help-centre-template-chunk/get-started-template-chunk/GetStartedTemplateChunk";
import HelpCenterFormTemplateChunk from "@/chunks/help-centre-template-chunk/help-centre-form-template-chunk/HelpCenterFormTemplateChunk";
import SettingsContainer from "@/chunks/settings-template-chunk/settings-container-chunk/SettingsContainer";
import React from "react";

const HelpCentre = () => {
  return (
    <SettingsContainer className="max-w-screen-xl mx-auto flex flex-row gap-6">
      <GetStartedTemplateChunk />
      <HelpCenterFormTemplateChunk />
    </SettingsContainer>
  );
};

export default HelpCentre;
